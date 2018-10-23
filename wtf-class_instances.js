// declare a class using the class keyword
// this will help us create a bunch of pizza objects.

//We can use any name for the class but a class name should always be a noun, and the first letter should always be capitalized.

class Pizza {
    constructor() {
        this.topping = ['cheese'];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}

//To create a new object from a class, we use the new keyowrd. 
// pizza1 and pizza2 are pizza objects.
//when you create a new object from a class it is an instance.
let pizza1 = new Pizza();
let pizza2 = new Pizza();