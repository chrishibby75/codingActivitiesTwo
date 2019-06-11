var Programmer = function(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language
}

Programmer.prototype.printInfo = function() {
    console.log("");
    console.log("Name: " + this.name + "\nPosition: " + this.position + 
    "\nAge: " + this.age + "\nLanguages: " + this.language);
    console.log("");
};

var chris = new Programmer("Chris Hibberd", "Explorer Support", 43, ["HTML", "CSS", "JavaScript", "Node.js", "React"]);

var heather = new Programmer("Heather Midgley", "ETL developer", 37, "SQL");

chris.printInfo();
heather.printInfo();
