document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in on page load
  document.body.classList.add("fade-in");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore external links and anchors
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:")
      ) return;

      e.preventDefault();

      // Add fade-out
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // must match CSS transition time
    });
  });
});
