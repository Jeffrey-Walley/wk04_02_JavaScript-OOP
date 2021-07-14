class Fruit {
    constructor(name) {
        this.name = name;
    }
    speak = function() {
        console.log("Hey my name is " + this.name);
    };

    calculateNutrition = function() {
        if (this.fruitName === "Apple") {
            this.howNutritious = "very";
        } else if (this.fruitName === "Banana") {
            this.howNutritious = "potassium rich"
        } else {
            this.howNutritious = "not very";
        }
    }


}

let apple = new Fruit("Apple");
let banan = new Fruit("Banana");
let candy = new Fruit("Candy");

console.log("Our first fruit is named: " + apple.name);
console.log("Our second fruit is named: " + banan.name);

apple.speak();
banan.speak();


class Animal {
    legs = 0;
    brain = "regular";
    speak = function() {
        console.log("I'm an Animal!");
    };
}

let dog = new Animal();

dog.speak();