'use strict';
joinLink=document.getElementById('join-us');
welcomEl=document.getElementById('welcom');


GettingUserInformation();
console.log(renderedUser[0].firstname);
if(renderedUser[0].firstname!==null)
{

  joinLink.setAttribute('hidden',"");
  // location.href = 'courses.html';
  // console.log(JSON.parse(localStorage.getItem('User')));

  welcomEl.textContent=` Welcome  ${renderedUser[0].firstname} `
  // window.location.reload();

}