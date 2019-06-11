var DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function() {
        if(this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks. I'm full");
        }
    };

    this.sleep = function() {
        if(this.sleepy) {
            console.log("ZZZzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("I'm not tired.");
        }
    };

    this.play = function() {
        if(this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now.  Maybe later.");
        }
    };

    this.increaseAge = function() {
        age++;
        console.log("Happy Birthday to me! I'm " + this.age + " years old.");
    };
};

var animals = {};

animals.dog = new DigitalPal();

animals.dog.outside = false;

animals.dog.bark = function() {
    console.log("Woof! Woof!");
};

animals.dog.letOutside = function() {
    if(!this.outside) {
        console.log("Yay! I love being outside!");
        this.outside = true;
        this.bark();
    }
    else {
        console.log("We're already outside though.");
    }
};

animals.dog.letInside = function() {
    if(this.outside) {
        console.log("Aww... Do I have to?");
        this.outside = false;
    }
    else {
        console.log("We're already inside though.");
    }
};

animals.cat = new DigitalPal();

animals.cat.houseQuality = 100;

animals.cat.meow = function() {
    console.log("Meow! Meow!");
};

animals.cat.destroyFurniture = function() {
    if(this.houseQuality - 10 > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("Muah ha ha! Take that furniture!");
    }
    else {
        console.log("Everything is already destroyed.");
    }
};

animals.cat.buyNewFurniture = function() {
    this.houseQuality += 50;
    console.log("Are you sure that a good idea?");
};

var animal = process.argv[2];
var method = process.argv[3];

animals[animal][method]();