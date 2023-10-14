let menu = document.querySelector('#menu-but'), nav = document.querySelector('nav'), search = 
    document.querySelector('#search-but'), searchBar = document.querySelector('.search-container'), loginForm = 
    document.querySelector('.login-form'), video = document.querySelectorAll('.vid-but');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
    search.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
    search.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

search.onclick = () => {
    search.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

document.querySelector('#login-but').onclick = () => {
    loginForm.classList.add('active');
}
document.querySelector('#close-form').onclick = () => {
    loginForm.classList.remove('active');
}

video.forEach(sp => {
    sp.addEventListener('click', () => {
        document.querySelector('.control .active').classList.remove('active');
        sp.classList.add('active');
        document.querySelector('#vid-slider').src = sp.getAttribute('data-src');
    });
})

var swiper = new Swiper('.review-slider', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

var swiper = new Swiper('.brand-slider', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        450: {slidesPerView: 1},
        768: {slidesPerView: 2},
        991: {slidesPerView: 3},
        1200: {slidesPerView: 4}
    }
});