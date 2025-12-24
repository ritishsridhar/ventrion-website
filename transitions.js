document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top immediately to prevent "pop" effect
  window.scrollTo(0, 0);

  // Fade-in new page
  document.body.classList.add("fade-in");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore external links & anchors
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
        return;
      }

      e.preventDefault();

      // Fade-out current page
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // must match CSS transition
    });
  });
});

// Ensure scroll is at top on pageshow (back/forward navigation)
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
  window.scrollTo(0, 0);
});
