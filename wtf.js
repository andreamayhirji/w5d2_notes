//dog

// const dogSound = "woof";
// let dogBreed = "shih tzu";

// function speak() {
//     return `A ${dogBreed} says ${dogSound}`
// }

// console.log(speak());

//

// const dog = {
//     sound: 'woof',
//     breed: 'shih tzu',
//     speak: function() {
//         console.log(`${this.breed} says ${this.sound}`); 
//     }
// };

// console.log(dog.speak());

//Learning about 'this' being used as a keyword...

//usually it would be const not var, doing this for example purpose.
var dog = {
    sound: 'woof',
};

function speak() {
    console.log(dog.sound);
}
speak();
// speak() is logging out the sound property from the dog object.

var dog = {
    sound: 'woof',
    speak: function () {
        console.log(this.sound);
    }
};
dog.speak();
// console.log('with this:', doggo.speak());
// doggo.speak() is still logging out the sound property from the dog object. // But because speak is now a method of the dog object, this refers to doggo. // In this case, this and dog are the same.

var dog = {
    sound: 'woof',
    speak: function() {
        console.log(this.sound);
    },
    teachMeSomething: function() {
        if (dog === this) {
            console.log('dog === this');
        }
        this.speak();
    }
};
dog.teachMeSomething();
//Whenever your method is accessing a property or another method on the same object, use this.

const cat = {
    sound: 'meow',
    speak: function() {
        console.log(this.sound);
    }
};

cat.sound = 'cat'
cat.speak();
// the cat.sound gets replaced by the string 'cat' and it changes the conole.log





