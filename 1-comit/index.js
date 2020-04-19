var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Mickey');

try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog' + error);
}



console.log(cat);

// dog.sayHi();
// dog.eat(tom);
// console.log(dog);