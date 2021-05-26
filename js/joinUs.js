'use strict';

let user = [];
let renderedUser=[];

//Contact Information
// let userName;
// let emailAdress;
// let subject="Nerd Academy";
//  let message =`Welcom ${userName} To Our Academy`;


function User(firstname, email, major) {
  this.firstname = firstname;
  this.email = email;
  this.major = major;
  user.push(this);

}
console.log(document.getElementById('joinform'));
let formEL = document.getElementById('joinform');
let joinLink=document.getElementById('join-us');
let welcomEl=document.getElementById('welcom');

formEL.addEventListener('submit', Adduser);
function Adduser(event) {
  

  event.preventDefault();
  // localStorage.clear;


  let newUserFirstName = event.target.fulltname.value;
  let newUserEmail = event.target.email.value;
  let newUserMajor = event.target.major.value;


  let newUser = new User(newUserFirstName, newUserEmail, newUserMajor);
  // console.log(newUser);


  SettingUserInformation();
  // joinLink.remove();
  GettingUserInformation();
  console.log(renderedUser[0].firstname);
  if(renderedUser[0].firstname!==null)
  {
  
    joinLink.setAttribute('hidden',"");
    location.href = 'courses.html';
    // console.log(JSON.parse(localStorage.getItem('User')));
  
    welcomEl.textContent=` Welcome  ${renderedUser[0].firstname} `
    // window.location.reload();

  }
  
// window.location.reload();
}
GettingUserInformation();
if(renderedUser[0].firstname!==null)
{

  joinLink.setAttribute('hidden',"");
  // location.href = 'courses.html';
  // console.log(JSON.parse(localStorage.getItem('User')));

  welcomEl.textContent=` Welcome  ${renderedUser[0].firstname} `
  // window.location.reload();

}


  // if(renderedUser[0].firstname===null)
  // {
  //   joinLink.removeAttribute('hidden',"");

  
  // }





console.log(user);




// //Save information for contact
// userName=`${event.target.firstname.value} ${event.target.lastname.value}`;
// emailAdress=`${event.target.email.value}`;









function SettingUserInformation() {

  let userData = JSON.stringify(user);
  localStorage.setItem('User', userData);
}

function GettingUserInformation() {
  let userString = localStorage.getItem('User');
  let userInformatin = JSON.parse(userString);
  if (userInformatin !== null) {
    renderedUser = userInformatin;
  }

  console.log(renderedUser[0].firstname);

}



