// Generate Functions 

// http://www.net-comber.com/charset.html Character Set Guide

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// console.log(getRandomLower()); /*works gets random lowercase */

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper()); /*works gets random uppercase */

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// console.log(getRandomNumber()); /*works gets random number */

function getRandomSymbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol()); /* works get random symbol */

//console.log(typeof length); /* works gets input length number */

//console.log(lowercaseBoolean, uppercaseBoolean, numberBoolean, symbolBoolean) /* tests Booleans */


function generatePassword() {

    // user input elements
    const passLength = parseInt(prompt("How long would you like your password? 8 - 128?"));

    while (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("Password must be between 8 and 128, choose again!"));
        if (!passLength) {
            alert("Value is needed! Start over!");
            return generatePassword();
        }
    }

    const lowercaseBoolean = confirm("Do you want lowercase?");
    const uppercaseBoolean = confirm("Do you want uppercase?");
    const numberBoolean = confirm("Do you want numbers?");
    const symbolBoolean = confirm("Do you want symbols");

    if (!numberBoolean && !uppercaseBoolean && !lowercaseBoolean && !symbolBoolean) {
        var userChoice = alert('Password needs a certain criteria, please start again!');
        return [passLength];
    }

    // gives a place for password
    var generatedPassword = "";

    const typesCount = lowercaseBoolean + uppercaseBoolean + numberBoolean + symbolBoolean;

    //   console.log("typesCount: ", typesCount);

    // filters out false array items
    const typesArr = [{ lowercaseBoolean }, { uppercaseBoolean }, { numberBoolean }, { symbolBoolean }]
    filter(
        item => Object.values(item)[0]
    );

    // creates array and checks it here
    //  console.log("typesCount: ", typesArr);

    // if nothing is true return empty
    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < passLength; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            // console.log("funcName: ", funcName);
            if (funcName === "uppercaseBoolean") {
                generatedPassword += getRandomUpper();
            } else if (funcName === "lowercaseBoolean") {
                generatedPassword += getRandomLower();
            } else if (funcName === "numberBoolean") {
                generatedPassword += getRandomNumber();
            } else if (funcName === "symbolBoolean") {
                generatedPassword += getRandomSymbol();
            }

            return generatedPassword;
        });
    }
    //console.log("generated password pre slice: ", generatedPassword)
    //console.log(generatedPassword.slice(0, passLength));

    const finalPassword = generatedPassword.slice(0, passLength);

    // add slice to creat perfect password length 


    //console.log(scramble(generatedPassword));
    var newPassword = scramble(finalPassword);
    // writePassword(newPassword);
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;

}

function scramble(a) {
    a = a.split("");
    for (var b = a.length - 1; 0 < b; b--) {
        var c = Math.floor(Math.random() * (b + 1));
        var d = a[b];
        a[b] = a[c];
        a[c] = d;
    }
    return a.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword(password) {
//     //   var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);