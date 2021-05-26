'use strict';

let user = [];
let newUserFirstName;
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
let formEL = document.getElementById('JoinUs');
let joinLink=document.getElementById('join-us');

formEL.addEventListener('submit', Adduser);
function Adduser(event) {
  
  localStorage.clear;

  event.preventDefault();

  newUserFirstName = event.target.fulltname.value;
  let newUserEmail = event.target.email.value;
  let newUserMajor = event.target.major.value;


  let newUser = new User(newUserFirstName, newUserEmail, newUserMajor);
  // console.log(newUser);


  SettingUserInformation();
  // joinLink.remove();
  GettingUserInformation();

  if(renderedUser[0].firstname!==null)
  {
  
    joinLink.remove();
    
  }


}


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



