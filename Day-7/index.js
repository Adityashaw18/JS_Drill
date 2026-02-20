// console.log("Rom Rom bhaiyo");

// setTimeout(function(){
//     console.log('third');
// },3000)

// function sync(){
//     console.log("first");
// }

// sync();

// console.log('second');

// /

// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("i am inside promise 2");
//     }, 3000)
//     // resolve(2238);
//     // reject(new Error("Bhai sahab error aye hai"));
// });
// console.log(`pehla`);


// let waada1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('setTimeout 1 started');
//     },2000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let waada2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('setTimeout 1 started');
//         },3000);
//         resolve('waada 2 resolved');
//     })
//     return waada2;
// });
// output.then((value) => console.log(value));

// async function abcd() {
//     return 7;
// }

// async function utility() {
    
//     let delhiMausam = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Delhi is hot");
//         },5000);
//     });

//     let kolMausam = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("kolkata is cool");
//         },6000);
//     });

//     let dM= await delhiMausam;
//     let kM= await kolMausam;

//     return [dM, kM];
// }


// async function utility(){

// let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// let output = await content.json();
// console.log(output);
// }
// utility();

// async function helper() {
//     let options ={
//         method: 'POST',
//         body: JSON.stringify({
//         title: 'foochka',
//         body: 'barbel',
//         userId: 2002,
//         weight: 90,
//         }),
//         headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// } 
// utility();


function init() {
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
let geb = init();

geb;

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();