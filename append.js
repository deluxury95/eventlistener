// let btn = document.getElementById("btn");
// btn.addEventListener("click" , (e)=>{
//  console.log("button clicked")
// });

const bodyElement = document.body;

const mainElement = document.createElement('main');
const buttonElement = document.createElement('button');
buttonElement.innerText = 'click Me';
bodyElement.appendChild(mainElement);
mainElement.appendChild(buttonElement);
buttonElement.addEventListener('click', ()=>{
    console.log('Hello Luxury');
})