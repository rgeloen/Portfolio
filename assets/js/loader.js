const $body = document.querySelector('body')
const loaderDiv = document.querySelector('.loader')
const loaderTitle = document.querySelector('.loader-title')
const home = document.querySelector('.home')
const homeTitle = home.querySelector('.title')

let loaderText = 0;

const increment = () => {
  loaderText += 1;
  loaderTitle.innerText = loaderText + "%";
  if (loaderText == 100) {
      clearInterval(interval);
      loaderTitle.classList.add('ready')
      loaderTitle.innerText = "Ready !"
      const loaderSwipe = setTimeout(function(){
        loaderDiv.classList.add('ready')}
      , 800)
      const loaderExit = setTimeout(function() {
        loaderDiv.style.display = 'none'}
      ,1800)
      const hometitleAppear = setTimeout(function() {
        homeTitle.classList.add('ready')}
      ,1800)
      document.body.style.overflow = 'auto';

  }
}
const interval = setInterval(increment, 30)
