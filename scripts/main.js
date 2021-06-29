const htmlNode = document.documentElement;
const navbarLinks = document.querySelectorAll('.navbar__link');

function scrollSmooth() {
  navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener('click', (e) => {
      toggleOpenMenu();
      htmlNode.classList.remove('no-scroll');
    })
  })
}

function toggleOpenMenu() {
  const menuElement = document.querySelector('#menu');
  const menuIconLines = document.querySelectorAll('.navbar__path');

  menuElement.classList.toggle('open');
  htmlNode.classList.toggle('no-scroll');
  menuIconLines.forEach((line) => line.classList.toggle('open'));
}

function toggleDarkMode() {
  htmlNode.classList.toggle('dark-theme');
  document.querySelector('#light-sun').classList.toggle('hide');
  document.querySelector('#dark-moon').classList.toggle('hide');

  if (htmlNode.classList.contains('dark-theme')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

if (localStorage.getItem('darkMode') == 'enabled') {
  htmlNode.classList.toggle('dark-theme');
  document.querySelector('#light-sun').classList.toggle('hide');
  document.querySelector('#dark-moon').classList.toggle('hide');
}

scrollSmooth();