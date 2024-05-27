document.addEventListener("DOMContentLoaded", function () {
  const formElements = document.querySelectorAll(
    "#contact-form input, #contact-form textarea, .submit-btn"
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  formElements.forEach((element) => {
    observer.observe(element);
  });
});

function fadeInElement(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 1s ease";
  element.style.animation = "fadeIn 1s forwards";
}

function fadeInFromLeft(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 1s ease";
  element.style.animation = "fadeInFromLeft 1s forwards";
}

function fadeInFromRight(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 1s ease";
  element.style.animation = "fadeInFromRight 1s forwards";
}

document.addEventListener("DOMContentLoaded", function () {
  const myElement = document.getElementById("myElement");
  fadeInElement(myElement);
});
