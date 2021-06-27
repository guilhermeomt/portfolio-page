const htmlNode = document.documentElement;

function toggleOpenMenu() {
  const menuElement = document.querySelector('#menu');
  const menuIconLines = document.querySelectorAll('.navbar__path');

  menuElement.classList.toggle('open');
  htmlNode.classList.toggle('no-scroll')
  menuIconLines.forEach(line => line.classList.toggle('open'));
}


function toggleDarkMode() {
  htmlNode.classList.toggle('dark-theme');
  document.querySelector('#light-sun').classList.toggle('hide');
  document.querySelector('#dark-moon').classList.toggle('hide');
  }