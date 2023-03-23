// Assignment code here
var numbers = ["0", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special =  [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var errorMessages = [];
var connectCharacter = [];
var generateBtn = document.querySelector("#generate");
var show = document.querySelector('.errorlist')


function generatePassword(){

  var length =  Math.round(prompt("Please pick a length between 8-128 characters"))
  var characters =  confirm("would you like to include lowercase, uppercase, numeric? ")
  var specialChars =  confirm("Would you like special characters?")

  clearError();
  var password = [];

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

  if(characters){
    connectCharacter.push(...lowercase, ...uppercase, ...numbers)
  }

  if(specialChars){
    connectCharacter.push(...special)
  }

  for(var i = 0; i < length; i++){
    password.push(connectCharacter[Math.floor(Math.random() * connectCharacter.length)])
  }

  return password.join('');


}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

function showError(errorMessages){
    
  for(var i = 0; i < errorMessages.length; ++i){
    var li = document.createElement("li")
    show.appendChild(li).innerText = errorMessages[i];
  }
}

function clearError(){
  while(show.children[0] != null){
    show.removeChild(show.children[0]);
  }
}