// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");

  return "Generated password will go here!"
}

var lowercase = confirm("do you want lowercase characters?");
var uppercase = confirm("do you want uppercase characters?");
var numbers = confirm("do you want numbers?");
var specialCharacters = confirm("do you want special characters?");
var charset = "";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChars = "0123456789";
var specialCharactersChars = "!@#$%^&*()";
var length = prompt('How long do you want the password?');

if (lowercase == true) {
    charset += lowercaseChars;
    console.log(true);
}
if (uppercase == true) {
    charset += uppercaseChars;
    console.log(true);
  }
if (numbers == true) {
    charset += numbersChars;
    console.log(true);
    }
if (specialCharacters == true) {
    charset += specialCharactersChars;
    console.log(true);
    }
while (length < 7 || length > 128) {
    var length = prompt('Invalid password length, please choose another');
}




function generatePassword(characterPos, characterLength) {
      retVal = "";
  for (var i = 0, n = characterPos.length; i < characterLength; ++i) {
      retVal += characterPos.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword(charset, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


