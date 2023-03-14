// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name'; // 어느 곳에서나 접근이 가능한 변수

{
    let name = 'minju';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(globalName);

// var (don't ever use this! 선언하기도 전에 값을 쓸 수 있어서 권장하지 않음.)
// var hoisting (어디에 선언했느냐에 상관 없이 항상 제일 위로 선언을 끌어 올려줌. move declaration from bottom to top)
// var has no block scope (block 밖에 선언해도 모두 갖다 쓸 수 있음.)

// number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //templete literals (string)
console.log(`value:${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type:${typeof x}`);

// symbol, create unique indentifiers for objects (고유한 식별자를 만들 때 사용되어 짐)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`) // symbol을 출력하려면 꼭 description을 넣어서 string으로 변환시켜주어야 함

// dynamic typing

let text ='hello';
console.log(text.charAt(0)); // h
console.log(`value:${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value:${text}, type:${typeof text}`);
text = '8' / '2';  // string으로 넣어도 나눗셈 기호 때문에 숫자로 인식해서 연산
console.log(`value:${text}, type:${typeof text}`);

// object
const ellie = {name:'ellie', age: 20}; // name, age는 ref
ellie.age = 21; 
