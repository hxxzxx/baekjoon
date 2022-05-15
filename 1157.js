
let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().toUpperCase();

const alpha = new Array(26).fill(0);

for (let i =0; i<input.length; i++)
{
    alpha[input.charCodeAt(i)-65]++; //문자열에서 지정된 인덱스에 있는 유니코드 반환함
}

const value= Math.max(...alpha);
const index = alpha.indexOf(value);
let same = false;

for (let j = 0; j < 26; j++)
{
    if(alpha[j] == value && j !=index)
        {
            same = true;
            break;
        }
}

if (same === true)
    console.log("?");
else
    console.log(String.fromCharCode(index+65));





