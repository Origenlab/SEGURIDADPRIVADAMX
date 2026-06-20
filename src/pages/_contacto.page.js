(function () {
      var toTop = document.getElementById('toTop');
      function onScroll() { var y = window.scrollY || window.pageYOffset; if (toTop) toTop.classList.toggle('show', y > 600); }
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
      var yr = document.getElementById('year'); if (yr) yr.textContent = new Date().getFullYear();
    })();
;
// Formulario de contacto por WhatsApp (sitio estático)
    (function () {
      var form = document.getElementById('contact-form');
      if (!form) return;
      var WA = '525512345678';
      function optLabel(name, value) {
        if (!value) return '—';
        var o = form.querySelector('[name="' + name + '"] option[value="' + value + '"]');
        return o ? o.textContent.trim() : value;
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var fd = new FormData(form), v = function (n) { return (fd.get(n) || '').toString().trim(); };
        var lines = [
          '*Nueva solicitud — SeguridadPrivadaMX*', '',
          '*Nombre:* ' + v('nombre'),
          '*Teléfono:* ' + v('telefono'),
          '*Tipo de propiedad:* ' + optLabel('tipo-propiedad', v('tipo-propiedad')),
          '*Ubicación:* ' + optLabel('alcaldia', v('alcaldia'))
        ];
        var msg = v('mensaje'); if (msg) lines.push('*Mensaje:* ' + msg);
        window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
        form.reset();
      });
    })();