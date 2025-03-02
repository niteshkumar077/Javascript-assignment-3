
// USER INPUT & CONDITIONAL STATEMENT

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

let city = prompt("Enter your city")
if (city == "Karachi") {
    console.log("Welcome to city of lights")
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender")
if (gender == "male") {
console.log("Good Morning Sir")   }
else if (gender == "female") {
console.log("Good Morning Ma’am") }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
let trafficLight = prompt("Enter the color of traffic light")
if ( trafficLight == "red" || trafficLight == "Red" ) {
    console.log(" Must Stop") }
else if (trafficLight == "yellow" || trafficLight == "Yellow" ) {
    console.log("Ready to move")
}
else if (trafficLight == "green" || trafficLight == "Green" ) {
    console.log("Move now")
}
else {
    console.log("Invalid color")
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

let fuel = prompt ("Enter the remaining fuel in your car (in litres)")
if (fuel <= 0.25 ){
    console.log("Please refill the fuel in your car") }
    else {
        console.log("You have enough fuel in your car") 
    }

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); }
//    RECORD =      given condition for variable a is true      

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); }
//    RECORD =   undefined  

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");}
// if (c === 13){
// alert("condition 2 is true");}
// if (++c < 14){
// alert("condition 3 is true");}
// if(c === 14){
// alert("condition 4 is true");}
// RECORD = condition 2 & condition 4 is true. 


// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}
//  RECORD = The cost equals        
// e. if (true){
// alert("True");}
// if (false){
// alert("False");}
// RECORD = True   

// f. if("car" < "cat"){
// alert("car is smaller than cat"); }
// RECORD = car is smaller than cat



// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:                    

document.write("<h1>Marks Sheet</h1>")

let maths = Number(prompt("Write obtained number of MATHS:"))
let english = Number(prompt("Write obtained number of ENGLISH:"))
let urdu = Number(prompt("Write obtained number of URDU:"))
let totalMarksof3subj = 300
document.write(`Total Marks : ${totalMarksof3subj}<br>`)
let obtainedmarksof3 = maths + english + urdu;
document.write(`Marks Obtained : ${obtainedmarksof3}<br>`)
let percentageof3 = obtainedmarksof3 / totalMarksof3subj * 100;
document.write(`Percentage : ${percentageof3}%<br>`)

if (percentageof3 >= 80) {
    document.write(`Grade : A-one <br>`)
    document.write(`Remarks : Excellent <br>`)

}
else if (percentageof3 >= 70) {
    document.write(`Grade : A <br>`)
    document.write(`Remarks : Good <br>`)
}
else if (percentageof3 >= 60) {
    document.write(`Grade : B <br>`)
    document.write(`Remarks : You need to improve <br>`)
}
else {
    document.write(`Grade : Fail <br>`)
    document.write(`Remarks : Sorry <br>`)
}


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

let secretNumber = 8
let userguess = Number(prompt("Guess the secret number : "))
if (userguess === secretNumber) {
    document.write(`<h2>Bingo! Correct answer</h2>`)
}
else if (userguess === secretNumber - 1 || userguess === secretNumber + 1) {
    document.write(`<h2>Close enough to the correct answer</h2>`)
}
else {
    document.write(`<h2>you're answer is wrong</h2>`)
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

let divisible3 = Number(prompt(`Write any number to check whether it's divisible by 3 or not : `))
let calculation3 = divisible3 % 3
if (calculation3 == 0) {
    document.write(`This number ${divisible3} is divisible by 3 <br> `)
}
else {
    document.write(`This number ${divisible3} is not divisible by 3 <br> `)
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

let evenodd = Number(prompt(`Write any Even number or an odd number`))
let findEvenodd = evenodd % 2
if (findEvenodd == 0) {
    document.write(`This number ${evenodd} is Even.<br>`)
}
else {
    document.write(`This number ${evenodd} is Odd.<br>`)
}


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


let temperatureinput = Number(prompt("Write temperature of today's weather: "))
if (temperatureinput >= 40) {
    alert('It is too hot outside.')
}
else if (temperatureinput >= 30) {
    alert('The Weather today is Normal.')
}
else if (temperatureinput >= 20) {
    alert('Today’s Weather is cool.')
}
else if (temperatureinput >= 10) {
    alert('OMG! Today’s weather is so Cool.')
}
else {
    alert('Today weather is Cold.')
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNumber = Number(prompt('Write First Number: '))
let secondNumber = Number(prompt('Write Second Number: '))
let Operation = prompt('Write Any operation sign to perform calculation (+, -, *, /, %): ')

if (Operation == "+") {
    alert(firstNumber + secondNumber)
}
else if (Operation == "-") {
    alert(firstNumber - secondNumber)
}
else if (Operation == "*") {
    alert(firstNumber * secondNumber)
}
else if (Operation == "/") {
    alert(firstNumber / secondNumber)
}
else if (Operation == "%") {
    alert(firstNumber % secondNumber)
}
else {
    alert("Wrong Operation sign !")
}

// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

                                            // ASCII = American Standard Code for Information Interchange         

let character = prompt("Write any Number or String character: ")
let ascii = character.charCodeAt(0);

if (character.length == 1){
if (ascii >= 48 && ascii <= 57 ) {
    alert("it's a number")
}
else if (ascii >= 65 && ascii <= 90){
    alert("it's an uppercase letter")
}
else if (ascii >= 97 && ascii <= 122){
    alert("it's a lowercase letter")
}
else {
    alert('you put wrong character type! Or you have written nothing')
}
}
 else{
    alert("you have written more than 1 digit")
 }


//  2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.


let integers1 = Number(prompt("Write first integer: "))
let integers2 = Number(prompt("Write second integer: "))

if ( isNaN(integers1) || isNaN(integers2) ) {
    alert("You have not written any number!")
}
else {
    if (integers1 > integers2 ){
        alert(`Your integer ${integers1} is larger than ${integers2} `)
    }
    else if (integers1 < integers2 ){
        alert(`Your integer ${integers2} is larger than ${integers1} `)
    }
    else {
        alert(`Your integer ${integers1} is equals to ${integers2}`)
    }
    
    
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let input = prompt("Write any number: ")

if (input.trim() === "" || isNaN(input)) {
    alert("Invalid input! Please enter a valid number.")
} else {
    let inputNumber = Number(input)
    
    if (inputNumber > 0) {
        alert(`The given ${inputNumber} is positive.`)
    } else if (inputNumber < 0) {
        alert(`The given ${inputNumber} is negative.`)
    } else {
        alert(`The given ${inputNumber} is zero.`)
    }
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

let characterString = prompt("Write one string: ") 
if (characterString.trim() === "" || !isNaN(characterString) ){
    alert(`Invalid Input`)
}
else if (characterString.length > 1){
alert(`Only 1 letter is allowed`)
}
else{
    let vowel = ["a","e","i","o","u","A","E","I","O","u"]
    if (vowel.includes(characterString) )
        alert(`your letter "${characterString}" is vowel.`)
    else {
        alert(`your letter "${characterString}" is not a vowel.`)
    }

}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

let password1 = prompt("Set your password:")
let password2 = prompt("Enter your correct password: ")

if (password1.trim() === "" || password2.trim() === "" ){
    alert(`Invalid, please enter your password.`)
}
else{
    if (password1 == password2){
        alert(`your both password are matched.`)
    }
    else{
        alert(`you have typed incorrect password.`)
    }
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// HERE IS THE FIXED VERSION OF ABOVE CODE:

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.

let clocktime = prompt("Input current time in 24 hours format:","19")
let forStringTime = Number(clocktime) 
if (clocktime.trim() === "" || isNaN(forStringTime) || forStringTime <= 0 || forStringTime > 24   ){
    alert(`Invalid Input, Please write correct time.`)
}
else{

let newtime;
    
if (forStringTime < 12 ){
    alert(`your current time is ${forStringTime}.am `)
}

else if (forStringTime == 24 ){
    alert(`your current time is 12.am`)
}
else if (forStringTime == 12 ){
    alert(`your current time is ${forStringTime}.pm `)
}
else if (forStringTime > 12 ){
    newtime = forStringTime-12
    alert(`your current time is ${newtime}.pm`)
}

    
}

