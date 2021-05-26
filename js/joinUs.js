'use strict';

let user = [];


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
formEL.addEventListener('submit', Adduser);
function Adduser(event) {
  let userNameFromHtml = event.target.fulltname.value;
  event.preventDefault();

  if(userNameFromHtml !== ""){
  localStorage.clear;
  let newUserFirstName = event.target.fulltname.value;
  let newUserEmail = event.target.email.value;
  let newUserMajor = event.target.major.value;


  let newUser = new User(newUserFirstName, newUserEmail, newUserMajor);
  console.log(newUser);
  SettingUserInformation();
  showThankYou()
} else {
  let placeHolderText = event.target.fulltname;
  placeHolderText.setAttribute('placeholder','This field is necessary');
  placeHolderText.style.fontSize = "20px";
  // placeHolderText.style.placeholder = "red";
  placeHolderText.style.borderColor ="rgb(241, 36, 71)";
  // placeHolderText.style.placeholder ="red";
  
  
}
}





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
    user = userInformatin;
  }

}


function showThankYou() {
let thankYouEl = document.getElementById('thankYouDivContainer');
thankYouEl.removeAttribute('hidden');
}