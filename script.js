document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================== */
    // This triggers the .active class on .reveal elements
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it animates in, we stop watching it for better performance
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Select all project cards and sections with the .reveal class
    const revealElements = document.querySelectorAll('.reveal, .project-card');
    revealElements.forEach(el => revealObserver.observe(el));


    /* ==========================================
       2. HEADER SCROLL EFFECT
       ========================================== */
    // Shrinks the header slightly and adds a border when scrolling
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 6%";
            header.style.background = "rgba(11, 13, 14, 0.98)";
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.padding = "20px 6%";
            header.style.background = "rgba(11, 13, 14, 0.95)";
            header.style.boxShadow = "none";
        }
    });


    /* ==========================================
       3. SMOOTH ANCHOR LINK SCROLLING
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
