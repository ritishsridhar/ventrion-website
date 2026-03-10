
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. MOBILE MENU TOGGLE
       ========================================== */
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    /* ==========================================
       2. SCROLL REVEAL (Cards & Elements)
       ========================================== */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .project-card').forEach(el => revealObserver.observe(el));

    /* ==========================================
       3. HEADER SCROLL EFFECT
       ========================================== */
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
            header.style.padding = "10px 5%";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "none";
            header.style.padding = "20px 5%";
        }
    });

    /* ==========================================
       4. SMOOTH SCROLL (With Header Offset)
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                navLinks?.classList.remove('active');
                menuBtn?.classList.remove('active');

                const offset = header ? header.offsetHeight : 0;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    /* ==========================================
       5. CLOSE MENU ON OUTSIDE CLICK
       ========================================== */
    document.addEventListener('click', (e) => {
        if (!menuBtn?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            menuBtn?.classList.remove('active');
        }
    });

    /* ==========================================
       6. DYNAMIC TAB TITLE (Icon Support)
       ========================================== */
    let docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back! | Ventrion";
    });
    window.addEventListener("focus", () => {
        document.title = docTitle;
    });

});
