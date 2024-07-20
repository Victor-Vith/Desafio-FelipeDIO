class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = {};
        
        if(type === "Warrior"){
            this.type = ("Warrior, attacked using sword");

        }   else if(type === "Mage"){
            this.type = ("Mage, attacked using magic")

            }   else if(type === "Monk"){
                this.type = ("Monk, attacked using martial arts")
        
                }   else if(type === "Ninja"){
                    this.type = ("Ninja, attacked using shuriken")
                    }
                    	else{
                    	this.type = ("## Hello Hero, set your name, age and type of choice please ##")
                    	}
    }

    attack(){
        console.log(`${this.name} - ${this.age}, ${this.type};\n`)
        console.log("------------------------------------------\n")
    }
}

let example = new Hero("","","");
let hero = new Hero("bruce", 120, "Monk");
let hero1 = new Hero("Naruto", 17, "Ninja");
let hero2 = new Hero("Tibiano", 40, "Warrior");
let hero3 = new Hero("Merlin", 400, "Mage");


example.attack()
hero.attack()
hero1.attack()
hero2.attack()
hero3.attack()