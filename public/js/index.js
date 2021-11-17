const body = document.querySelector('body');
const mode = document.querySelector('.mode');
const modeImg = document.querySelector('#modeImg');
const modeText = document.querySelector('.modeText')
const form = document.querySelector('form');
const main = document.querySelector('main');
const user = document.querySelector('#user')
const summary = document.querySelector('.profile-summary');
const icons = document.querySelectorAll('i img');

const placeHolder = document.querySelector('input[type=search]');
console.log(placeHolder.getAttribute('style'));
placeHolder.style.setProperty("--c", "#4b6a9b")

mode.onclick = () => {
  modeImg.src.includes('moon') ? modeImg.src = '/public/images/icon-sun.svg' : modeImg.src = '/public/images/icon-moon.svg'
  modeText.innerHTML === 'DARK' ? modeText.innerHTML = 'LIGHT' : modeText.innerHTML = 'DARK';
  modeText.classList.toggle('dark-mode-body');
  mode.classList.toggle('dark-mode-body');
  body.classList.toggle('dark-mode-body');
  form.classList.toggle('dark-mode-component');
  main.classList.toggle('dark-mode-component');
  summary.classList.toggle('dark-mode-body');

  if (placeHolder.getAttribute('style').includes('#fff')) {
    placeHolder.style.setProperty("--c", "#4b6a9b");
  } else {
    placeHolder.style.setProperty("--c", "#fff")
  };

  icons.forEach(icon => icon.classList.toggle('dark-mode-icons'));
}

