//inheritance
//With inheritance, we can build a new class based on an existing class.

// this class represents all that is commone between Student and Mentor
class Person {

    //this constructor will be identical for both
    constructor(name, quirkyFact, email) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.email = email;
    }
    //this method will also be identical for both
    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
    }

    details() {
        return `Contact info for ${this.name} \n Email: ${this.email}`
    }

    //new methods
    hasBeard() {
        this.hasBeard = true;
    }

    noBeard() {
        this.hasBeard = false; 
    }
}

//the keyword 'extends' is used to inherit behaviour and state from Person to the student or mentor class.

// Student and Mentor are SUBCLASSES of the Person class. Now Person is the SUPERCLASS.
class Student extends Person {
    // stays in student class since its specific to student
    enroll(cohort) {
        this.cohort = cohort;
    }

    bio() {
        return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
    }
}

class Mentor extends Person {
    //specific to mentors
    goOnShift() {
        this.onShift = true;
    }
    goOffShift() {
        this.onShift = false;
    }

    yearsOfExperience(years) {
        this.years = years;
    }

    //method override, the superclass already contains this method and this subclass is going to override it.
    //lets use SUPER keyword to make this code DRY.
    bio() {
        return `I'm a mentor at LHL. ${super.bio()}`;
    }


}

let student1 = new Student('Andrea', 'I won a hotdog eating competition', 'andreamayhirji@gmail.com');
student1.enroll('September 24');
student1.noBeard();
console.log(student1.bio());
console.log(student1.details());

let mentor1 = new Mentor('Matt', 'I own a goat', "matthirji@gmail.com");
mentor1.goOnShift();
mentor1.hasBeard();
mentor1.yearsOfExperience(5);
console.log(mentor1.bio());
console.log(mentor1.details());

