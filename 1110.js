var fs = require("fs")

var input = fs.readFileSync("baekjoon/test.txt").toString().split(' ');

let  a = input; 
let b;
let i = 0;
while (true)
{  
    b= parseInt(a/10)+a%10;
    a= (a %10)*10 + b%10;
    i++;
    if (input == a )
      {
        break;
      }  
}

console.log(i);
