let string = "";

function getoutput() {
    document.getElementById("displayoutput").value = string;
}

//add string function
function addstring() {
    let input = document.getElementById("getinput").value;
    string = input;
    document.getElementById("getinput").value = "";
    getoutput();
    console.log(string);
}
//finding string length 
function stringlength() {
    alert(`The length of the string: ${string.length}`);
}
//change into UPPERCASE string
function uppercase() {
    string = string.toUpperCase();
    getoutput();
    console.log(string);
}
//change into lowercase string
function lowercase() {
    string = string.toLowerCase();
    getoutput();
    console.log(string);
}
// repeating the string value
function repeatstring() {
    let countvalue = parseInt(prompt("Enter the number to repeat the string"));
    string = string.repeat(countvalue);
    getoutput();
    console.log(string);
}
// finding the match in the given string
function matchstring() {
    let matchvalue = prompt("Enter the value to match");
    let result = string.match(matchvalue);
    alert(`Match result: ${result}`);
    console.log(result);
}
// searching the given value in the string
function searchstring() {
    let searchvalue = prompt("Enter the value to search");
    let index = string.search(searchvalue);
    alert(`Search index: ${index}`);
    console.log(index);
}
// adding new string after the given string
function concatstring() {
    let newstring = prompt("Enter the new string to concatenate");
    string = string.concat(newstring);
    getoutput();
    console.log(string);
}
// splitting the given string value to  array format
function splitstring() {
    let value = prompt("Enter a delimiter (, space, or |) to split the string into an array");
    let result = string.split(value);
    alert(`Split result: ${result}`);
    console.log(result);
}
// removing the whitespace given in th string
function trimstring() {
    string = string.trim();
    getoutput();
    console.log(string);
}
//separating the string value
function slicestring() {
    let value1 = parseInt(prompt("Enter the start position of the string"));
    let value2 = parseInt(prompt("Enter the end position (optional, press Cancel to skip)")) || string.length;
    string = string.slice(value1, value2);
    getoutput();
    console.log(string);
}
//ensuring the starting value of given string is correct
function startswithstring() {
    let value = prompt("Enter the starting value to check");
    let result = string.startsWith(value);
    alert(`Does the string start with "${value}"? ${result}`);
    console.log(result);
}
//ensuring the ending value of given string is correct
function endswithstring() { 
    let value = prompt("Enter the ending value to check");
    let result = string.endsWith(value);
    alert(`Does the string end with "${value}"? ${result}`);
    console.log(result);
}
