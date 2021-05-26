'use strict';

let courseCart = [];
let returnedCourse = [];
// x = 0;
var elms = document.getElementsByClassName("splide");
for (var i = 0, len = elms.length; i < len; i++) {
  new Splide(elms[i], {
    rewind: true,
    // autoplay: true,
    // interval: 3000,
  }).mount();
}

function MyCourses(courseName, courseImgSrc, instructorName, instructorImg, courseHours, coursePrise) {
  this.courseName = courseName;
  this.courseImgSrc = courseImgSrc;
  this.instructorName = instructorName;
  this.instructorImg = instructorImg;
  this.courseHours = courseHours;
  this.coursePrise = coursePrise;
  this.prise = coursePrise.split(" ")[0];
  courseCart.push(this);
}

var ids = document.getElementsByClassName("course");
for (var i = 0, len = ids.length; i < len; i++) {
  let id = ids[i];
  id.setAttribute("id", `newId${i}`);
  let formEl = document.getElementById(`newId${i}`);
  formEl.addEventListener("submit", addCourse);
}

function addCourse(event) {
  event.preventDefault();
  increaseAndSetCounterToHtmlAndLS(); 

  let instructorName = event.target.children[1].children[0].children[1].innerText;

  let courseName = event.target.children[0].children[2].innerText;

  let courseImgSrc = event.target.children[0].children[0].src;

  let instructorImg = event.target.children[1].children[0].children[0].src;

  let courseHours = event.target.children[1].children[2].children[0].innerText;

  let coursePrise = event.target.children[1].children[2].children[1].innerText;

  let newCourse = new MyCourses(courseName, courseImgSrc, instructorName, instructorImg, courseHours, coursePrise);
  settingCourses();

}

function settingCourses() {
  let data = JSON.stringify(courseCart);
  localStorage.setItem("My Courses", data);
}

GettingCourses();

MyCourses.prototype.removeItem = function (courseName) {
  this.courseCart.splice(courseName);
};

// if(priseValue==null)
// {
//   document.getElementById('totalprise').remove();
// }
// function containsObject(courseName, courseCart) {
//     var i;
//     for (i = 0; i < courseCart.length; i++) {
//         if (list[i] === obj) {
//             return true;
//         }
//     }

//     return false;
// }
// if(courseName!==courseCart.courseName)
// {

// }
