class Developer {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log("Hello, I am a developer named ${this.name}");
    }
}

class William extends Developer {
    constructor(name) {
        super(name);
    }

    greeting() {
        console.log("I am William");
    }
}

const Bill = new Developer('Bill');
const newWilliam = new William('William');

Bill.greeting();
newWilliam.greeting();