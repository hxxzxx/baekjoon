let fs = require('fs');
let input = fs.readFileSync('baekjoon/test.txt').toString().split(' ');

var h = Number(input[0]);
var m = Number(input[1]);

m = m - 45 ;

if ( m < 0)
{
   m= m + 60;
   h= h - 1;
   if( h < 0)
   {
       h = h+ 24
   }
}

console.log(h , m);

