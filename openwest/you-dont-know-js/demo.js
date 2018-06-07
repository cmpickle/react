function greeting() {
    console.log("Hello my name is " + this.name);
}

const developer = {
    greeting
}

const Bill = {
    name: "Bill"
}

Object.setPrototypeOf(Bill, developer);

Bill.greeting();