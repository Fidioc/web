var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image1");
  for (i = 0; i < slides.length; i++) {
    slides.style.backgroundImage = "none";
  }
  slideIndex++;
  if (slideIndex > 3) {slideIndex = 1}
  slides.style.backgroundImage = "url(image/slide"+slideIndex+".jpg)";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}