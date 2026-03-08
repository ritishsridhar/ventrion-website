document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     PAGE LOAD SLIDE ANIMATION
  =============================== */

  document.body.classList.add("page-enter");

  setTimeout(() => {
    document.body.classList.add("page-enter-active");
  }, 20);



  /* ===============================
     PAGE TRANSITION (LINK CLICK)
  =============================== */

  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

      const href = this.getAttribute("href");

      // Ignore special links
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        this.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();

      document.body.classList.remove("page-enter", "page-enter-active");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        document.body.classList.add("page-exit-active");
      }, 20);

      setTimeout(() => {
        window.location.href = href;
      }, 500); // must match CSS transition time
    });

  });



  /* ===============================
     SCROLL EFFECTS
  =============================== */

  function handleScrollEffects() {

    /* HEADER SHRINK */

    const header = document.querySelector(".site-header");

    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    }



    /* REVEAL ANIMATION */

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", handleScrollEffects);

  // Run once on load
  handleScrollEffects();

});
