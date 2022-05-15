let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');

let num1 = input[0]
let num2 = input[1];

num1 = Number(num1.split('').reverse().join(''));
num2 = Number(num2.split('').reverse().join(''));
console.log(num1 > num2 ? num1 : num2);
