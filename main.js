
// scroll bar//
let sections = document.querySelectorAll('section');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    });
};

// sticky bar//
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});



// scroll reverse//
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, contact form', { origin:'right' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.portfolio-container, .portfolio-box', { origin:'bottom' });
ScrollReveal().reveal('.input-box', { origin:'bottom' });
ScrollReveal().reveal('textarea', { origin:'right' });
ScrollReveal().reveal('.heading', { origin:'left' });

//**/ type reveal//
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Designer','Graphic Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
