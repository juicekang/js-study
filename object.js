'use strict';

//Object
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age: 4};
print(ellie);

ellie.hasJob = true; // object선언할 때 없었던 뒤늦게 property 추가 가능(권하지는 않음)

delete ellie.hasJob; // 뒤늦게 삭제도 가능(권하지는 않음)

// 2. computed properties
console.log(ellie.name);
console.log(ellie['name']); // key should be always string 정확하게 어떤 key값을 받아올지 모르고, runtime에서 결정될때 computed property 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name:'bob', age: 2 };
const person2 = { name:'steve', age: 3 };
const person3 = { name:'dave', age: 4 };
// 이런식으로 추가 될 때마다 계속 작성하는건 비효율적이기 때문에 함수를 만들어서 사용하면 편함
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
        // this = {};
    this.name = name;
    this.age = age;
        // return this;
}

// 5. in operator: property existence check (key in obj) obj안에 key가 있는지 확인
console.log('name' in ellie); // true
console.log('random' in ellie); //false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for (let key in ellie) {
    console.log(key); // 반복되면서 key라는 지역변수에 할당됨
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// let i, i++ 형태의 반복문을 쓰지 않아도 됨
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // coder

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way

const user4 = Object.assign({}, user);
// Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나올 수록 값을 덮어 씌움
console.log(mixed.color);
console.log(mixed.size);