console.log('Chaliye suru krte hai');

//object create

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//object oriented programming

// const rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// const rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle'); 
//     }
// };

//factory function

// function createRectangle(length,breadth){
//     return rectangle = {
//     length,
//     breadth,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };
// }

// let rectangleobj1  = createRectangle(5,2);
// let rectangle2 = createRectangle(9,6);
// let rectangle3 = createRectangle(8,3);

// //Constructor function -> pascal Notation

// function Rectangle() {
//     this.length = 1;
//     this.breadth =2;
//     this.draw = function(){
//         console.log('Art_Making');
//     }
// }

// //object creation using constructor function
// let rectangleObject = new Rectangle();

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rect = new Function(
//     'length','breadth',
//     `this.length = length;
//     this.breadth =breadth;
//     this.draw = function(){
//         console.log('Art_Making');
//     }`
// );

// let a ={value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let r =10;
// function inc(r){
//     r++;
// }
// inc(r);
// console.log(r);

let rectangle = {
    length : 2,
    breadth : 4
};
//for-of loop
// for(let key in rectangle){
//     console.log(key.rectangle(key));
// }