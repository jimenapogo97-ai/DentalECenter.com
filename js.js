document.addEventListener('DOMContentLoaded', function () {
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Obtener el modal de confirmación de Bootstrap
            const feedbackModalEl = document.getElementById('feedbackModal');
            if (feedbackModalEl) {
                const feedbackModal = new bootstrap.Modal(feedbackModalEl);
                feedbackModal.show();
            }

            // Limpiar el formulario tras el envío
            contactForm.reset();
        });
    }

    const headerNavbar = document.querySelector('.header-navbar');
    if (headerNavbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                headerNavbar.classList.add('shadow-sm');
            } else {
                headerNavbar.classList.remove('shadow-sm');
            }
        });
    }

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navLinks && navbarCollapse) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }
});