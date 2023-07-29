// problem 1
var receivedMoney = 1000;
var costOranges = 400;
var costApples = 300;
var moneyReturn = receivedMoney -(costApples+costOranges);

console.log(moneyReturn);

// practice task 2 - write program to calculate average marks of subjects, printing the results in two decimals

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var averageMarks =  (totalMarks/5) .toFixed(2); 
console.log(averageMarks);

// practice -3 - strings in one line
var first = "I going to be";
var second = "a really really awesome web developer";

var line = first + " " + second;

console.log(line)

// remainder 

var numberFirst = 119;
var numberSecond = 5;
var remainder = numberFirst%numberSecond;
console.log(remainder)