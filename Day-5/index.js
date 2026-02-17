console.log("Hello World!");

// function eventFunction() {
//     console.log("I have clicked on the document");
// }

// document.addEventListener('click',eventFunction);

// let col = document.querySelector('h1');

//anonymous function method
// col.addEventListener('click', function(){
//     col.style.backgroundColor='navy';
//     col.style.color = 'white';
// });

//right method
// function colorChange(){
//     col.style.backgroundColor='navy';
//     col.style.color = 'white';
// }
// col.addEventListener('click',colorChange);

// document.removeEventListener('click', eventFunction );
// col.removeEventListener('click', colorChange);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(sleeper){
//     console.log(sleeper);
// });

// let link = document.querySelectorAll('a');
// let thirdlink = link[2];

// thirdlink.addEventListener('click',function(event) {
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// });

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//         console.log('Para' + event.target.textContent);
//     }

// myDiv.addEventListener('click', paraStatus);

// for(let i=0; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is my new para in js = '+i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN'){
    console.log('span pr click kiy hai' + event.target.textContent);
    }
})