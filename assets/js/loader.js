const loader = document.querySelector('.loader')
const loaderTitle = document.querySelector('.loader-title')
const $body = document.querySelector('body')

let loaderText = 0;

const increment = () => {
  loaderText += 1;
  loaderTitle.innerText = loaderText + "%";
  if (loaderText == 100) {
      clearInterval(interval);
      loaderTitle.classList.add('ready')
      loaderTitle.innerText = "Ready !"
      const loaderSwipe = setTimeout(function(){
        loader.classList.add('ready')}
      , 800)
      const loaderExit = setTimeout(function() {
        loader.style.display = 'none'}
      ,1800)
      document.body.style.overflow = 'auto';
  }
}
const interval = setInterval(increment, 30)
