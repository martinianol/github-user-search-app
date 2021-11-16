const body = document.querySelector('body');
const mode = document.querySelector('.mode');

console.log(body)
mode.onclick = () => {
  body.classList.toggle('dark-mode-body')

}

