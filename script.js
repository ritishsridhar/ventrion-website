document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. MOBILE MENU TOGGLE
       ========================================== */
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.onclick = () => {
            navLinks.classList.toggle('active');
        };
    }

    /* ==========================================
       2. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================== */
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Watch both .reveal classes and .project-card elements
    const revealElements = document.querySelectorAll('.reveal, .project-card');
    revealElements.forEach(el => revealObserver.observe(el));


    /* ==========================================
       3. HEADER SCROLL EFFECT (LIGHT MODE)
       ========================================== */
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 5%";
            header.style.background = "rgba(255, 255, 255, 0.98)"; // Light background
            header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
        } else {
            header.style.padding = "20px 5%";
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "none";
        }
    });


    /* ==========================================
       4. SMOOTH ANCHOR LINK SCROLLING
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === "#") return; // Avoid errors on empty hash links
            
            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open when a link is clicked
                navLinks.classList.remove('active');

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
