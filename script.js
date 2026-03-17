document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('mobile-menu');
    const navLink = document.getElementById('nav-links');
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            body.style.paddingTop = header.offsetHeight + 'px'
        } else {
            header.classList.remove('scrolled');
            body.style.paddingTop = '0';
        }

    });
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('is-active');
        navLink.classList.toggle('mobile-active');

        body.style.overflow = isOpen ? 'hidden' : '';

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLink.classList.remove('mobile-active');

                body.style.overflow = '';
            });
        });
    });
});

const backToTop = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})