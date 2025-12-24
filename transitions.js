document.addEventListener("DOMContentLoaded", () => {
  // Slide in new page
  document.body.classList.add("page-enter");
  setTimeout(() => {
    document.body.classList.add("page-enter-active");
  }, 20); // small delay to trigger transition

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");

      // Ignore external links, anchors, mailto
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return;

      e.preventDefault();

      // Start slide-up exit animation
      document.body.classList.remove("page-enter", "page-enter-active");
      document.body.classList.add("page-exit");
      setTimeout(() => {
        document.body.classList.add("page-exit-active");
      }, 20);

      // Navigate after transition
      setTimeout(() => {
        window.location.href = href;
      }, 500); // MUST match CSS transition
    });
  });
});
