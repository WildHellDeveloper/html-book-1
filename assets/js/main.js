/* Thư viện THCS Thuận An – script dùng chung cho mọi trang */
(function () {
  var root = document.documentElement;

  /* ---- hiệu ứng hiện dần khi cuộn ---- */
  var els = document.querySelectorAll('.reveal:not(.in)');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- thanh tiến trình + header khi cuộn ---- */
  var bar = document.querySelector('.progress');
  var header = document.querySelector('.site-header');
  function onScroll() {
    var h = root.scrollHeight - innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
    if (header) header.classList.toggle('scrolled', scrollY > 10);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- menu toàn trang ---- */
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('site-menu');
  if (!btn || !menu) return;
  var label = btn.querySelector('.lbl');

  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (label) label.textContent = open ? 'Đóng' : 'Menu';
    if (open) {
      var first = menu.querySelector('a');
      if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 350);
    } else {
      btn.focus({ preventScroll: true });
    }
  }

  btn.addEventListener('click', function () {
    setMenu(!root.classList.contains('menu-open'));
  });
  addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) setMenu(false);
  });
  menu.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (a && a.getAttribute('href').charAt(0) === '#') setMenu(false);
  });
})();
