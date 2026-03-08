document.addEventListener("DOMContentLoaded", () => {

  // Page enter animation
  document.body.classList.add("page-enter");

  setTimeout(() => {
    document.body.classList.add("page-enter-active");
  }, 20);

  // Handle link clicks
  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

      const href = this.getAttribute("href");

      // Ignore external links, anchors, downloads, or same-page links
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

      // Start exit animation
      document.body.classList.remove("page-enter", "page-enter-active");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        document.body.classList.add("page-exit-active");
      }, 20);

      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 500);

    });

  });

});
