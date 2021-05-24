'use strict'
let cart;
// GettingCouses();
function loadCart() {
    cart = JSON.parse(localStorage.getItem('My Courses')) || [];
    
  

    
  
  
  
  }
let araay;

GettingCounter();


let sectionEl=document.getElementById("mycart");
// sectionEl.addEventListener('click', removeCourse);


let counterEl=document.getElementById('counterSpan');
counterEl.textContent=`( ${counter} )`;




function renderCourse()
{
    

    loadCart();

    for (let i = 0; i < cart.length; i++) {
    
   


let divEl_1=document.createElement('div');
sectionEl.appendChild(divEl_1);
divEl_1.setAttribute('id',`card_${i}`);


let pEl_1=document.createElement('p');
divEl_1.appendChild(pEl_1);
pEl_1.textContent=cart[i].courseName;

let imgEl=document.createElement('img');

divEl_1.appendChild(imgEl);
imgEl.setAttribute('src',cart[i].courseImgSrc);

let instructorNameEl=document.createElement('p');

divEl_1.appendChild(instructorNameEl);
instructorNameEl.textContent=cart[i].instuctorName;

let courseHouerEl=document.createElement('p');

divEl_1.appendChild(courseHouerEl);
courseHouerEl.textContent=cart[i].courseHours;

let coursePriseEl=document.createElement('p');

divEl_1.appendChild(coursePriseEl);
coursePriseEl.textContent=cart[i].coursePrise;

let removeCourseEl=document.createElement('button');
divEl_1.appendChild(removeCourseEl);

removeCourseEl.textContent='X';

// removeCourseEl.setAttribute('quantity',courseCart[i].product);
removeCourseEl.setAttribute('id',`remove_${i}`);
removeCourseEl.addEventListener('click',removeCourse);


} }
renderCourse();

console.log(cart);


function removeCourse(event)
{

    let cName= event.target.parentElement.children[0].textContent;
    console.log(cName);

    // let remove=event.target.getAttribute('id');
    // console.log(event.target);
    for (let index = 0; index < cart.length; index++) {
        if(cName===cart[index].courseName) ;
        {
            cart.splice(index,1);
           break;

        } 
        }

        event.target.parentElement.remove();
console.log(cart);

    //   let index =event.target.parentElement.id.split("_")[1];
    //   console.log(index);
    //     localStorage.removeItem(index);

        // settingCourses();
        
        // renderCourse();        


        loadCart();

        settingCourses();

        
        }






