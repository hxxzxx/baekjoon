let fs = require('fs');
let input = fs.readFileSync('baekjoon/test.txt').toString().split('\n');

let H= Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);
let P = Number(input[1]);

    M += P;
    while (M >59 )
    {
        M -=60;
        H++;
    }
    H %= 24;

console.log(H,M);



