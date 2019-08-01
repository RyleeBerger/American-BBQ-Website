// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

var cardContainer =$('.card-Container');
var submit =$('.submit-Button');

submit.on("click", addOrder);

function addOrder(){
  var name = $('.name').val();
  var food = $('.food').val();

  cardContainer.append(`<p class = "addOrder"> ${name} your order of ${food} has been sent to us. We will get your food to you as soon as possible! Have a wonderful day!</p>`);

  $(`.name`).val("");
  $(`.food`).val("");

}

var cardContainer2 =$('.card-Container2');
var submit =$('.submit-Button');

submit.on("click", addReservation);

function addReservation(){
  var name2 = $('.name2').val();
  var numberOfPeople = $('.number-of-people').val();

  cardContainer2.append(`<p class = "addReservation"> ${name2} your reservation for ${numberOfPeople} people has been sent to us. Have a great day!`);

  $(`.name2`).val("");
  $(`.number-of-people`).val("");

}

var cardContainer3 =$('.card-Container3');
var submit =$('.submit-Button3');

submit.on("click", addComment);

function addComment(){
  var name3 = $('.name3').val();
  var message = $('.message').val();

  cardContainer3.append(`<p class = "addComment"> ${name3} your message has been sent to us. Have a great day!`);

  $(`.name3`).val("");
  $(`.message`).val("");

}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
