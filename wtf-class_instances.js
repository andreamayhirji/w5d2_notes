// declare a class using the class keyword
// this will help us create a bunch of pizza objects.

//We can use any name for the class but a class name should always be a noun, and the first letter should always be capitalized.


class Pizza {

    //method 1
    // a constructor method will get run fro every new instance of the class when we call new Pizza(); 
    // acts as a default state for new instances
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = ['cheese'];
    }



    //method 2 -- with a property called toppings
    //To add properties to a class, simply use the this keyword followed by the property name, then assign it a value.
    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings.pop(topping);
    }
}

//To create a new object from a class, we use the new keyowrd. 
// pizza1 and pizza2 are pizza objects.
//when you create a new object from a class it is an instance.
let pizza1 = new Pizza('large', 'thin', 'spicy');
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
pizza1.removeTopping();

let pizza2 = new Pizza('small', 'thin', 'mild');
pizza2.addTopping('more cheese');
pizza2.addTopping('garlic');


console.log(pizza1);
console.log(pizza2);
