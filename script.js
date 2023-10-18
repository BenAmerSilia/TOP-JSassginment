function add7(){
    let userInput = prompt("Add a number:");
    let number = Number(userInput);
    number +=7;
    alert ( `${number}`);
}
document.getElementById("add7Button").addEventListener("click", add7);

function multiply(){
    let userInput1 = prompt("Add your first number:");
    let userInput2 = prompt("Add your second number:")
    let number1 = Number(userInput1);
    let number2 = Number(userInput2);
    alert ( `${number1 * number2}`);

}
document.getElementById("multiplyButton").addEventListener("click", multiply);

function capitalize(){
    let userString = prompt("Type something:");
    let firstLetter = userString[0].toUpperCase();
    let restOfString = userString.slice(1).toLocaleLowerCase();
    alert(`${firstLetter + restOfString}`);
    
}
document.getElementById("capitalizeButton").addEventListener("click", capitalize);

function lastLetter(){
    let userString1 = prompt("Enter your string:");
    let lastLetter = userString1.slice(-1);
    alert(`${lastLetter}`);
}
document.getElementById("lastLetterButton").addEventListener("click", lastLetter);

