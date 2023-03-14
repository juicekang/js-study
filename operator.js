'use strict';

// String concatenation
console.log('my'+' cat');
console.log('1' + 2); // 문자+숫자의 경우 숫자가 문자로 변환
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;

// Logical operators : || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value (첫번째 조건이 true일 경우 뒤는 보지 않고 무조건 true 출력)
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first flasy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('wasting time');
    }
    return false;
}

// ! (not)
console.log(!value1); //false 출력

// Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true (string 안에 있는 5랑 숫자 5랑 같다고 인식해서 true 출력. loose equality)
console.log(stringFive != numberFive);

// == strict equality, no type conversion (type을 신경써서, type이 다르면 다른 애들이라고 인식함.)
console.log(stringFive == numberFive); // false
console.log(stringFive != numberFive);

//object equaility by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // 각각 다른 ref에 저장되어 있기 때문에 false
console.log(ellie1 === ellie2); // 똑같은 type이든 아니던간에 ref값이 다르기 때문에 false
console.log(ellie1 === ellie3); // true


// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false (0은 boolean type이 아니기 때문에 false 출력)
console.log('' == false); // true
console.log('' === false);  // false (empty 문자열은 boolean type이 아니기 때문에 false 출력)
console.log(null == undefined);  // true
console.log(null === undefined); // false (type이 달라서 false 출력)

// Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

// Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while ( i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, (먼저 실행한 뒤 조건을 체크)
//then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); 
// do while: 0까지 출력이 되고 나서, 조건을 체크하고 실행을 멈추게 됨

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 0부터 10까지 짝수만 출력하기
for(let i = 0; i < 11; i++) {
    if ( i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++){
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}