document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore external links, anchors, mail links
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:")
      ) {
        return;
      }

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // MUST match CSS time
    });
  });

});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
