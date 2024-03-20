// Question # 1 (• Write a loop to print numbers from 1 to 10.)
console.log("Numbers 1-10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question # 2 (• Write a loop to print even numbers from 1 to 20.)
console.log("Even Numbers from 1 - 20");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Question # 3 (• Write a loop to print odd numbers from 1 to 15.)
console.log("Odd Numbers from 1 - 15");
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

/* Question # 4 (• Write a loop to calculate and print the factorial of a number (let's say 5).)
 (Factorial of a positive integer (number)
 is the sum of multiplication of all the integers smaller
 than that positive integer. For example, factorial of 5 
 is 5 * 4 * 3 * 2 * 1 which equals to 120.) */

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("Factorial of", num, "is-->", factorial);

// Question # 5 (• Write a loop to print the multiplication table of a number (let's say 7) up to 10.)

const number = 7;

console.log("Multiplication Table for", number);
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + "=" + number * i);
}

// Question # 6 (• Write a loop to print the Fibonacci series up to the 10th term.)

const n = 10;
let a = 0,
  b = 1;

console.log("Fibonacci series upto", n + "th term");
for (let i = 1; i <= n; i++) {
  console.log(a);
  const temp = a + b;
  a = b;
  b = temp;
}

// Question # 7 (• Write a loop to find and print the sum of digits of a number (let's say 123).)

const numb = 123;
let sum = 0;
let num1 = numb;

while (num1 > 0) {
  sum += num1 % 10; // Add the last digit to the sum
  num1 = Math.floor(num1 / 10); // Remove the last digit from the number
}

console.log("The sum of digits of", numb, "is:", sum);

// Question # 8 (• Write a loop to print the reverse of a string (let's say "hello").)

const str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("Reversed of", str, "is:", reversedStr);

// Question # 9 (• Write a loop to print the square of numbers from 1 to 10.)

for (let i = 1; i <= 10; i++) {
  console.log("Square of", i,"is:", i * i);
}

// Question # 10 (• Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).

const arr = [3, 7, 2, 9, 5];
let max = arr[0]; // Assuming the first element is the largest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("The largest element in the array is:", max);
