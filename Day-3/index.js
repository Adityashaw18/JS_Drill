console.log('Rom Rom Bhaiyo!');
// //primitive datatype
// let lastname = 'Shaw';
// //object
// let firstname = new String("Aditya");

// let message = 
// `Hello ${firstname},

// Thanks for the Opportunity

// Regards,
// Shaw`;

// // let words = message.split(" ");
// console.log(message);

// ///Date And time

// let date = new Date();

// let date1 = new Date("March 18 2002 6:45");

// let date2 = new Date(2002, 2, 18, 6);

// date2.setFullYear(1947)
// console.log(date2);

// //Insertion in an array
// let numbers = [1,4,5,7];
// //insertion at the end of array
// // numbers.push(9);
// //insertion at the begining of array
// // numbers.unshift(8);
// //insertion at the middle of array
// // numbers.splice(3, 0, `a`,`b`,`c`,`d`);

// //Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1){
//     console.log(`present`);
// }
// // console.log(numbers.includes(7));
// //find the number in a array from a given index [.indexof(number, starting point index)]
// console.log(numbers.indexOf(4, 2));

// let courses = [
//     {no:1, naam:`Aditya`},
//     {no:2, naam:`Raju`},
// ];
// // console.log(courses);

// // console.log(courses.includes({no:2, naam:`Raju`}));

// // let course=courses.find(function(courses){
// //     return courses.naam == `Aditya`;
// // })

// let course=courses.find(courses => courses.naam==`Raju`);

// console.log(course);

// //Removing elements

// let num= [1,2,3,4,5,6,7];
// //end
// num.pop();
// //begin
// num.shift();
// //between
// num.splice(2, 1);
// console.log(num);

// let numbers = [1,2,3,4,5,6,7];
// let numbers2 = numbers;

// // numbers=[];
// // numbers.length = 0;
// // numbers.splice(0, numbers.length);

// console.log(numbers);

// let first = [1,2,3];
// let second = [4,5,6];

// let combine= first.concat(second);
// console.log(combine);
// let sliced = combine.slice(2,3);
// console.log(sliced);