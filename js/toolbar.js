document.addEventListener('DOMContentLoaded', () => {
  // 1) Orden de rutas según el orden de los .nav-link en el DOM
  const routes = ['Home.html', 'Search.html', 'Account.html']; // ajusta nombres

  const links = [...document.querySelectorAll('.navbar.custom-bottom .nav-link')];

  // 2) Activar según la página actual
  const current = (location.pathname.split('/').pop() || 'Home.html').toLowerCase();
  links.forEach((el, i) => {
    if (routes[i].toLowerCase() === current) el.classList.add('active');

    // 3) Navegación y cambio de activo al clicar
    el.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      el.classList.add('active');
      location.href = routes[i];
    });
  });
});
