// let imegs = document.querySelectorAll('img');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');

// let i = 0;

// next.addEventListener('click', function () {
//     imegs[i].style.display = 'none'
//     i++;

//     if(imegs.length <= i){
//         i = 0;
//     }

//     imegs[i].style.display = 'block'
// });

// prev.addEventListener('click', function () {
//     imegs[i].style.display = 'none'
//     i--;

//     if(i < 0){
//         i = imegs.length - 1;
//     }

//     imegs[i].style.display = 'block'
// });

// setInterval(function () {
//     imegs[i].style.display = 'none'
//     i++;

//     if(imegs.length <= i){
//         i = 0;
//     }

//     imegs[i].style.display = 'block'
// }, 5000);

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