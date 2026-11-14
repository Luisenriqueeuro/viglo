(function () {
  var dlg = document.getElementById("com-dlg"), abrir = document.getElementById("com-abrir");
  if (!dlg || !abrir) return;
  function t(k) { return (window.VG_T && window.VG_T(k)) || ""; }
  function show(id, on) { var e = document.getElementById(id); if (e) e.hidden = !on; }
  function tab(n) {
    show("com-p-in", n === "in"); show("com-p-new", n === "new");
    document.getElementById("com-t-in").classList.toggle("on", n === "in");
    document.getElementById("com-t-new").classList.toggle("on", n === "new");
    document.getElementById("com-msg-in").innerHTML = ""; document.getElementById("com-msg-new").innerHTML = "";
  }
  abrir.addEventListener("click", function () { tab("in"); if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); });
  document.getElementById("com-x").addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg && dlg.close) dlg.close(); });
  document.getElementById("com-t-in").addEventListener("click", function () { tab("in"); });
  document.getElementById("com-t-new").addEventListener("click", function () { tab("new"); });
  document.getElementById("com-code").addEventListener("input", function () { this.value = this.value.replace(/\D/g, "").slice(0, 5); });
  document.getElementById("com-in").addEventListener("submit", function (e) {
    e.preventDefault();
    var tel = document.getElementById("com-tel").value.replace(/[^\d]/g, ""), cd = document.getElementById("com-code").value, m = document.getElementById("com-msg-in");
    if (tel.length < 10 || tel.length > 15) { m.className = "com-msg err"; m.textContent = t("com_e_tel"); return; }
    if (!/^\d{5}$/.test(cd)) { m.className = "com-msg err"; m.textContent = t("com_e_code"); return; }
    var url = (window.VG_CONFIG && window.VG_CONFIG.APP_URL) || "#";
    m.className = "com-msg"; m.innerHTML = t("com_pending") + ' <a class="btn sec" href="' + url + '">' + t("open") + "</a>";
  });
  document.getElementById("com-new").addEventListener("submit", function (e) {
    e.preventDefault();
    var nm = document.getElementById("com-nom").value.replace(/\s+/g, " ").trim(), cel = document.getElementById("com-cel").value.replace(/\D/g, ""),
      c = document.getElementById("com-mail").value.trim().toLowerCase(), m = document.getElementById("com-msg-new"), b = e.target.querySelector("button[type=submit]");
    function err(k) { m.className = "com-msg err"; m.textContent = t(k); }
    if (nm.length < 5 || nm.split(" ").length < 2) return err("com_e_nom");
    if (cel.length < 10 || cel.length > 15) return err("com_e_cel");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c)) return err("com_e_mail");
    var url = window.VG_CONFIG && window.VG_CONFIG.ALTA_URL;
    if (!url || !window.fetch) return err("com_e_red");
    b.disabled = true; m.className = "com-msg"; m.textContent = "…";
    var body = new URLSearchParams({ nm: nm, tl: cel, e: c, web: document.getElementById("com-web").value });
    fetch(url + "?v=13", { method: "POST", body: body }).then(function (r) { return r.json(); }).then(function (r) {
      b.disabled = false;
      if (r && r.ok) { var l = r.liga || "https://" + cel.slice(-10) + ".vigloapp.com"; m.className = "com-msg ok"; m.innerHTML = t("com_ok") + ' <a href="' + l + '">' + l.replace("https://", "") + "</a>"; return; }
      var mo = r && r.motivo;
      err(mo === "existe" ? "com_e_existe" : mo === "telenuso" ? "com_e_telenuso" : mo === "limite" ? "com_e_limite" : mo === "nombre" ? "com_e_nom" : mo === "telefono" ? "com_e_cel" : mo === "correo" ? "com_e_mail" : "com_e_red");
    }).catch(function () { b.disabled = false; err("com_e_red"); });
  });
})();
