document.getElementById("myDropdown").classList.toggle("show");

// Attach the stopSlideshow function to the onclick event of the prev and next buttons
document.querySelector('.prev').addEventListener('click', stopSlideshow);
document.querySelector('.next').addEventListener('click', stopSlideshow);
window.addEventListener('load', function() {
    startSlideshow();
  });