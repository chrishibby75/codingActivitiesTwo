function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
        "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength +
        "\nHitpoints: " + this.hitpoints);
        console.log("==================================================================================");
    };

    this.isAlive = function() {
        if(this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("=================================================================");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };

    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    };

    this.levelup = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };
}

var warrior = new Character("Heather", "Ninja", "female", 36, 20, 1500);
var husband = new Character("Chris", "Couch Potato", "male", 43, 25, 1200);
var kid = new Character("Kade", "Karate Kid", "male", 5, 6, 1200);
var baby = new Character("Kieran", "Berzerker", "male", 2, 7, 1300);

warrior.printStats();
husband.printStats();
kid.printStats();
baby.printStats();

warrior.attack(husband);
kid.attack(husband);
baby.attack(husband);
husband.printStats();
husband.isAlive();

warrior.levelup();
kid.levelup();
baby.levelup();

warrior.printStats();
kid.printStats();
baby.printStats();

while (husband.isAlive() === true && warrior.isAlive() === true && kid.isAlive() === true && baby.isAlive() === true) {
    husband.attack(warrior);
    husband.attack(kid);
    husband.attack(baby);
    
    warrior.printStats();
    kid.printStats();
    baby.printStats();

}
