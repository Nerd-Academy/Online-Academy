"use strict";

let cartFromLocalStorage;
let totalPrise=0;
let priseValue;
let priseInt;

let userCourseCheck = JSON.parse(localStorage.getItem('My Courses'));

function checkEmptyCart() {
if (userCourseCheck === null || userCourseCheck === undefined || userCourseCheck.length == 0) {
  console.log('userCourseCheck is empty');

  let mainEl = document.getElementById('main');

  let cardEl = document.createElement('div');
  cardEl.setAttribute('id','emptyCart');
  mainEl.appendChild(cardEl);

  let imgEl = document.createElement('img');
  imgEl.setAttribute('src','img/myCourses/empty_cart.png')
  cardEl.appendChild(imgEl)

}}
checkEmptyCart();

function loadCart() {
  cartFromLocalStorage = JSON.parse(localStorage.getItem("My Courses")) || [];
}
function loadCoursesArrayIntoLocalStorage() {
  localStorage.removeItem("My Courses");
  let stringCoursesArray = JSON.stringify(cartFromLocalStorage);
  localStorage.setItem("My Courses", stringCoursesArray);
}

let sectionEl = document.getElementById("mycart");
let sectionEl_1=document.getElementById("totalprise");

// sectionEl.addEventListener('click', removeCourse);

function renderCourse() {
  loadCart();

  for (let i = 0; i < cartFromLocalStorage.length; i++) {
    let divEl = document.createElement("div");
    sectionEl.appendChild(divEl);
    divEl.setAttribute("id", `card_${i}`);
    divEl.setAttribute("class",'divCard');

    let divEl_1 = document.createElement("div");
    divEl.appendChild(divEl_1);

    let imgEl = document.createElement("img");
    divEl_1.appendChild(imgEl);
    imgEl.setAttribute("src", cartFromLocalStorage[i].courseImgSrc);


    let divEl_2 = document.createElement("div");
    divEl.appendChild(divEl_2);


    let pEl_1 = document.createElement("p");
    divEl_2.appendChild(pEl_1);
    pEl_1.textContent = cartFromLocalStorage[i].courseName;

    // let imgEl_1 = document.createElement("img");
    // divEl_2.appendChild(imgEl_1);
    // imgEl.setAttribute("src", cartFromLocalStorage[i].courseImgSrc);

    let imgEl_2 = document.createElement("img");
    divEl_2.appendChild(imgEl_2);
    imgEl_2.setAttribute("src", cartFromLocalStorage[i].instructorImg);

    let instructorNameEl = document.createElement("p");

    divEl_2.appendChild(instructorNameEl);
    instructorNameEl.textContent = cartFromLocalStorage[i].instructorName;

    let courseHourEl = document.createElement("p");

    divEl_2.appendChild(courseHourEl);
    courseHourEl.textContent = ` Course Hours :  " ${cartFromLocalStorage[i].courseHours} "`;

    let coursePriseEl = document.createElement("p");

    divEl_2.appendChild(coursePriseEl);
    coursePriseEl.textContent = ` Course Price :   " ${cartFromLocalStorage[i].coursePrise} "`;

    let removeCourseEl = document.createElement("button");
    divEl_2.appendChild(removeCourseEl);

    removeCourseEl.textContent = `remove`;

    // removeCourseEl.setAttribute('quantity',courseCart[i].product);
    removeCourseEl.setAttribute("id", `remove_${i}`);
    removeCourseEl.addEventListener("click", removeCourseFromHtmlAndLS);

  
   priseInt=parseInt(cartFromLocalStorage[i].prise);

    totalPrise=totalPrise+priseInt;
   
  }
  if(priseInt!==null)
  {
    total();

  }
 
}
console.log(totalPrise);
function total()
{



  let spanEl=document.createElement('span');
  sectionEl_1.appendChild(spanEl);
  spanEl.textContent=`The total price is \n ${totalPrise}`;
}




renderCourse();
console.log(cartFromLocalStorage);

function removeCourseFromHtmlAndLS(event) {
  event.target.parentElement.parentElement.remove();

  console.log('event.target = ', event.target);
  console.log('courseName on HTML = ',event.target.parentElement.children[0].textContent);

  let courseName = event.target.parentElement.children[0].textContent;

  for (let i = 0; i < cartFromLocalStorage.length; i++) {

    console.log(courseName === cartFromLocalStorage[i].courseName)
    if (courseName === cartFromLocalStorage[i].courseName){
      console.log(`cartFromLocalStorage ${[i]}.courseName = `, cartFromLocalStorage[i].courseName);
      cartFromLocalStorage.splice(i, 1);

      break;

    }
    let priseInt=parseInt(cartFromLocalStorage[i].prise);

    totalPrise=totalPrise-priseInt;
     priseValue=cartFromLocalStorage[i].prise;
  }
  window.location.reload();

  loadCoursesArrayIntoLocalStorage();
  decreaseAndSetCounterToHtmlAndLS();

  checkEmptyCart();
  console.log(cartFromLocalStorage);
}

