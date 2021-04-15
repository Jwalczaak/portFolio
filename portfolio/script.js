const btn = document.querySelector('.hamburger');
const nav =document.querySelector('.fullsize');     

function menu(){
    nav.classList.toggle('active');
}

btn.addEventListener('click',menu);