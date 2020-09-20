console.log("Hello");
//alert('Hello this is Sammy');

// variables

var b = "drinks";
console.log(b);

var someNumber = 56;
console.log(someNumber);

document.getElementById("someText").innerHTML = "Hi this is sammy";

document.getElementById("SomeH1").innerHTML = "Hello this is cool JS";

//var age = prompt('How old you are:');
//document.getElementById('someAge').innerHTML = age;

var num1 = 5.5;
console.log(10 * num1);

// Functions
/*
function fun1 (){
    alert('This is function!!');
}

fun1(); */

// Let make a function that takes in a name and return.

function greetings(yourName) {
  var result = "Hello " + yourName;
  console.log(result);
}

var name = prompt("Can I know your name please?");
greetings(name);

// How arguments work in a function
// How to add 2 numbers

/*function sum1 (num1,num2) {
    var result = num1 + num2;
    console.log(result);
}

//sum1(23,43);

sum1('Hi',' dear');*/

// while loop

/*var num2 = 0;

while (num2 < 100) {
   num2+=1;
   console.log(num2);
}*/

// For loop

for (let num = 0; num < 4; num++) {
  console.log(num);
}

// Data types

let name1 = "Jenny";
console.log(name1);
let age1 = 34;
let fullName = { first: "Jane", last: "david" }; //object
let truth = false; //boolean
let groceries = ["oil", "cookies", "cake"]; //array
let random; //undefined
let nothing = null; // value null

//String in javascript (common methods)

let fruit = "pomegranate";
let fruit1 = "Grapes\nApple\nOrange\nGuava"; //new line
console.log(fruit1);
console.log(fruit.length); //length of the string
console.log(fruit.indexOf("n")); //tell position of the string
console.log(fruit.slice(1, 3));
console.log(fruit.replace("egr", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5));
console.log(fruit[6]);
console.log(fruit.split("")); //split by character
console.log(fruit.split(",")); //split by comma

//Array
let fruits = ["apple", "banana", " orange", "pineapples"];

//Another way to ceate array
fruits = new Array("apple", "banana", " orange", "pineapples");

//alert(fruits[3]);

console.log(fruits[2]); // access value of 2nd index

fruits[1] = "Grapes";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

document.getElementById("testSpan").innerHTML = "Nishi MG";

//array common methods

console.log("to string", fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.push("blueberries"), fruits); //appends

fruits[fruits.length] = "new fruit"; //same as push

console.log(fruits);

fruits.shift(); // remove first element from an array
console.log(fruits);

fruits.unshift("malta"); //add first element to an array
console.log(fruits);

let vegetables = ["Tomato", "cabbage", "cauliflower"];
let groc = fruits.concat(vegetables); //combines two arrays
console.log(groc);

console.log(groc.slice(1,3));
console.log(groc);
console.log(groc.sort());

 console.log(groc.reverse());

 //To sort number in js

 let someNumbers = [43,5,2,3,67,23,89,12,15,100];
 console.log(someNumbers.sort(function(a,b) { return a-b})); //Ascending order
 console.log(someNumbers.sort(function(a,b) { return b-a})); //Descending order

 let emptyArray = new Array();
 for (let j=0; j<10; j++){
   emptyArray.push(j);
   //console.log(emptyArray.push(j));
 }

 console.log(emptyArray);