'use strict';
// window.addEventListener('load', () => {
//     let url = document.querySelectorAll('.card').forEach((item) => {
//       item.querySelector('.left').style.backgroundImage = 'url('+item.dataset.image+')';
//       item.querySelector('.right').style.backgroundImage = 'url('+item.dataset.image+')';
//     });
//   });


// document.getElementsByClassName('joinbotton').onclick = function () {
//   window.location.href = 'joinUs.html';
// //   document.getElementById('btn').remove();
// };
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