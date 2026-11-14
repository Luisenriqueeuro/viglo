(function () {
  var dlg = document.getElementById("com-dlg"), abrir = document.getElementById("com-abrir");
  if (!dlg || !abrir) return;
  var MAIL = "info@vigloapp.com";
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
    var c = document.getElementById("com-mail").value.trim(), m = document.getElementById("com-msg-new");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c)) { m.className = "com-msg err"; m.textContent = t("com_e_mail"); return; }
    var href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(t("com_subj")) + "&body=" + encodeURIComponent(t("com_body") + "\n" + c + "\n");
    m.className = "com-msg ok"; m.innerHTML = t("com_sent") + ' <a href="' + href + '">' + t("com_send_link") + "</a>";
    location.href = href;
  });
})();
