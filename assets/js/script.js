const divHamburger = document.getElementById('divHamburger');
const pLogo = document.getElementById('pLogo');
const ulContainer = document.getElementById('ulContainer');
const divCircle = document.getElementById('divCircle');

divHamburger.addEventListener('click',function(){
    ulContainer.classList.toggle ('ul--container--visible');
    pLogo.classList.toggle('.p--log--none');
    divHamburger.classList.toggle('div--menu-btn--x');
    divCircle.classList.toggle('circle--down');
});