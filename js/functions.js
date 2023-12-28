//Slidshow function

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
// Automatic slideshow
let slideInterval;
window.addEventListener('load', function() {
  startSlideshow();
});
function startSlideshow() {
  slideInterval = setInterval(function() {
    plusSlides(1); // Move to the next slide
  }, 2000); // Set the interval to 1 second (1000 milliseconds)
}

// Stop the slideshow if the user interacts with the slideshow manually
function stopSlideshow() {
  clearInterval(slideInterval);
}


