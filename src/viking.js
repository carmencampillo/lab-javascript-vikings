// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
    this.strength = strength;
    }
attack (){
    return this.strength;
}
receiveDamage(damage) {
    this.health -= damage;

}
}
//const player1 = new soldier (100, 50);
//const player2 = new soldier (40,20);

// Viking
class Viking extends Soldier {
    constructor (name, health,strength) {
        super(health, strength);
        this.name = name;

    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health <= 0) {

        return `${this.name} has died in act of combat`;

        }
        else {
        return `${this.name} has received ${damage} points of damage`;

    }
    }
    battleCry ( ) {
        return `Odin Owns You All!`;

    }
}

// Saxon
class Saxon  extends Soldier {
receiveDamage (damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `a saxon has received ${damage} points of damage`;

    } 
   return `A Saxon has died in combat`
    
}
attack (){
return this.strength;
}



}
// War
class War {

    constructor(){
        this.vikingArmy = [
        ]
        this.saxonArmy = [

        ]

    }
    addViking (Viking){
this.vikingArmy.push (Viking);

    }

    addSaxon (saxon){
this.saxonArmy.push (Saxon);
    }
    vikingAttack () {
        

    }
    saxonAttack( ){

    }
    showStatus() {

    }
}


