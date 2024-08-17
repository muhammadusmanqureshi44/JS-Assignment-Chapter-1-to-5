// Chapter #1 ALERTS
// 1. Write a script to greet your website visitor using JS alert box.
function greetVisitor() {
    alert("Welcome to our website!");
}
window.onload = greetVisitor;

// 2. Write a script to display following message on your web page:
document.getElementById("message").innerText = "Hello, welcome to our website!";

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert ('Welcome to JS Land...\nHappy Coding!');

// 4. Write a script to display following messages in sequence:
alert("Wellocome to JS land.");
alert("Happy Coding!\n ▢ Prevent this page from creating a aditional dialogs.");

// 5. Generate the following message through browser’s developer console:
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");

// 6. Make use of alerts in your new/existing HTML & CSS project.

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
// Ans Go Html

// Chapter #2 VARIABLES
// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName;
myName = "Usman Qureshi";
alert(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "John Doe";
var studentAge = "15 years old";
var studentEmail = "example@example.com";
alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student Email: " + studentEmail);

// 5. Write a script to display the following alert using one JS variable:
var PIZZA = "PIZZA";
alert(`${PIZZA}\n${PIZZA.slice(0 , -1)}\n${PIZZA.slice(0 , -2)}\n${PIZZA.slice(0 , -3)}\n${PIZZA.slice(0 , -4)}`)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "uk0658826@gmail.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS
document.getElementById("content").innerText = "Yah! I can write HTML content through JavaScript";

// 9. Store following string in a variable and show in alert and browser through JS
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
document.getElementById("display").textContent = message;

// Chapter #3 VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "15 years old";
alert("I am " + age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You
// have visited this site N times”.
        function trackAndShowVisits() {
            var visitCount = localStorage.getItem('visitCount');
            if (visitCount === null) {
                visitCount = 1;
            } else {
                visitCount = parseInt(visitCount) + 1;
            }
            localStorage.setItem('visitCount', visitCount);
            alert(`You have visited this site ${visitCount} times`);
        }
        trackAndShowVisits();

// 3. Declare a variable called birthYear & assign to it your birth year. 
//    Show the following message in your browser:
var birthYear = ("1990");
document.write("My birth year is " + birthYear + "<br>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = ("John Doe");
var productTitle = ("T-shirt(s)");
var quantity = ("5");
document.write(visitorName + " ordered " + quantity + "\n" + productTitle + " on XYZ Clothing store" + "<br>");

// Chapter #4 VARIABLE NAMES: Legal & Illegal
// 1. Declare 3 variables in one statement.
var x = 20, y = 'text', z = null;

// 2. Declare 5 legal & 5 illegal variable names.
// LEGAL VARIABLES
var userName = "username";    // Legal: Letter se start hota hai
var user_name = "username";   // Legal: Underscore include karta hai
var username123 = "username"; // Legal: Letter se start hota hai aur number include karta hai
var $username = "username";   // Legal: Dollar sign se start hota hai
var _username = "username";   // Legal: Underscore se start hota hai
// ILLEGAL VARIABLES
// let 1stUser = "username"; // Illegal: Number se start hota hai
// let user-name = "username"; // Illegal: Hyphen (-) contain karta hai
// let user name = "username";   // Illegal: Space contain karta hai
// let for = "username";       // Illegal: "for" reserved keyword hai
// let %#!username = "username";       // Illegal: special characters hoty hein

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("Rules for naming JS variables" + "<br>");
document.write("Variable names can only contain letters, numbers, _ and $. For example $my_1stVariable" + "<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name" + "<br>");
document.write("Variable names are case sensitive" + "<br>");
document.write("Variable names should not be JS keywords"+ "<br>");

// Chapter #5 MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num = 3 + 5;
document.write("Sum of 3 and 5 is " + num + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var num = 3 - 5;
document.write("Subtraction of 3 and 5 is " + num + "<br>");

var num = 3 * 5;
document.write("Multiplication of 3 and 5 is " + num + "<br>");

var num = 3 / 5;
document.write("Division of 3 and 5 is " + num + "<br>");

var num = 3 % 5;
document.write("Modulus of 3 and 5 is " + num + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var num;
document.write("value after variable declaretion is undefined" + num + "<br>");

var num = 5;
document.write("initial value: " + num + "<br>");

var numIn = num++
document.write("value after increament is: " + num + "<br>");

var numAdd = num + numIn
document.write("value after addition is: " + numAdd + "<br>");

var numDec = numAdd--;
document.write("value after decerement is: " + numDec + "<br>");

var numResult = numDec/3;
document.write("the reminder is: " + numResult + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. Example output:
var perTicket = 600
var totalTicket5 = 600 * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalTicket5 + "PKR" + "<br>");

// 5. Write a script to display multiplication table of any number in your browser. E.g
document.write("Table of 4" + "<br>");
var number = 4;
document.write(number + " x 1 = " + number * 1 + "<br>");
document.write(number + " x 2 = " + number * 2 + "<br>");
document.write(number + " x 3 = " + number * 3 + "<br>");
document.write(number + " x 4 = " + number * 4 + "<br>");
document.write(number + " x 5 = " + number * 5 + "<br>");
document.write(number + " x 6 = " + number * 6 + "<br>");
document.write(number + " x 7 = " + number * 7 + "<br>");
document.write(number + " x 8 = " + number * 8 + "<br>");
document.write(number + " x 9 = " + number * 9 + "<br>");
document.write(number + " x 10 = " + number * 10 + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 30;

var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheitTemp = 86;

var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

// 7. Write a program to implement checkout process of a shopping cart system 
// for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
// a. Price of item 1
var priceItem1 = 650;

// b. Price of item 2
var priceItem2 = 100;

// c. Ordered quantity of item 1
var quantityItem1 = 3;

// d. Ordered quantity of item 2
var quantityItem2 = 7;

// e. Shipping charges
var shippingCharges = 100;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


console.log("Receipt:");
console.log("Price of item 1: $" + priceItem1);
console.log("Quantity of item 1: " + quantityItem1);
console.log("Price of item 2: $" + priceItem2);
console.log("Quantity of item 2: " + quantityItem2);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost: $" + totalCost); 

// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser
document.write("Mark Sheet" + "<br>");

var totalMarks = 980;
document.write("Total marks: " + totalMarks + "<br>");
var marksobtained = 804;
document.write("Marks obtained: " + marksobtained + "<br>");
var percentage = (marksobtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%" + "<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var usDollars = 10;
var saudiRiyals = 25;
var usdToPkr = 104.80;
var riyalToPkr = 28;

var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);

console.log("Total in Pakistani Rupees: " + totalPkr);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var initialNumber = 20;

var result = ((initialNumber + 5) * 10) / 2;

console.log("Initial number: " + initialNumber);
console.log("Result after arithmetic operations: " + result);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
var currentYear = 2016;
document.write("Current Year: " + currentYear + "<br>");
var birthYear = 1992;
document.write("Birth Year: " + birthYear + "<br>");
var ageThisYear = currentYear - birthYear ;
document.write("Your age is " + ageThisYear + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 7; // You can change this value to any other radius
var pi = 3.142; 
var circumference = 2 * pi * radius;
console.log("The circumference is " + circumference);

// Calculate the area based on the radius
var area = pi * radius * radius;
console.log("The area is " + area); 

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
var favoriteSnack = "chips";
var currentAge = 25; // You can change this value to your current age
var maximumAge = 80; // You can change this value to your expected maximum age
var dailyAmount = 2; // You can change this value to the estimated amount of snack consumed per day
var yearsLeft = maximumAge - currentAge;
var totalAmount = yearsLeft * 365 * dailyAmount; // Assuming 365 days in a year
console.log("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "."); 









