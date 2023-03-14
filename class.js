'use strict';

//Object-oriented programming
//class: temlplate
//object: instance of a class
// JS classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance


// 1. Class declaration
class Person {
    //constructor(생성자. 이것을 이용해서 나중에 obj를 만들때 필요한 데이터를 전달함)
    constructor (name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
// 사용자가 말이 되지 않는 설정값을 넣어도 그것을 방지할 수 있도록 해주는 것이 getter and setter
console.log(user1.age);

// 3. Fields (public, private)
// 최근에 추가됨(지원 안되는 브라우저 많음)
class Experiment {
    publicField = 2; // class 외부에서 접근 가능
    #privateField = 0; // class 내부에서만 보이고 외부에서는 보이지 않는 필드
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
//최근에 추가됨
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //method
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    //method
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        //overwrite
        super.draw();//부모의 원래 draw라는 함수도 호출함
        console.log('▲');
    }
    getArea(){
        // 필요한 함수들만 overwrite 가능
        return (this.width * this.height) / 2;
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'yellow');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof (true or false)
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true (js의 모든 obj는 Object를 상속하는 것임)
console.log(triangle.toString());