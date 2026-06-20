(function () {
      var toTop = document.getElementById('toTop');
      function onScroll() { var y = window.scrollY || window.pageYOffset; if (toTop) toTop.classList.toggle('show', y > 600); }
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
      var yr = document.getElementById('year'); if (yr) yr.textContent = new Date().getFullYear();
    })();