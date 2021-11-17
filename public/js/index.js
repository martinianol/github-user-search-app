const body = document.querySelector('body');
const mode = document.querySelector('.mode');
const form = document.querySelector('form');
const main = document.querySelector('main');
const user = document.querySelector('#user')
const summary = document.querySelector('.profile-summary');
const icons = document.querySelectorAll('i img');
console.log(icons);
const placeHolder = document.querySelector('input[type=search]');

console.log(placeHolder)

mode.onclick = () => {
  body.classList.toggle('dark-mode-body');
  form.classList.toggle('dark-mode-component');
  main.classList.toggle('dark-mode-component');
  summary.classList.toggle('dark-mode-body');
  placeHolder.style.setProperty("--c", "#fff")
  icons.forEach(icon => icon.classList.toggle('dark-mode-icons'));
}

