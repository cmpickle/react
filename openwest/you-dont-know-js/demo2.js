function Developer(name) {
    this.name = name;
}

Developer.prototype.greeting = function() {
    console.log("Hello, I am a developer named ${this.name}");
}

const Bill = new developer("Bill");

Object.setPrototypeOf(Bill, developer);

Bill.greeting();