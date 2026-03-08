// HEADER SHRINK + SCROLL REVEAL

function handleScroll() {

  const header = document.querySelector(".site-header");

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }

  });

}

// run on scroll
window.addEventListener("scroll", handleScroll);

// run once when page loads
window.addEventListener("load", handleScroll);
