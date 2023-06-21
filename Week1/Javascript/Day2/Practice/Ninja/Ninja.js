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
module.exports = Ninja;
return module.exports;