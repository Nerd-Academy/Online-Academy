'use strict'
let user=[];




 function User(firstname,lastname,email,major)
 {
     this.firstname=firstname;
     this.lastname=lastname;
     this.email=email;
     this.major=major;
     user.push(this);
    
 }
let formEL=document.getElementById('JoinUs') ;
formEL.addEventListener('submit',Adduser);
function Adduser(event)
{
    event.preventDefault();
    let newUserFirstName=event.target.firstname.value;
    let newUseLastName=event.target.lastname.value;
    let newUserEmail=event.target.email.value;
    let newUserMajor=event.target.major.value;

    let newUser=new User(newUserFirstName,newUseLastName,newUserEmail,newUserMajor);
   console.log(newUser);
} 
