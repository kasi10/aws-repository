document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal configuration
    const sr = ScrollReveal({
        distance: '50px',
        duration: 2000,
        easing: 'ease-in-out',
        delay: 200,
        reset: true
    });

    // Applying ScrollReveal to elements
    sr.reveal('.home-content', { origin: 'top' });
    sr.reveal('.home-img', { origin: 'bottom' });
    sr.reveal('.about-img', { origin: 'left' });
    sr.reveal('.about-content', { origin: 'right' });
    sr.reveal('.service', { origin: 'bottom', interval: 200 });
    sr.reveal('.project', { origin: 'bottom', interval: 200 });
    sr.reveal('.contact-form', { origin: 'top' });

    // Typed.js configuration
    new Typed('#typed-output', {
        strings: ['Frontend Developer', 'Web Designer', 'AWS Practitioner', 'Tech Enthusiast'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

    // Scroll section active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Menu Icon Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
