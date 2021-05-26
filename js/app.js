"use strict";

let counter = 0;

function settingCounterToLS() {
  let data = JSON.stringify(counter);
  localStorage.setItem("Counter", data);
}

function setCounterIntoHtml() {
  let stringCourse = localStorage.getItem("Counter");
  let courseObject = JSON.parse(stringCourse);
  if (courseObject !== null) {
    counter = courseObject;
  }

  let counterEl = document.getElementById("counterSpan");
  counterEl.textContent = `( ${counter} )`;
}

function increaseAndSetCounterToHtmlAndLS() {
  ++counter;
  settingCounterToLS();
  setCounterIntoHtml();
  cardCounterStatus();
}
function decreaseAndSetCounterToHtmlAndLS() {
  --counter;
  settingCounterToLS();
  setCounterIntoHtml();
  cardCounterStatus();
}



function GettingCourses() {
  let stringCourse = localStorage.getItem("My Courses");
  let courseObject = JSON.parse(stringCourse);
  if (courseObject !== null) {
    courseCart = courseObject;
  }
}

setCounterIntoHtml();

function cardCounterStatus() {
  let counterOnHTML = document.getElementById("counterSpan");
  let counterFromLS = JSON.parse(localStorage.getItem("Counter"));
  console.log('counterFromLS = ', counterFromLS); 
  console.log('counterFromLS = ', counterFromLS);
  if (counterFromLS === 0 || counterFromLS === null || counterFromLS === undefined) {
    counterOnHTML.setAttribute("hidden", "");
  } 
  if (counterFromLS >= 1) {
    counterOnHTML.removeAttribute("hidden");
  }
}
cardCounterStatus()

if (counter == 0) {
  let totalPrice = document.getElementById("totalprise")
  if (totalPrice !== null) {
    totalPrice.remove();
  }
}

// function checkAndSetCounterToHtmlAndLS() {
//   cardCounterStatus();
//   settingCounterToLS();
//   setCounterIntoHtml();
// }
// checkAndSetCounterToHtmlAndLS();

