
// Object   =    A collection of related properties and/or methods
//                Can represent real world objects(people, products, places)
//                Object = {key:value}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    sayBye: function(){console.log("Goodbye")}
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Hey I'm Patrick")},
    sayBye: function(){console.log("Goodbye")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();