'use strict';

let counter = 0;

function settingCounterToLS() {
  let data = JSON.stringify(counter);
  localStorage.setItem("Counter", data);
}

function setCounterIntoHtml()
{
    let stringCourse=localStorage.getItem('Counter');
    let courseObject=JSON.parse(stringCourse);
    if(courseObject!==null)
    {
        counter=courseObject;
    }

    let counterEl = document.getElementById("counterSpan");
    counterEl.textContent = `( ${counter} )`;
}

function increaseAndSetCounterToHtmlAndLS() {
  ++counter;
  settingCounterToLS();
  setCounterIntoHtml();  
}
function decreaseAndSetCounterToHtmlAndLS() {
  --counter;
  settingCounterToLS();
  setCounterIntoHtml();  
}

function GettingCourses()
{
    let stringCourse=localStorage.getItem('My Courses');
    let courseObject=JSON.parse(stringCourse);
    if(courseObject!==null)
    {
        courseCart=courseObject;
    }

}


setCounterIntoHtml();
