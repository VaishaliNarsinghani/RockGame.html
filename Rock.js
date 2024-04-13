
/*JAVA.Interview Questions-
1). What is the DOM? --> The DOM stands for Document Object Model. Thats use to change and add Structure , content and style
2). Explain the differences between `null` and `undefined`.--> variable declared but not assigned wheares null is an assigment value.
3). How does the "strict mode" in JavaScript work? -->  changes previously accepted "bad syntax" into real errors.
4). What is the purpose of the `async` keyword? --> async is  a function declaration and await is a keyword
5). Differentiate between synchronous and asynchronous code. --> synchronous code run in a sequence, asynchronous code run upcoming instructions
6). What is a callback function?
7). Explain the concept of "hoisting." --> When we call or print argument before initialize it. 
8. How does the "debouncing" of a function work?
9. What is the purpose of the `bind` method?
10. Describe the differences between cookies, sessionStorage, and localStorage.

11. How does CORS (Cross-Origin Resource Sharing) work?
12). What is the purpose of the `this` keyword in JavaScript?
13). Explain the differences between `==` and `===`. --> == compare value and === compare the type of value
14. How does the event delegation pattern work?
15. What is a closure, and how is it used?
16. How can you optimize website performance?
17). What is the difference between arrow functions and regular functions?
18). Describe the principles of responsive design.
19. Explain the concept of currying in JavaScript.
20. What is the role of the `use strict` directive?

21. How do you handle errors in JavaScript?
22). Explain the significance of the Document Object Model (DOM).
23). What is the purpose of the `map` function in JavaScript?
24. Differentiate between shallow and deep copying objects.
25. How does event bubbling work in the DOM?
26. Explain the concept of two-way data binding.
27. What is the role of a closure in JavaScript?
28. How can you optimize the loading time of a website?
29. What is the significance of the `async` and `await` keywords?
30. Describe the differences between local storage and session storage.

31). How does the "typeof" operator work in JavaScript?
32. Explain the principles of the Single Responsibility Principle (SRP) in software design.
33). What is the purpose of the `finally` block in a try-catch-finally statement?
34. How can you handle cross-browser compatibility issues?
35). What is the role of the `replace` method in strings?
36. How does the prototype chain work in JavaScript?
37. Describe the differences between REST and GraphQL.
38). What is the purpose of the `reduce` function in JavaScript?
39. Explain the concept of memoization.
40). How does the "box model" work in CSS?

41. What are web components, and how do they work?
42. Differentiate between call, apply, and bind methods.
43. How can you optimize images for the web?
44. Explain the purpose of the `defer` attribute in script tags.
45). What is the role of the `let` and `const` keywords in block scope?
46). Describe the differences between CSS Grid and Flexbox.
47). How do you handle asynchronous code in JavaScript?
48. Explain the purpose of the `Intersection Observer` API.
49. What are the benefits of using a CSS preprocessor like Sass?
50. How can you improve website accessibility?
51.Are Java and JavaScript not the same? -->Java is a statically-typed language with rigid syntax, while Javascript is a dynamically-typed language with a more flexible syntax
*/
// console.log("Welcome to Apna College");
// console.log("Vaishali Narsinghani");
// console.log("I love JavaScript");
// FullName = "Vaishali Narsinghani";
// console.log(FullName);
// price = 99.99;
// x = null;
// y = undefined;
// console.log(x , y)
// console.log(price)
// const student = {
//     fullName: "Rahul",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true
// }


//  1.  const product = {
//     productName : "Parker Jotter Standard CT Ball Pen, (Black)",
//     rating : 4.0,
//     price : 270,
//     isDeal : true,
//     offer: 5
// }
// console.log(product)


//  2.    const profile = {
//     userName: "shradhakhapra",
//     isFollow:true,
//     posts:195,
//     followers:569,
//     following:4,
//     email:"@shradhakapra",
//     bio:"Entrepreneur",
//     information:"Apna College | Ex-Microsoft , DRDO",
//     summary:"To educate someone is the highest privilege❤️"
// }

/*let a = 10;
let b = 2;
console.log(a + b);
console.log(a + " + " + b + " =" ,a + b);
console.log(a + " - " + b + " =" ,a - b);
console.log(a + " / " + b + " =" ,a / b);
console.log(a + " * " + b + " =" ,a * b);
console.log(a + " % " + b + " =" ,a % b);
console.log(a + " ** " + b + " =" ,a** b);
console.log(a++)
console.log(a--)
console.log(++a)
console.log(--a)*/

// IF STATEMENT
/*let age = 15;;
if (age >= 18){
    console.log("You can drive")
}
else{
    console.log("You can't drive")
}*/

// IF-ELSE STATEMENT
/*let num = 8;
if(num % 2 == 0){
    console.log(num + " is " + "Even")
}
else{
    console.log(num + " is " + "Odd")
}*/

// ELSE-IF STATEMENT
/*let name = "Rahul"
if(name == "Rohan"){
    console.log("Hey Rohan! You are Allowes in Party")
}
else if(name == "Rahul"){
    console.log("Hey Rahul! You are strictly not allowed")
}
else{
    console.log("Wellcome to Party")
}*/

// TERNARY OPERATOR
/*let a = 29;
result = a>=18?"adult":"Not Adult";
console.log(result)*/

// alert("What are you doing")
// 1.
// let num = prompt("Enter a number");
// if( num % 5 == 0){
//     console.log("Multiple of 5")
// }
// else{
//     console.log("NOt multiple of 5")
// }

/*let marks = prompt("Enter your marks: ")
if(marks>=80 && marks<=100){
    console.log("A Grade")
}
else if(marks>=70 && marks<=79){
    console.log("B Grade")
}
else if(marks>=60 && marks<=69){
    console.log("C Grade")
}
else if(marks>=50 && marks<=59){
    console.log("D Grade")
}
else if(marks>=0 && marks<=49){
    console.log("F Grade")
}
else{
    console.log("Invalid Marks")
}
*/

/*let sum = 0;
let n = prompt("Enter a number")
for(let i = 1; i<=n ; i++){
    sum = sum + i;
}
console.log("The sum of "+ n + " number:", sum )*/

/*let i = 1;
while(i<=10){
console.log(i)
i++
}*/

/*let i = 1;
do{
    console.log(i)
    i++
}
while(i<=20)*/

/*let nam = "VaishaliNarsinghani"
let size = 0;
for(let i of nam){
    console.log("i =", i)
    size++
}
console.log(size)*/

/*let student = {
    name: "RajuRastogi",
    age:23,
    cgpa:7.8,
    isPass:true
}
for (const key in student) {
    console.log(key)
    console.log(student[key])
}*/

/*let gameNumber = 56;
let pr = prompt("Guess a number")
console.log(pr)
while(pr != gameNumber ){
    if(pr === gameNumber){
        alert("Congratulations! You are right")
    }
    else if(pr > gameNumber){
        alert("Your number is greater than Game Number")
        pr = prompt("you guess wrong . Guess again")
    }
    else if(pr < gameNumber){
        alert("Your number is Less than Game Number")
        pr = prompt("you guess wrong . Guess again")

    }
    else{
        alert("Invalid Operations")
    }
}
alert("Congratulations!❤️❤️ , You entered the right number")*/

//String Methods
/*let str = "Vaishali"
console.log(str)
console.log(str.length)
console.log(str[2])
let sentence = `This is a template literals`
let obj = {
    item:"Pen",
    price: 20,
}
let output = `The cost of ${obj.item} is ${obj.price}`
console.log(output)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.slice(2,6))
let arr = "Narsinghani"
console.log(str.concat(arr))
console.log(str.replace("i","o"))
console.log(str.replaceAll("i","o"))
console.log(str.charAt(3))*/

// 1.
/*let prom = prompt("Enter your full name")
let userName = "@" + prom.toLowerCase()+ prom.length;
console.log(userName)*/

//Arrays
/*let info = ["Rahul", "Shradha","Harry", "Aman", "Vaishali", "Vishal", "Shubham", "Rohit", "Rohan"]
console.log(info)

for(let i = 0; i<info.length ; i++){
    console.log(info[i])
}

for (let element of info) {
    console.log(element)
}*/

//1.
/*let arr = [85,97,44,37,76,60]
sum = 0;
for(let i of arr){
    sum = sum + i;
}
let avg = sum / arr.length
console.log(avg)*/

// 2.
/*let item = [250, 645, 300, 900, 50];
let index = 0;
for(let val of item){
    let offer = val/10;
    item[index] = item[index] - offer
    console.log(`The value after offer = ${item[index]}`)
    index++;
}*/

//Array Methods
/*let foodItems = ["Mango", "Apple", "Banana", "Litchi", "Watermelon"]
foodItems.push("Grapes")
console.log(foodItems)
foodItems.pop()
console.log(foodItems)
console.log(foodItems.toString())
junk = ["Chips", "Pizza", "Burger"]
console.log(foodItems.concat(junk))
foodItems.unshift("Paratha")
console.log(foodItems)
foodItems.shift("Brusheta")
console.log(foodItems)*/

// 1.
/*let company = ["Bloomberg" , "Microsoft", "Uber", "Google", "IBM", "Netflix"]
company.shift()
console.log(company)
company.splice(1, 1,"Ola")
console.log(company)
company.push("Amazon")
console.log(company)*/

//Functions In JavaSript
/*function myFN(){
    console.log("Welcome to apna college")
    console.log("We are learning JS")
}
myFN()
function FunctionNew(msg,n){
    console.log(msg + n)
}
FunctionNew(56, 14)*/
// let x = 10 , y;
// function add(a, b){
// console.log(`the sum of ${a} and ${b} is = ${a + b}`)
// }
// add(2323 , 4556)
// console.log(x)


//Arrow Functions
/*const  sum = (a, b) =>{
    console.log(a*b)
};
sum(2,3)*/

//1.
/*let countVowels = (str)=> {
    let cnt = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            cnt++;
        }
    }
    console.log(cnt);
}
countVowels("VaishaliNarsinghani")*/

//forEach Loop
/*let arr = [1,2,3,4,5]

arr.forEach(function printVal(val){
    console.log(val)
});

arr.forEach((val)=>{
    console.log(val)
})*/

/*let arr = [1,2,3,4,5]
arr.forEach((num)=>{
    console.log(num**2)
})*/

/*let arr = [12,45,67,25,62]
arr.map((val)=>{
    console.log(val)
})*/

/*let arr = [12,45,67,23,932,54]
let newArr = arr.filter((val)=>{
    return val % 2 ===0
})
console.log(newArr)*/

/*arr = [1, 2, 3, 4]
let output = arr.reduce((res, curr) => {
    return res + curr
})
console.log(output)*/


/*arr = [1, 2, 3, 4]
let output = arr.reduce((res, curr) => {
    return res > curr ? pre : curr
})
console.log(output)*/

// 1.
/*let arr = [ 67,92,98,91,34,22,56]
let output = arr.filter((val)=>{
    return val > 90
})
console.log(output)*/

//2.
/*let n = prompt("Enter a number");
let arr = [];
for(let i = 1; i<=n ; i++){
    arr[i-1] = i;
}
console.log(arr)
let sum = arr.reduce((res , cur)=>{
    return res + cur
})
console.log(sum)
let factorial = arr.reduce((res , curr)=>{
    return res * curr
})
console.log(factorial)*/

// DOM --> Document object model
/*let h2 = document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText = h2.innerText + " from Apna College"*/

/*let divs = document.querySelectorAll(".box")
divs[0].innerText = 'New unique value 1'
divs[1].innerText = "New unique value 2"
divs[2].innerText = "New unique value 3"

let idx = 1;
for(div of divs){
    div.innerText = `New unique value ${idx}`
    idx++
}*/


/*let div = document.querySelector("div")
console.log(div)
let cls = div.getAttribute("class")
console.log(cls)
let set  =  div.setAttribute("class", "NewClass")
console.log(set)*/

// let div = document.querySelector("div")
// div.style.backgroundColor = "blue"
// div.style.color = "beige"
// div.style.fontSize = "14px"
// div.innerText = "Hello This is JavaScript"

/*let btn = document.createElement("button")
console.dir(btn)
btn.innerText = "Click me"
console.dir(btn)
let div = document.querySelector("div")
div.append(btn)
div.prepend(btn)
div.before(btn)
div.after(btn)*/

/*let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>I am a New Heading</i>"
document.querySelector("body").prepend(newHeading)

let para = document.querySelector("p")
para.remove()*/

// 1.
/*let btn = document.createElement("button")
btn.innerText = "click me"
btn.style.color = "white"
btn.style.backgroundColor = "red"
let btn1 = document.querySelector("body")
btn1.prepend(btn)*/

/*let para = document.querySelector("p")
console.dir(para)
para.classList.add("newClass")*/

/*let btn1 = document.querySelector("#btn1")
btn1.onclick = (evt) =>{
    console.log(evt)
    console.log(evt.target)
    console.log(evt.type)
    console.log(evt.clientX , evt.clientY)
}*/
// let div = document.querySelector(".box")
// div.onmouseover = () =>{
//     console.log("lets hover")
// }
/*let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () =>{
    console.log("button was clicked")
})
btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler 2")
})
btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler 3")
})*/

//1. to change dark mode and light mode in WebPage
/*let modeBtn = document.querySelector("#mode")
let currMode = 'light';
modeBtn.addEventListener("click", () =>{
    if(currMode === 'light'){
        currMode = 'dark'
        document.querySelector("body").style.backgroundColor = "black"
    }
    else{
        currMode = 'light'
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(currMode)
})
*/

//ROCK PAPER SCISSORS GAME
alert("Are you Ready to play this infinite Rock Paper Scissor Game?")
let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice")
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")
const drawGame = () =>{
    console.log = "Game was Draw!"
    msg.innerText = "Game was Draw!. Play Again"
    msg.style.backgroundColor = "#081b31"
    msg.style.color = "white"
  
    msg.style.fontWeight = "3rem"

}
const showWinner = (userWin, userChoices , compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! ${userChoices} beats ${compChoice}`
        msg.style.backgroundColor = "darkgreen"
        msg.style.fontWeight = "2rem"

        
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Loose! ${compChoice} beats ${userChoices}`
        msg.style.backgroundColor = "darkred"
        msg.style.fontWeight = "2rem"
    }
}
const playGame = (userChoices) => {
    //Generateo computer choice --> modular
    const compChoice = genCompChoice()
    if(userChoices === compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoices === "rock"){
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoices === "paper"){
            userWin = compChoice === "scissor" ? false : true
        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoices , compChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoices = choice.getAttribute("id")
        playGame(userChoices)
    })
})






