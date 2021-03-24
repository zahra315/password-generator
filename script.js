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

//Array**********
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " / ", " < ", " = ", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Variable**********
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialChar;
var userInput;
var newPassword = [];
// Password generator function**********
function generatePassword(){
  passwordLength = prompt("Choose a number between 8-128 to determine your password length, please!");
    //checkig password length**********
    if (passwordLength < 8 || passwordLength > 128){
      alert("Choose a number between 8-128 to determine your password length!");
      generatePassword();
    }else if (isNaN(passwordLength)){
      alert("Choose a number between 8-128 to determine your password length!");
      generatePassword();
    }
    //determine whether the user wants to include any criteri**********
    else { 
      confirmLowerCase = confirm("Do you want to include lowercase letters in your password?");
      console.log("Lower case " + confirmLowerCase);
      confirmUpperCase = confirm("Do you want to include uppercase letters in your password?");
      console.log("Upper case " + confirmUpperCase);
      confirmNumber = confirm("Do you want to include number in your password?");
      console.log("Number " + confirmNumber);
      confirmSpecialChar = confirm("Do you want to include special characters in your password?");
      console.log("Special Character " + confirmSpecialChar);
  
    }
  //Checking user's entry**********
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialChar){
    userInput = alert("You need to choose at least a criteria.");
  }else if (confirmUpperCase && confirmLowerCase && confirmNumber && confirmSpecialChar){
    console.log(userInput = upperCase.concat(lowerCase, num, specialChar));
  }else if (confirmUpperCase && confirmLowerCase && confirmNumber){
    console.log(userInput = upperCase.concat(lowerCase, num));
  }else if (confirmUpperCase && confirmLowerCase && confirmSpecialChar){
    console.log(userInput = upperCase.concat(lowerCase, specialChar));
  }else if (confirmUpperCase && confirmNumber && confirmSpecialChar){
    console.log(userInput = upperCase.concat(num, specialChar));
  }else if (confirmLowerCase && confirmNumber && confirmSpecialChar){
    console.log(userInput = lowerCase.concat(num, specialChar));
  }else if (confirmUpperCase && confirmLowerCase){
   console.log(userInput = upperCase.concat(lowerCase));
  }else if (confirmUpperCase && confirmNumber){
    console.log(userInput = upperCase.concat(num));
  }else if (confirmUpperCase && confirmSpecialChar){
    console.log(userInput = upperCase.concat(specialChar));
  }else if (confirmLowerCase && confirmNumber){
    console.log(userInput = lowerCase.concat(num));
  }else if(confirmLowerCase && confirmSpecialChar){
    console.log(userInput = lowerCase.concat(specialChar));
  }else if(confirmNumber && confirmSpecialChar){
    console.log(userInput = num.concat(specialChar));
  }else if (confirmUpperCase && confirmLowerCase){
    console.log(userInput = upperCase.concat(lowerCase));
  }else if (confirmUpperCase && confirmNumber){
     console.log(userInput = upperCase.concat(num));
  }else if (confirmUpperCase && confirmSpecialChar){
     console.log(userInput = upperCase.concat(specialChar));
  }else if (confirmLowerCase && confirmNumber){
     console.log(userInput = lowerCase.concat(num));
  }else if(confirmLowerCase && confirmSpecialChar){
     console.log(userInput = lowerCase.concat(specialChar));
  }else if(confirmNumber && confirmSpecialChar){
     console.log(userInput = num.concat(specialChar));
  }else if(confirmLowerCase){
    console.log(userInput = lowerCase);
  }else if (confirmUpperCase){
    console.log(userInput = upperCase);
  }else if(confirmNumber){
    console.log(userInput = num);
  }else if(confirmSpecialChar){
    console.log(userInput = specialChar);
  }
  //Random data from user's criteria selectio**********
  for (var i = 0; i < passwordLength; i++){
    var selection = userInput[Math.floor(Math.random() * userInput.length)];
    newPassword.push(selection);
    console.log(selection);
  }
  
  var password = newPassword.join("");
  console.log("New Password is: " + password);
  return password;

}


