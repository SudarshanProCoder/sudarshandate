let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let icon = document.querySelector('#icon');



icon.onclick = function() {
    document.body.classList.toggle("dark-theme");


    if (document.body.classList.contains("dark-theme")) {
        icon.src = './images/sun.png';
    } else {
        icon.src = './images/moon.png';
    }
}
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings: ['back end developer', 'competitive programmer', 'hacker', 'web developer', 'app developer'],
    loop: true,
    typeSpeed: 150
});

VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 25
});