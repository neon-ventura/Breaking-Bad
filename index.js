const botaoMenu = document.querySelector('.botaoMenu')
const mobileMenu = document.querySelector('.mobile-menu') 

botaoMenu.addEventListener('click', function(){
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
    }else{
        mobileMenu.classList.add('open')
    }
})