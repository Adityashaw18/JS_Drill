console.log('Hello World!');

// adding 100 para 
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is my para ${i}`;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(`This took ${t2-t1} ms`);

//optimising code

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i =1; i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = `This is my div para ${i}`;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log(`This took ${t3-t4} ms`);

//FRAGMENTING FRAMES FOR A SINGLE REFLOW AND REPRINT
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is my para ${i}`;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);

// CALL STACK

function addPara(){
    let para = document.createElement("p");
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendnewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Kya haal hai sabke';
    document.body.appendChild(para);
}

addPara();
appendnewMessage();

document.addEventListener('click',function(){
    console.log('hello jee!');
});