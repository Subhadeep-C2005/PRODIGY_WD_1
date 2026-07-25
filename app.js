// Change navbar style on scroll
    const navbar = document.getElementById('navbar');
    function handleScroll(){
    if (window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

  // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
    });