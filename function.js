'use strict';

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');

// Parameters
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1, 2); 
console.log(`sum: ${result}`);

// Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10) {
        return;
        // long upgrade logic... 조건이 맞지 않는 경우 빨리 return을 하는게 더 효율적
    }
}

// Callback function using function expression (상황에 맞는 함수를 불러와서 실행하는 callback 함수)
function randomQuiz(answer, printYes, printNo) {
    if( answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){ // 익명함수
    console.log('yes!');
};

const printNo = function print(){ // named function(better debugging in debugger's stack traces)
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function(항상 이름이 없는 익명 함수)
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => console.log(a + b);
const simpleMultiply = (a, b) => {
    // do something more
    return a * b; // return이라는 키워드를 사용해서 값을 return 해야함
}
simplePrint();
add(1,2);

// IIFE : Immediately Invoked Function Expression (함수를 선언함과 동시에 호출시키기)
(function hello() {
    console.log('IIFE');
})();

// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function added ( a, b ){
    console.log( a + b);
};
function substract ( a, b ){
    console.log( a - b);
};
function divide ( a, b ){
    console.log( a / b);
};
function multiply ( a, b ){
    console.log( a * b);
};
function remainder ( a, b ){
    console.log( a % b);
};

added(5,3);
substract(5,3);
divide(5,3);
multiply(5,3);
remainder(5,3);

//answer

function calculate( command, a, b){
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add',5,6));