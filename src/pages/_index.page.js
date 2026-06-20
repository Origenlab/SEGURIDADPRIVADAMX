(function () {
      // Botón "volver arriba"
      var toTop = document.getElementById('toTop');
      function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        if (toTop) toTop.classList.toggle('show', y > 600);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

      // Año del footer
      var yr = document.getElementById('year');
      if (yr) yr.textContent = new Date().getFullYear();
    })();
;
// Envío del formulario de cotización por WhatsApp (sitio estático en GitHub Pages)
    (function () {
      var form = document.getElementById('quote-form');
      if (!form) return;
      var WA_NUMBER = '525512345678'; // Número de WhatsApp del negocio (actualizar al real)
      function optLabel(name, value) {
        if (!value) return '—';
        var o = form.querySelector('[name="' + name + '"] option[value="' + value + '"]');
        return o ? o.textContent.trim() : value;
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var fd = new FormData(form);
        var v = function (n) { return (fd.get(n) || '').toString().trim(); };
        var lines = [
          '*Nueva solicitud de cotización — SeguridadPrivadaMX*',
          '',
          '*Nombre:* ' + v('nombre'),
          '*Correo:* ' + v('email'),
          '*Teléfono:* ' + v('telefono'),
          '*Tipo de propiedad:* ' + optLabel('tipo-propiedad', v('tipo-propiedad')),
          '*Unidades:* ' + optLabel('unidades', v('unidades')),
          '*Ubicación:* ' + optLabel('alcaldia', v('alcaldia'))
        ];
        var servicios = fd.getAll('servicios[]').map(function (val) {
          var c = form.querySelector('input[name="servicios[]"][value="' + val + '"]');
          return c ? c.parentNode.textContent.trim() : val;
        });
        if (servicios.length) lines.push('*Servicios de interés:* ' + servicios.join(', '));
        var msg = v('mensaje');
        if (msg) lines.push('*Mensaje:* ' + msg);
        var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank', 'noopener');
        form.reset();
      });
    })();