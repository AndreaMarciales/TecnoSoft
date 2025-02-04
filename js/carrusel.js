let slideIndex = 0;
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".servicio");
const totalSlides = slides.length;
const cloneCount = 3; // Número de elementos a clonar para la continuidad

// Clonar los primeros elementos
for (let i = 0; i < cloneCount; i++) {
  const clone = slides[i].cloneNode(true);
  carousel.appendChild(clone);
}

function showSlides() {
  const offset = (slideIndex % totalSlides) * -100 / 3;
  carousel.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  slideIndex += step;
  
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
    carousel.style.transition = "none";
    showSlides();
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      slideIndex += step;
      showSlides();
    }, 50);
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
    carousel.style.transition = "none";
    showSlides();
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      slideIndex += step;
      showSlides();
    }, 50);
  } else {
    showSlides();
  }
}

document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));

window.addEventListener("DOMContentLoaded", showSlides);
