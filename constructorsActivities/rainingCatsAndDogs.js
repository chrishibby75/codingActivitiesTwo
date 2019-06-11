function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if(this.raining === true) {
            console.log(this.noise);
        }
    };
}

var dogs = new Animal(true, "woof!");
var cats = new Animal(false, "meow!");

dogs.makeNoise();
cats.makeNoise();

cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if(dogs.raining === true && cats.raining === true) {
        console.log("Dogs and cats living together! Mass hysteria!");
    }
};
massHysteria(dogs, cats);