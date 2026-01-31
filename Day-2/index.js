console.log('Chaliye suru krte hai');

//object create

// const rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// function createRectangle(length, breadth) {
//     return rectangle = {
//         length,
//         breadth,

//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     }
// }

// let rectangleobj1 = createRectangle(5, 4);

function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function() {
        console.log('drawing rectangle');
    }
}