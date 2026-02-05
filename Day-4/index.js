console.log("Kya Haal Bhai ke!");

//function Declaration
function run(){
	console.log("running");
}

//function call or invoke
run();

//Named function assignment
let stand = function walk() {
	console.log('walking');
};

let jump=stand;

jump();

//Anonymousfunction assignment
let stand2 = function () {
	console.log('walking+running');
}

stand2();