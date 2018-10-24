//inheritance
//With inheritance, we can build a new class based on an existing class.

// this class represents all that is commone between Student and Mentor
class Person {

    //this constructor will be identical for both
    constructor(name, quirkyFact) {
        this.name = name;
        this.quirkyFact = quirkyFact;
    }
    //this will also be identical for both
    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
}

//the keyword 'extends' is used to inherit behaviour and state from Person to the student or mentor class.

// Student and Mentor are SUBCLASSES of the Person class. Now Person is the SUPERCLASS.
class Student extends Person {
    // stays in student class since its specific to student
    enroll(cohort) {
        this.cohort = cohort;
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

}

let student1 = new Student('Andrea', 'I won a hotdog eating competition');
student1.enroll('September 24');
console.log(student1);

let mentor1 = new Mentor('Matt', 'I own a goat');
mentor1.goOnShift();
mentor1.yearsOfExperience(5);
console.log(mentor1);
