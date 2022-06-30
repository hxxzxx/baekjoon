var fs = require("fs")

var input = Number(fs.readFileSync('/dev/stdin').toString().split(' '));

var f = parseInt(input / 5);
var t = parseInt(input % 5);

if (input == 1 || input ==3)
{
    console.log(-1);
    return;
}
else if ( t % 2 !=0)
{
    f -=1;
    t +=5;
}
t= parseInt(t /2);
console.log(f+t);