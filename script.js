document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. MOBILE MENU TOGGLE + ANIMATION
       ========================================== */
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.onclick = () => {
            // open / close nav
            navLinks.classList.toggle('active');
            // animate hamburger into X (requires CSS transition)
            menuBtn.classList.toggle('active');
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

    const revealElements = document.querySelectorAll('.reveal, .project-card');
    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================
       3. HEADER SCROLL EFFECT (Updated to Light Theme)
       ========================================== */
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = "10px 5%";
                // Changed from beige to white to match your Light Mode
                header.style.background = "rgba(255, 255, 255, 0.98)";
                header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
            } else {
                header.style.padding = "20px 5%";
                header.style.background = "rgba(255, 255, 255, 0.95)";
                header.style.boxShadow = "none";
            }
        }
    });

    /* ==========================================
       4. SMOOTH ANCHOR LINK SCROLLING
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                // Remove active classes before scrolling
                if (navLinks) navLinks.classList.remove('active');
                if (menuBtn) menuBtn.classList.remove('active');

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ==========================================
       5. CLOSE MENU WHEN CLICKING OUTSIDE
       ========================================== */
    document.addEventListener('click', (e) => {
        if (!menuBtn || !navLinks) return;

        const clickInsideMenu = navLinks.contains(e.target);
        const clickHamburger = menuBtn.contains(e.target);

        if (!clickInsideMenu && !clickHamburger) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

});
