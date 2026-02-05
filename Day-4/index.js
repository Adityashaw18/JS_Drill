console.log("Kya Haal Bhai ke!");

// //function Declaration
// function run(){
// 	console.log("running");
// }

// //function call or invoke
// run();

// //Named function assignment
// let stand = function walk() {
// 	console.log('walking');
// };

// let jump=stand;

// jump();

// //Anonymousfunction assignment
// let stand2 = function () {
// 	console.log('walking+running');
// }

// stand2();

// function sum(a,b) {
// 	return a+b;
// }


// function sum(a,b) {
// 	console.log(arguments);
// 	return a+b;
// }


// function sum() {
// 	 total = 0;
// 	for(let value of arguments){
// 		total = total + value;
// 	}
// 	return total;
// };

// let ans=sum(1,2,3,4,5,6,7,8,9);
// console.log(ans);

// //Rest parameters
// function sum(...args){
// 	console.log(args);
// }
// sum(1,2,3,4,5,6,7,8,9);

//Default parameters
// function intrest(p,r=6,y=9){
// 	return p*r*y/100;
// }


// console.log(intrest(1000,undefined,8));


// let person = { 
// 	fName : 'Aditya',
// 	lName : 'Shaw'
// };

// function fullname() {
// 	return `${person.fName} ${person.lName}`;
// }

// console.log(fullname());

//GETTER SETTER

// let person = { 
// 	fName : 'Aditya',
// 	lName : 'Shaw',
// 	get fullname() {
// 	return `${person.fName} ${person.lName}`;
// 	},
// 	set fullname(value) {
// 		let parts = value.split(' ');
// 		this.fName = parts[0];
// 		this.lName = parts[1];
		
// 	}
// };

// // console.log(person.fullname);

// person.fullname = 'Rahul kumar';
// console.log(person.fullname);