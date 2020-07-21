// user input elements 
const length = parseInt(prompt("How long would you like your password? 8 - 128?"));
const lowercaseBoolean = confirm("Do you want lowercase?");
const uppercaseBoolean = confirm("Do you want uppercase?");
const numberBoolean = confirm("Do you want numbers?");
const symbolBoolean = confirm("Do you want symbols");


//object with functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//console.log(typeof length); /* works gets input length number */

//console.log(lowercaseBoolean, uppercaseBoolean, numberBoolean, symbolBoolean) /* tests Booleans */

// tells where to go
document.querySelector("#password") = generatePass(lowercaseBoolean, uppercaseBoolean, numberBoolean, symbolBoolean, length);




// Generate Functions 

// http://www.net-comber.com/charset.html Character Set Guide

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//console.log(getRandomLower()); /*works gets random lowercase */

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(getRandomUpper()); /*works gets random uppercase */

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//console.log(getRandomNumber()); /*works gets random number */

function getRandomSymbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol()); /* works get random symbol */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);