class Ninja {
    constructor(name , health=100, speed =3 ,strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`${this.name} is the name of your ninja`);
    }
    showStats() {
        console.log(`
        ${this.name} is the name of your ninja , he have : 
        ${this.health} hp and speed of ${this.speed} speed and strength of ${this.strength}
        `);
    }
    drinksake() {
        this.health += 10;
    }
}
// module.exports = Ninja;
// return module.exports;

class Sensei extends Ninja {
    constructor (wisdom=10) {
        super ("Master Splinter",200, 10 ,10)
        this.wisdom=wisdom
    }
    speakWisdom(){
        super.drinksake();
    }

}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
