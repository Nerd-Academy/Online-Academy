'use strict';
let user = [];


//Contact Information
// let userName;
// let emailAdress;
// let subject="Nerd Academy";
//  let message =`Welcom ${userName} To Our Academy`;


function User(firstname, lastname, email, major) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.major = major;
  user.push(this);

}
let formEL = document.getElementById('JoinUs');
formEL.addEventListener('submit', Adduser);
function Adduser(event) {
  event.preventDefault();
  let newUserFirstName = event.target.firstname.value;
  let newUseLastName = event.target.lastname.value;
  let newUserEmail = event.target.email.value;
  let newUserMajor = event.target.major.value;


  let newUser = new User(newUserFirstName, newUseLastName, newUserEmail, newUserMajor);
  console.log(newUser);
  SettingUserInformation();
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



