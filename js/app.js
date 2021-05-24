'use strict';

let counter = 0;
function setCounter()
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
function GettingCourses()
{
    let stringCourse=localStorage.getItem('My Courses');
    let courseObject=JSON.parse(stringCourse);
    if(courseObject!==null)
    {
        courseCart=courseObject;
    }

}
setCounter();