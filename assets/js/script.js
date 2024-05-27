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
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease";
        element.style.animation = "fadeIn 1s forwards";
      } else {
        element.style.opacity = "";
        element.style.animation = "";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);
}

function fadeInFromLeft(element) {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease";
        element.style.animation = "fadeInFromLeft 1s forwards";
      } else {
        element.style.opacity = "";
        element.style.animation = "";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);
}

function fadeInFromRight(element) {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease";
        element.style.animation = "fadeInFromRight 1s forwards";
      } else {
        element.style.opacity = "";
        element.style.animation = "";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);
}

document.addEventListener("DOMContentLoaded", function () {
  const purple = document.getElementById("purple");
  fadeInFromLeft(purple);
  console.log(purple);

  const inputfield = document.getElementById("contact");
  fadeInElement(inputfield);

  const webDeveloper = document.getElementById("web-developer");
  fadeInFromRight(webDeveloper);

  const fenan = document.getElementById("fenan");

  fadeInElement(fenan);
});
