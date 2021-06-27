const htmlNode = document.documentElement;

function toggleDarkMode() {
  htmlNode.classList.toggle('dark-theme');
  document.querySelector('#light-sun').classList.toggle('hide');
  document.querySelector('#dark-moon').classList.toggle('hide');
  }