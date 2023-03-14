'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length -1]); // 배열의 맨 마지막꺼 찾을 때 

// 3. Looping over an array
// print all fruits

console.clear();
for ( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of 이용방법
for (let fruit of fruits) {
    console.log(fruit);
}
console.clear();
// forEach 이용방법
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item from the beginning
fruits.unshift('watermelon', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// splice: remove an item by index position

fruits.push('strawberry', 'peach','watermelon', 'lemon');
console.log(fruits);
fruits.splice(1, 1); // n번쨰 index를 지정하고 몇개를 지울지 지정하지 않으면, 지정한 index 이후 모든 배열을 지워버림
console.log(fruits);
fruits.splice(1, 1, 'green apple', 'orange');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('green apple'));

// includes
console.log(fruits.includes('watermelon')); //true
console.log(fruits.includes('grape')); // false

// lastIndexOf
console.clear();
fruits.push('green apple');
console.log(fruits);
console.log(fruits.indexOf('green apple')); // 중복된 값이 있다면 제일 먼저 들어있는 index 값을 출력하게 됨 
console.log(fruits.lastIndexOf('green apple')); // 중복된 값이 있다면 제일 마지막 index 값을 출력함