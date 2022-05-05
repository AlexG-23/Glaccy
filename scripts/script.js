
let firstSlide = document.querySelector(".slider-item:nth-child(1)");
let secondSlide = document.querySelector(".slider-item:nth-child(2)");
let thirdSlide = document.querySelector(".slider-item:nth-child(3)");

let bulletFirst = document.querySelector(".slider-pagination-item:nth-child(1) .slider-pagination-btn");
let bulletSecond = document.querySelector(".slider-pagination-item:nth-child(2) .slider-pagination-btn");
let bulletThird = document.querySelector(".slider-pagination-item:nth-child(3) .slider-pagination-btn");

let firstLittleSlide = document.querySelector(".second-slide");
let secondLittleSlide = document.querySelector(".third-slide");
let thirdLittleSlide = document.querySelector(".first-slide");

let firstBodyBackground = document.querySelector(".body-first-slide");
let secondBodyBackground = document.querySelector(".body-second-slide");
let thirdBodyBackground = document.querySelector(".body-third-slide");

function toNextSlide() {
  if (firstSlide.classList.contains("slide-active")) {
    firstSlide.classList.remove("slide-active");
    secondSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("second-slide");
    firstLittleSlide.classList.add("third-slide");

    secondLittleSlide.classList.remove("third-slide");
    secondLittleSlide.classList.add("first-slide");

    bulletFirst.classList.remove("slider-pagination-active");
    bulletSecond.classList.add("slider-pagination-active");

    firstBodyBackground.classList.remove("body-first-slide");
    firstBodyBackground.classList.add("body-second-slide");
    
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

    firstBodyBackground.classList.remove("body-second-slide");
    firstBodyBackground.classList.add("body-third-slide");
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

    firstBodyBackground.classList.remove("body-third-slide");
    firstBodyBackground.classList.add("body-first-slide");
  }
}

function toPrevSlide() {
  if (firstSlide.classList.contains("slide-active")) {
    firstSlide.classList.remove("slide-active");
    thirdSlide.classList.add("slide-active");

    firstLittleSlide.classList.remove("second-slide");
    firstLittleSlide.classList.add("first-slide");

    secondLittleSlide.classList.remove("third-slide");
    secondLittleSlide.classList.add("second-slide");

    bulletFirst.classList.remove("slider-pagination-active");
    bulletThird.classList.add("slider-pagination-active");

    firstBodyBackground.classList.remove("body-first-slide");
    firstBodyBackground.classList.add("body-third-slide");
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

    firstBodyBackground.classList.remove("body-second-slide");
    firstBodyBackground.classList.add("body-first-slide");
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

    firstBodyBackground.classList.remove("body-third-slide");
    firstBodyBackground.classList.add("body-second-slide");
  }
}

function paginationFirst() {

  bulletFirst.classList.add("slider-pagination-active");
  bulletSecond.classList.remove("slider-pagination-active");
  bulletThird.classList.remove("slider-pagination-active");

  firstBodyBackground.classList.remove("body-second-slide");
  firstBodyBackground.classList.remove("body-third-slide");
  firstBodyBackground.classList.add("body-first-slide");

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

  firstBodyBackground.classList.add("body-second-slide");
  firstBodyBackground.classList.remove("body-third-slide");
  firstBodyBackground.classList.remove("body-first-slide");

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

  firstBodyBackground.classList.remove("body-second-slide");
  firstBodyBackground.classList.add("body-third-slide");
  firstBodyBackground.classList.remove("body-first-slide");

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

let burgerMenu = document.querySelector(".burger-list");
let firstLine = document.querySelector(".burger-item:nth-of-type(1)");
let secondLine = document.querySelector(".burger-item:nth-of-type(2)");
let thirdLine = document.querySelector(".burger-item:nth-of-type(3)");
let page = document.querySelector(".page-main");

function burgerOpen() {
  burgerMenu.classList.toggle("burger-open");
  page.classList.toggle("page-burger-opened");
  firstLine.classList.toggle("burger-open-first-item");
  secondLine.classList.toggle("burger-open-second-item");
  thirdLine.classList.toggle("burger-open-third-item");

  if (search.classList.contains("popover-opened")) {
    search.classList.remove("popover-opened");
    searchBtn.classList.remove("active-btn");
  }
  if (cart.classList.contains("popover-opened")) {
    cart.classList.remove("popover-opened");
    cartBtn.classList.remove("active-btn");
  }
  if (login.classList.contains("popover-opened")) {
    login.classList.remove("popover-opened");
    loginBtn.classList.remove("active-btn");
  }
}

let search = document.querySelector(".popover-search");
let searchBtn = document.querySelector(".search-btn");

function searchOpen() {
  search.classList.toggle("popover-opened");
  searchBtn.classList.toggle("active-btn");

  if (cart.classList.contains("popover-opened")) {
    cart.classList.remove("popover-opened");
    cartBtn.classList.remove("active-btn");
  }
  if (login.classList.contains("popover-opened")) {
    login.classList.remove("popover-opened");
    loginBtn.classList.remove("active-btn");
  }
  if (burgerMenu.classList.contains("burger-open")) {
    burgerMenu.classList.remove("burger-open");
    firstLine.classList.remove("burger-open-first-item");
    secondLine.classList.remove("burger-open-second-item");
    thirdLine.classList.remove("burger-open-third-item");
  }
}

let login = document.querySelector(".popover-login");
let loginBtn = document.querySelector(".login-btn");

function loginOpen() {
  login.classList.toggle("popover-opened");
  loginBtn.classList.toggle("active-btn");
  
  if (search.classList.contains("popover-opened")) {
    search.classList.remove("popover-opened");
    searchBtn.classList.remove("active-btn");
  }
  if (cart.classList.contains("popover-opened")) {
    cart.classList.remove("popover-opened");
    cartBtn.classList.remove("active-btn");
  }
  if (burgerMenu.classList.contains("burger-open")) {
    burgerMenu.classList.remove("burger-open");
    firstLine.classList.remove("burger-open-first-item");
    secondLine.classList.remove("burger-open-second-item");
    thirdLine.classList.remove("burger-open-third-item");
  }
}

let cart = document.querySelector(".popover-cart");
let cartBtn = document.querySelector(".cart-btn");

function cartOpen() {
  cart.classList.toggle("popover-opened");
  cartBtn.classList.toggle("active-btn");

  if (search.classList.contains("popover-opened")) {
    search.classList.remove("popover-opened");
    searchBtn.classList.remove("active-btn");
  }
  if (login.classList.contains("popover-opened")) {
    login.classList.remove("popover-opened");
    loginBtn.classList.remove("active-btn");
  }
  if (burgerMenu.classList.contains("burger-open")) {
    burgerMenu.classList.remove("burger-open");
    firstLine.classList.remove("burger-open-first-item");
    secondLine.classList.remove("burger-open-second-item");
    thirdLine.classList.remove("burger-open-third-item");
  }
}