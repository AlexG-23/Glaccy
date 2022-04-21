
var firstSlide = document.querySelector(".slider-item:nth-child(1)");
var secondSlide = document.querySelector(".slider-item:nth-child(2)");
var thirdSlide = document.querySelector(".slider-item:nth-child(3)");

var bulletFirst = document.querySelector(".slider-pagination-item:nth-child(1) .slider-pagination-btn");
var bulletSecond = document.querySelector(".slider-pagination-item:nth-child(2) .slider-pagination-btn");
var bulletThird = document.querySelector(".slider-pagination-item:nth-child(3) .slider-pagination-btn");


var firstLittleSlide = document.querySelector(".second-slide");
var secondLittleSlide = document.querySelector(".third-slide");

var bodyBackground = document.querySelector(".body-first-slide");

function nextSlide() {
  if (firstSlide.classList.contains("slide-active")) {
    firstSlide.classList.remove("slide-active");
    secondSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("second-slide");
    firstLittleSlide.classList.add("third-slide");

    secondLittleSlide.classList.remove("third-slide");
    secondLittleSlide.classList.add("first-slide");

    bulletFirst.classList.remove("slider-pagination-active");
    bulletSecond.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-first-slide");
    bodyBackground.classList.add("body-second-slide");
    
  } 
  else if (secondSlide.classList.contains("slide-active")) {
    secondSlide.classList.remove("slide-active");
    thirdSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("third-slide");
    firstLittleSlide.classList.add("first-slide");

    secondLittleSlide.classList.remove("first-slide");
    secondLittleSlide.classList.add("second-slide");

    bulletSecond.classList.remove("slider-pagination-active");
    bulletThird.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-second-slide");
    bodyBackground.classList.add("body-third-slide");
  } 
  else {
    thirdSlide.classList.remove("slide-active");
    firstSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("first-slide");
    firstLittleSlide.classList.add("second-slide");

    secondLittleSlide.classList.remove("second-slide");
    secondLittleSlide.classList.add("third-slide");

    bulletThird.classList.remove("slider-pagination-active");
    bulletFirst.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-third-slide");
    bodyBackground.classList.add("body-first-slide");
  }
}

function prevSlide() {
  if (firstSlide.classList.contains("slide-active")) {
    firstSlide.classList.remove("slide-active");
    thirdSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("second-slide");
    firstLittleSlide.classList.add("first-slide");

    secondLittleSlide.classList.remove("third-slide");
    secondLittleSlide.classList.add("second-slide");

    bulletFirst.classList.remove("slider-pagination-active");
    bulletThird.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-first-slide");
    bodyBackground.classList.add("body-third-slide");
  } 
  else if (secondSlide.classList.contains("slide-active")) {
    secondSlide.classList.remove("slide-active");
    firstSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("third-slide");
    firstLittleSlide.classList.add("second-slide");

    secondLittleSlide.classList.remove("first-slide");
    secondLittleSlide.classList.add("third-slide");

    bulletSecond.classList.remove("slider-pagination-active");
    bulletFirst.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-second-slide");
    bodyBackground.classList.add("body-first-slide");
  } 
  else {
    thirdSlide.classList.remove("slide-active");
    secondSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("first-slide");
    firstLittleSlide.classList.add("third-slide");

    secondLittleSlide.classList.remove("second-slide");
    secondLittleSlide.classList.add("first-slide");

    bulletThird.classList.remove("slider-pagination-active");
    bulletSecond.classList.add("slider-pagination-active");

    bodyBackground.classList.remove("body-third-slide");
    bodyBackground.classList.add("body-second-slide");
  }
}

function paginationFirst() {

  bulletFirst.classList.add("slider-pagination-active");
  bulletSecond.classList.remove("slider-pagination-active");
  bulletThird.classList.remove("slider-pagination-active");

  bodyBackground.classList.remove("body-second-slide");
  bodyBackground.classList.remove("body-third-slide");
  bodyBackground.classList.add("body-first-slide");

  firstSlide.classList.add("slide-active");
  secondSlide.classList.remove("slide-active");
  thirdSlide.classList.remove("slide-active");

  firstLittleSlide.classList.add("second-slide");
  firstLittleSlide.classList.remove("first-slide");
  firstLittleSlide.classList.remove("third-slide");

  secondLittleSlide.classList.add("third-slide");
  secondLittleSlide.classList.remove("first-slide");
  secondLittleSlide.classList.remove("second-slide");
}

function paginationSecond() {

  bulletFirst.classList.remove("slider-pagination-active");
  bulletSecond.classList.add("slider-pagination-active");
  bulletThird.classList.remove("slider-pagination-active");

  bodyBackground.classList.add("body-second-slide");
  bodyBackground.classList.remove("body-third-slide");
  bodyBackground.classList.remove("body-first-slide");

  firstSlide.classList.remove("slide-active");
  secondSlide.classList.add("slide-active");
  thirdSlide.classList.remove("slide-active");

  firstLittleSlide.classList.add("third-slide");
  firstLittleSlide.classList.remove("first-slide");
  firstLittleSlide.classList.remove("second-slide");

  secondLittleSlide.classList.remove("third-slide");
  secondLittleSlide.classList.add("first-slide");
  secondLittleSlide.classList.remove("second-slide");
}

function paginationThird() {

  bulletFirst.classList.remove("slider-pagination-active");
  bulletSecond.classList.remove("slider-pagination-active");
  bulletThird.classList.add("slider-pagination-active");

  bodyBackground.classList.remove("body-second-slide");
  bodyBackground.classList.add("body-third-slide");
  bodyBackground.classList.remove("body-first-slide");

  firstSlide.classList.remove("slide-active");
  secondSlide.classList.remove("slide-active");
  thirdSlide.classList.add("slide-active");

  firstLittleSlide.classList.add("first-slide");
  firstLittleSlide.classList.remove("second-slide");
  firstLittleSlide.classList.remove("third-slide");

  secondLittleSlide.classList.remove("third-slide");
  secondLittleSlide.classList.remove("first-slide");
  secondLittleSlide.classList.add("second-slide");
}

var burgerMenu = document.querySelector(".burger-list");
var firstLine = document.querySelector(".burger-item:nth-of-type(1)");
var secondLine = document.querySelector(".burger-item:nth-of-type(2)");
var thirdLine = document.querySelector(".burger-item:nth-of-type(3)");


function burgerOpen() {
  burgerMenu.classList.toggle("burger-open");
  firstLine.classList.toggle("burger-open-first-item");
  secondLine.classList.toggle("burger-open-second-item");
  thirdLine.classList.toggle("burger-open-third-item");
}