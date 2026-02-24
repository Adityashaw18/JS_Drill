const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDispaly]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const uppercaseCheck = document.querySelector("[#uppercase]");
const lowercaseCheck = document.querySelector("[#lowercase]");
const numbersCheck = document.querySelector("[#numbers]");
const symbolsCheck = document.querySelector("[symbol]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("[.generateButton]");
const allCheckBox = document.querySelector("input[type=checkbox]");

let password = "";
let passwordLength = 10;
let checkCount = 1;
//set strength circle color to grey

function eliser(){
    
}