(function () {
  var VIDEOS = {
    es: "https://drive.google.com/drive/folders/1Z1hAx2Fu4Up8zOUTuDLs0jpYYWu1CHkg",
    en: "https://drive.google.com/drive/folders/1XVvuqUIaTQRZ-sgdGGnrHiPp7cIsYJqu",
    de: "https://drive.google.com/drive/folders/1hH2i0S2NzmN4zWEbL5zU6-8MweHu4ac_"
  };
  var MANUALS = {
    es: [["Manual de instalación", "manuales/instalacion-es.pdf"]],
    en: [["Installation manual", "manuales/installation-en.pdf"], ["User manual", "manuales/user-manual-en.pdf"]],
    de: [["Installationsanleitung", "manuales/installation-de.pdf"], ["Bedienungsanleitung", "manuales/bedienung-de.pdf"]]
  };
  var T = {
    es: {
      tagline: "Del Hogar, al Negocio y el Mundo",
      intro: "Tu vida organizada en un solo lugar: dinero, salud, tareas, documentos y familia. Tus datos viven en tu propio Google Drive.",
      trial: "21 días de prueba gratis", priv: "Datos en tu Drive", multi: "Español · English · Deutsch",
      op_android: "Instalar en Android", op_android_d: "Un toque y queda como app",
      op_iphone: "Instalar en iPhone", op_iphone_d: "Desde Safari, en 3 pasos",
      op_videos: "Ver videos de la app", op_videos_d: "Promocional, instalación y uso",
      op_manuals: "Manuales", op_manuals_d: "Guías en PDF para descargar",
      see_title: "Así se ve", see_lead: "Pantallas de ejemplo con datos ficticios. Desliza para ver más.",
      c_gastos: "Gastos con foto", c_medicamentos: "Medicamentos", c_tareas: "Tareas y citas", c_archivos: "Mis archivos", c_casa: "Casa y auto", c_emergencias: "Emergencias", c_salud: "Salud familiar", c_reportes: "Reportes para imprimir",
      start_title: "Para empezar",
      s1: "<b>Instala la app</b> en tu teléfono con la guía de Android o iPhone.",
      s2: "<b>Ábrela desde su ícono</b> e inicia sesión con tu cuenta de Google (solo la primera vez).",
      s3: "<b>Prueba gratis 21 días con todas las funciones abiertas.</b> Te recomendamos empezar por Gastos, Tareas y Mis archivos.",
      have: "¿Ya la tienes?", open: "Abrir Vida Global",
      home: "‹ Inicio", foot: "Tus datos se guardan en tu propio Google Drive.",
      a_title: "Instalar en Android", a_lead: "Usa Chrome. Tarda menos de un minuto.", a_btn: "📲 Instalar Vida Global ahora", a_done: "✅ ¡Listo! Busca el ícono de <b>Vida Global</b> en tu pantalla de inicio.",
      a1: "Abre <b>vigloapp.com</b> en <b>Chrome</b>.", a2: "Toca el menú <b>⋮</b> (arriba a la derecha).", a3: "Elige <b>Instalar app</b> o <b>Agregar a la pantalla principal</b>, y confirma con <b>Instalar</b>.", a4: "Abre <b>Vida Global</b> desde el ícono nuevo e inicia sesión con tu cuenta de Google.",
      a_warn: "<b>Si Google muestra “aplicación no verificada”:</b> toca <b>Configuración avanzada</b> y luego <b>Ir a Vida Global</b>. Es normal la primera vez.",
      auto: "Las actualizaciones llegan solas: no tienes que volver a instalar.",
      i_title: "Instalar en iPhone", i_lead: "Debe hacerse desde <b>Safari</b> (no desde Chrome). Tarda menos de un minuto.",
      i1: "Abre <b>vigloapp.com</b> en <b>Safari</b>.", i2: "Busca el botón <b>Compartir</b> (un cuadro con una flecha hacia arriba). Mira abajo los 3 casos: puede estar <b>abajo</b>, <b>arriba</b> o dentro del menú <b>···</b>.", i3: "Desliza y elige <b>Agregar a pantalla de inicio</b>, luego toca <b>Agregar</b>.", i4: "Abre <b>Vida Global</b> desde el ícono nuevo e inicia sesión con tu cuenta de Google.",
      i_tip: "Si no ves Compartir, toca los tres puntos <b>···</b> o las tres rayas <b>≡</b> de la barra de Safari: ahí aparece <b>Compartir</b>.",
      m_title: "Manuales", m_lead: "Descarga la guía en tu idioma.", m_other: "Otros idiomas", m_pdf: "PDF", m_soon: "Manual de uso en español: próximamente.",
      sf_title: "Ábrelo en Safari para instalar", sf_text: "Estás en otro navegador. En iPhone la app solo se instala desde <b>Safari</b>. Toca el botón y continúa ahí.", sf_open: "Abrir en Safari", sf_copy: "Copiar enlace", sf_copied: "✅ Enlace copiado: pégalo en Safari", sf_help: "Si no se abre, copia el enlace, abre Safari y pégalo en la barra de direcciones.",
      ios_btn: "Toca aquí para abrir el menú Compartir", ios_next: "En el menú que se abre, desliza hacia abajo y toca <b>Agregar a pantalla de inicio</b>, luego <b>Agregar</b>.", ios_arrow: "Compartir",
      d_title: "¿Dónde está el botón Compartir?", d_a: "Barra abajo", d_a_t: "Cuadro con flecha ⬆ en el centro de la barra de abajo.", d_b: "Barra arriba", d_b_t: "Cuadro con flecha ⬆ a la derecha de la barra de direcciones.", d_c: "En el menú", d_c_t: "Toca <b>···</b> o <b>≡</b> y elige <b>Compartir</b>.",
      qr_title: "Instálala también en otro teléfono", qr_text: "Escanea este código con la cámara de otro teléfono: abre esta página para instalar la app.",
      com_btn: "Comisionistas", com_title: "Acceso a comisionistas", com_tab_in: "Ya soy comisionista", com_tab_new: "Quiero ser comisionista", com_tel: "Teléfono registrado (con lada)", com_code: "Código de acceso (5 dígitos)", com_in_go: "Entrar", com_new_help: "Escribe tu correo y solicita tu alta. El administrador te responderá.", com_mail: "Tu correo", com_new_go: "Solicitar alta", com_res: "Para comisionistas", com_v_neg: "Video del negocio", com_v_com: "Video del comisionista", com_lang_note: "En español", com_guide: "Guía del comisionista", com_guide_n: "Español · English · Deutsch", com_e_tel: "Escribe tu teléfono con lada, solo números (10 a 15 dígitos).", com_e_code: "El código son 5 dígitos.", com_e_mail: "Escribe un correo válido.", com_pending: "Estamos terminando de activar este acceso. Mientras tanto, entra a la app con tu correo y tu clave de comisionista.", com_subj: "Solicitud de alta de comisionista", com_body: "Quiero ser comisionista de Vida Global. Mi correo:", com_sent: "Se abrió tu correo con la solicitud lista para enviar.", com_send_link: "Si no se abrió, toca aquí.", g_print: "Guardar o imprimir (PDF)",
      v_title: "Videos de la app", see_manuals: "Ver manuales", see_videos: "Ver videos"
    },
    en: {
      tagline: "From Home, to Business and the World",
      intro: "Your life organized in one place: money, health, tasks, documents and family. Your data lives in your own Google Drive.",
      trial: "21-day free trial", priv: "Data in your Drive", multi: "Español · English · Deutsch",
      op_android: "Install on Android", op_android_d: "One tap and it becomes an app",
      op_iphone: "Install on iPhone", op_iphone_d: "From Safari, in 3 steps",
      op_videos: "Watch the app videos", op_videos_d: "Promo, installation and usage",
      op_manuals: "Manuals", op_manuals_d: "PDF guides to download",
      see_title: "See it in action", see_lead: "Sample screens with fictional data. Swipe to see more.",
      c_gastos: "Expenses with photo", c_medicamentos: "Medications", c_tareas: "Tasks and appointments", c_archivos: "My files", c_casa: "Home and car", c_emergencias: "Emergencies", c_salud: "Family health", c_reportes: "Printable reports",
      start_title: "Getting started",
      s1: "<b>Install the app</b> on your phone with the Android or iPhone guide.",
      s2: "<b>Open it from its icon</b> and sign in with your Google account (first time only).",
      s3: "<b>Try it free for 21 days with every feature unlocked.</b> We recommend starting with Expenses, Tasks and My files.",
      have: "Already have it?", open: "Open Vida Global",
      home: "‹ Home", foot: "Your data is stored in your own Google Drive.",
      a_title: "Install on Android", a_lead: "Use Chrome. It takes less than a minute.", a_btn: "📲 Install Vida Global now", a_done: "✅ Done! Look for the <b>Vida Global</b> icon on your home screen.",
      a1: "Open <b>vigloapp.com</b> in <b>Chrome</b>.", a2: "Tap the <b>⋮</b> menu (top right).", a3: "Choose <b>Install app</b> or <b>Add to Home screen</b>, then confirm with <b>Install</b>.", a4: "Open <b>Vida Global</b> from the new icon and sign in with your Google account.",
      a_warn: "<b>If Google shows “unverified app”:</b> tap <b>Advanced</b> and then <b>Go to Vida Global</b>. This is normal the first time.",
      auto: "Updates arrive automatically: you never need to reinstall.",
      i_title: "Install on iPhone", i_lead: "It must be done from <b>Safari</b> (not Chrome). It takes less than a minute.",
      i1: "Open <b>vigloapp.com</b> in <b>Safari</b>.", i2: "Look for the <b>Share</b> button (a square with an arrow pointing up). See the 3 cases below: it can be at the <b>bottom</b>, at the <b>top</b>, or inside the <b>···</b> menu.", i3: "Scroll and choose <b>Add to Home Screen</b>, then tap <b>Add</b>.", i4: "Open <b>Vida Global</b> from the new icon and sign in with your Google account.",
      i_tip: "If you don't see Share, tap the three dots <b>···</b> or the three lines <b>≡</b> in Safari's bar: <b>Share</b> appears there.",
      m_title: "Manuals", m_lead: "Download the guide in your language.", m_other: "Other languages", m_pdf: "PDF", m_soon: "Spanish user manual: coming soon.",
      sf_title: "Open it in Safari to install", sf_text: "You are in another browser. On iPhone the app can only be installed from <b>Safari</b>. Tap the button and continue there.", sf_open: "Open in Safari", sf_copy: "Copy link", sf_copied: "✅ Link copied: paste it in Safari", sf_help: "If it does not open, copy the link, open Safari and paste it in the address bar.",
      ios_btn: "Tap here to open the Share menu", ios_next: "In the menu that opens, scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b>.", ios_arrow: "Share",
      d_title: "Where is the Share button?", d_a: "Bar at bottom", d_a_t: "Square with an arrow ⬆ in the center of the bottom bar.", d_b: "Bar at top", d_b_t: "Square with an arrow ⬆ to the right of the address bar.", d_c: "In the menu", d_c_t: "Tap <b>···</b> or <b>≡</b> and choose <b>Share</b>.",
      qr_title: "Install it on another phone too", qr_text: "Scan this code with another phone's camera: it opens this page so you can install the app.",
      com_btn: "Commission agents", com_title: "Commission agent access", com_tab_in: "I'm already an agent", com_tab_new: "I want to become an agent", com_tel: "Registered phone (with country code)", com_code: "Access code (5 digits)", com_in_go: "Sign in", com_new_help: "Enter your email and request to join. The administrator will reply.", com_mail: "Your email", com_new_go: "Request to join", com_res: "For commission agents", com_v_neg: "Business video", com_v_com: "Commission agent video", com_lang_note: "In Spanish", com_guide: "Commission agent guide", com_guide_n: "Español · English · Deutsch", com_e_tel: "Enter your phone with country code, digits only (10 to 15).", com_e_code: "The code is 5 digits.", com_e_mail: "Enter a valid email.", com_pending: "We are finishing activating this access. Meanwhile, open the app with your email and your commission agent code.", com_subj: "Commission agent request", com_body: "I want to become a Vida Global commission agent. My email:", com_sent: "Your email app opened with the request ready to send.", com_send_link: "If it did not open, tap here.", g_print: "Save or print (PDF)",
      v_title: "App videos", see_manuals: "View manuals", see_videos: "Watch videos"
    },
    de: {
      tagline: "Von Zuhause über das Geschäft in die Welt",
      intro: "Dein Leben an einem Ort organisiert: Geld, Gesundheit, Aufgaben, Dokumente und Familie. Deine Daten liegen in deinem eigenen Google Drive.",
      trial: "21 Tage kostenlos testen", priv: "Daten in deinem Drive", multi: "Español · English · Deutsch",
      op_android: "Auf Android installieren", op_android_d: "Ein Tipp, und sie wird zur App",
      op_iphone: "Auf dem iPhone installieren", op_iphone_d: "Über Safari, in 3 Schritten",
      op_videos: "App-Videos ansehen", op_videos_d: "Werbung, Installation und Nutzung",
      op_manuals: "Anleitungen", op_manuals_d: "PDF-Anleitungen zum Herunterladen",
      see_title: "So sieht es aus", see_lead: "Beispielbildschirme mit fiktiven Daten. Wische für mehr.",
      c_gastos: "Ausgaben mit Foto", c_medicamentos: "Medikamente", c_tareas: "Aufgaben und Termine", c_archivos: "Meine Dateien", c_casa: "Haus und Auto", c_emergencias: "Notfälle", c_salud: "Familiengesundheit", c_reportes: "Druckbare Berichte",
      start_title: "Erste Schritte",
      s1: "<b>Installiere die App</b> auf deinem Handy mit der Android- oder iPhone-Anleitung.",
      s2: "<b>Öffne sie über ihr Symbol</b> und melde dich mit deinem Google-Konto an (nur beim ersten Mal).",
      s3: "<b>21 Tage kostenlos testen, alle Funktionen sind freigeschaltet.</b> Wir empfehlen, mit Ausgaben, Aufgaben und Meine Dateien zu beginnen.",
      have: "Schon installiert?", open: "Vida Global öffnen",
      home: "‹ Start", foot: "Deine Daten werden in deinem eigenen Google Drive gespeichert.",
      a_title: "Auf Android installieren", a_lead: "Verwende Chrome. Dauert weniger als eine Minute.", a_btn: "📲 Vida Global jetzt installieren", a_done: "✅ Fertig! Suche das <b>Vida Global</b>-Symbol auf deinem Startbildschirm.",
      a1: "Öffne <b>vigloapp.com</b> in <b>Chrome</b>.", a2: "Tippe auf das Menü <b>⋮</b> (oben rechts).", a3: "Wähle <b>App installieren</b> oder <b>Zum Startbildschirm hinzufügen</b> und bestätige mit <b>Installieren</b>.", a4: "Öffne <b>Vida Global</b> über das neue Symbol und melde dich mit deinem Google-Konto an.",
      a_warn: "<b>Wenn Google „nicht überprüfte App“ anzeigt:</b> tippe auf <b>Erweitert</b> und dann auf <b>Weiter zu Vida Global</b>. Das ist beim ersten Mal normal.",
      auto: "Updates kommen automatisch: Du musst nie neu installieren.",
      i_title: "Auf dem iPhone installieren", i_lead: "Das muss in <b>Safari</b> geschehen (nicht in Chrome). Dauert weniger als eine Minute.",
      i1: "Öffne <b>vigloapp.com</b> in <b>Safari</b>.", i2: "Suche die Schaltfläche <b>Teilen</b> (ein Quadrat mit Pfeil nach oben). Sieh dir unten die 3 Fälle an: Sie kann <b>unten</b>, <b>oben</b> oder im Menü <b>···</b> sein.", i3: "Scrolle und wähle <b>Zum Home-Bildschirm</b>, dann tippe auf <b>Hinzufügen</b>.", i4: "Öffne <b>Vida Global</b> über das neue Symbol und melde dich mit deinem Google-Konto an.",
      i_tip: "Wenn du Teilen nicht siehst, tippe in der Safari-Leiste auf die drei Punkte <b>···</b> oder die drei Striche <b>≡</b>: Dort erscheint <b>Teilen</b>.",
      m_title: "Anleitungen", m_lead: "Lade die Anleitung in deiner Sprache herunter.", m_other: "Andere Sprachen", m_pdf: "PDF", m_soon: "Spanisches Benutzerhandbuch: demnächst.",
      sf_title: "In Safari öffnen, um zu installieren", sf_text: "Du bist in einem anderen Browser. Auf dem iPhone lässt sich die App nur über <b>Safari</b> installieren. Tippe auf die Schaltfläche und mache dort weiter.", sf_open: "In Safari öffnen", sf_copy: "Link kopieren", sf_copied: "✅ Link kopiert: in Safari einfügen", sf_help: "Wenn es sich nicht öffnet, kopiere den Link, öffne Safari und füge ihn in die Adressleiste ein.",
      ios_btn: "Hier tippen, um das Teilen-Menü zu öffnen", ios_next: "Scrolle im geöffneten Menü nach unten und tippe auf <b>Zum Home-Bildschirm</b>, dann auf <b>Hinzufügen</b>.", ios_arrow: "Teilen",
      d_title: "Wo ist die Schaltfläche Teilen?", d_a: "Leiste unten", d_a_t: "Quadrat mit Pfeil ⬆ in der Mitte der unteren Leiste.", d_b: "Leiste oben", d_b_t: "Quadrat mit Pfeil ⬆ rechts neben der Adressleiste.", d_c: "Im Menü", d_c_t: "Tippe auf <b>···</b> oder <b>≡</b> und wähle <b>Teilen</b>.",
      qr_title: "Auch auf einem anderen Handy installieren", qr_text: "Scanne diesen Code mit der Kamera eines anderen Handys: Er öffnet diese Seite, um die App zu installieren.",
      com_btn: "Vermittler", com_title: "Zugang für Vermittler", com_tab_in: "Ich bin schon Vermittler", com_tab_new: "Ich möchte Vermittler werden", com_tel: "Registrierte Telefonnummer (mit Vorwahl)", com_code: "Zugangscode (5 Ziffern)", com_in_go: "Anmelden", com_new_help: "Gib deine E-Mail ein und beantrage die Aufnahme. Der Administrator antwortet dir.", com_mail: "Deine E-Mail", com_new_go: "Aufnahme beantragen", com_res: "Für Vermittler", com_v_neg: "Geschäftsvideo", com_v_com: "Vermittler-Video", com_lang_note: "Auf Spanisch", com_guide: "Leitfaden für Vermittler", com_guide_n: "Español · English · Deutsch", com_e_tel: "Gib deine Nummer mit Vorwahl ein, nur Ziffern (10 bis 15).", com_e_code: "Der Code hat 5 Ziffern.", com_e_mail: "Gib eine gültige E-Mail ein.", com_pending: "Wir schließen die Aktivierung dieses Zugangs gerade ab. Öffne die App in der Zwischenzeit mit deiner E-Mail und deinem Vermittlercode.", com_subj: "Antrag als Vermittler", com_body: "Ich möchte Vida Global-Vermittler werden. Meine E-Mail:", com_sent: "Deine E-Mail-App hat sich mit dem versandfertigen Antrag geöffnet.", com_send_link: "Falls sie sich nicht geöffnet hat, tippe hier.", g_print: "Speichern oder drucken (PDF)",
      v_title: "App-Videos", see_manuals: "Anleitungen ansehen", see_videos: "Videos ansehen"
    }
  };
  var NAMES = { es: "Español", en: "English", de: "Deutsch" };
  var ES = "AR BO CL CO CR CU DO EC ES GT GQ HN MX NI PA PE PR PY SV UY VE".split(" ");
  var DE = "DE AT CH LI".split(" ");
  function byCountry(cc) { cc = (cc || "").toUpperCase(); return DE.indexOf(cc) > -1 ? "de" : ES.indexOf(cc) > -1 ? "es" : "en"; }
  function byBrowser() { var l = (navigator.language || "es").toLowerCase(); return l.indexOf("de") === 0 ? "de" : l.indexOf("es") === 0 ? "es" : l.indexOf("en") === 0 ? "en" : "es"; }
  var cur = "es";
  function apply(l) {
    cur = T[l] ? l : "es"; var d = T[cur];
    document.documentElement.lang = cur;
    document.querySelectorAll("[data-t]").forEach(function (e) { var v = d[e.getAttribute("data-t")]; if (v != null) e.innerHTML = v; });
    document.querySelectorAll("[data-video]").forEach(function (a) { a.href = VIDEOS[cur]; });
    document.querySelectorAll(".lang button").forEach(function (b) { b.classList.toggle("on", b.dataset.l === cur); });
    var box = document.getElementById("lista-manuales");
    if (box) {
      var order = [cur].concat(["es", "en", "de"].filter(function (x) { return x !== cur; }));
      box.innerHTML = order.map(function (l2, i) {
        var h = i === 1 ? '<h2>' + d.m_other + '</h2>' : "";
        var items = MANUALS[l2].map(function (m) { return '<a class="manual" href="' + m[1] + '"><div class="pdf">PDF</div><div><b>' + m[0] + '</b><span>' + NAMES[l2] + '</span></div></a>'; }).join("");
        var soon = l2 === "es" && d.m_soon ? '<p class="nota">' + d.m_soon + '</p>' : "";
        return h + items + soon;
      }).join("");
    }
  }
  window.VG_T = function (k) { return (T[cur] || T.es)[k]; };
  window.VG_SETLANG = function (l) { try { localStorage.setItem("vg_lang", l); } catch (e) {} apply(l); };
  var q = new URLSearchParams(location.search).get("lang"), saved = null;
  try { saved = localStorage.getItem("vg_lang"); } catch (e) {}
  var first = (q && T[q]) ? q : (saved && T[saved]) ? saved : null;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { VG_SETLANG(b.dataset.l); }); });
    if (first) { apply(first); return; }
    apply(byBrowser());
    // Sin elección previa: idioma según el país de la IP (si responde rápido)
    var done = false, ctl = window.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { if (ctl) ctl.abort(); }, 3500);
    fetch("https://ipwho.is/?fields=success,country_code", ctl ? { signal: ctl.signal } : {}).then(function (r) { return r.json(); }).then(function (j) {
      clearTimeout(t);
      if (j && j.success && !done) { done = true; var l = byCountry(j.country_code); try { sessionStorage.setItem("vg_ip", l); } catch (e) {} var sv = null; try { sv = localStorage.getItem("vg_lang"); } catch (e) {} if (!sv) apply(l); }
    }).catch(function () {});
  });
})();
