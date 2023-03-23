// Assignment code here
var numbers = ["0", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special =  [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var errorMessages = [];
var generateBtn = document.querySelector("#generate");


function generatePassword(){

  var length =  Math.round(prompt("Please pick a length between 8-128 characters"))
  var characters =  confirm("would you like to include lowercase, uppercase, numeric? ")
  var specialChars =  confirm("Would you like special characters?")

  errorMessages = []
  if (!length || length < 8 || length > 128){
    errorMessages.push("Please enter a number between 8-128")
  }

  if(!characters && !specialChars){
    errorMessages.push("Please pick one character type")
  }

  if (errorMessages.length > 0){
    showError(errorMessages)
    return
  }

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);