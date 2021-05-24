"use strict";

let cartFromLocalStorage;

function loadCart() {
  cartFromLocalStorage = JSON.parse(localStorage.getItem("My Courses")) || [];
}
function loadCoursesArrayIntoLocalStorage() {
  localStorage.removeItem('My Courses');
  let stringCoursesArray = JSON.stringify(cartFromLocalStorage);
  localStorage.setItem('My Courses',stringCoursesArray)
}

setCounter();

let sectionEl = document.getElementById("mycart");
// sectionEl.addEventListener('click', removeCourse);


function renderCourse() {
  loadCart();

  for (let i = 0; i < cartFromLocalStorage.length; i++) {
    let divEl_1 = document.createElement("div");
    sectionEl.appendChild(divEl_1);
    divEl_1.setAttribute("id", `card_${i}`);

    let pEl_1 = document.createElement("p");
    divEl_1.appendChild(pEl_1);
    pEl_1.textContent = cartFromLocalStorage[i].courseName;

    let imgEl = document.createElement("img");

    divEl_1.appendChild(imgEl);
    imgEl.setAttribute("src", cartFromLocalStorage[i].courseImgSrc);

    let instructorNameEl = document.createElement("p");

    divEl_1.appendChild(instructorNameEl);
    instructorNameEl.textContent = cartFromLocalStorage[i].instructorName;

    let courseHourEl = document.createElement("p");

    divEl_1.appendChild(courseHourEl);
    courseHourEl.textContent = cartFromLocalStorage[i].courseHours;

    let coursePriseEl = document.createElement("p");

    divEl_1.appendChild(coursePriseEl);
    coursePriseEl.textContent = cartFromLocalStorage[i].coursePrise;

    let removeCourseEl = document.createElement("button");
    divEl_1.appendChild(removeCourseEl);

    removeCourseEl.textContent = "×";

    // removeCourseEl.setAttribute('quantity',courseCart[i].product);
    removeCourseEl.setAttribute("id", `remove_${i}`);
    removeCourseEl.addEventListener("click", removeCourse);
  }
}
renderCourse();

console.log(cartFromLocalStorage);

function removeCourse(event) {
  let cName = event.target.parentElement.children[0].textContent;
  for (let i = 0; i < cartFromLocalStorage.length; i++) {
    if (cName === cartFromLocalStorage[i].courseName);
    {
      
      cartFromLocalStorage.splice(i, 1);
      break;
    }
  }
  console.log("cartFromLocalStorage = ", cartFromLocalStorage)
  loadCoursesArrayIntoLocalStorage();
  event.target.parentElement.remove();
}
