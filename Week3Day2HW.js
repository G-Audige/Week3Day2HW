class Cat {
        limbs = 4;
        eyes = 2;
        fur = true;
        tail = true
    happy() {
        console.log("Purrr...")
    }
    seeMouse() {
        console.log("*Stalks")
    }
    scared() {
        console.log("Hiss...")
    }
}
const lux = new Cat()
const mrbarbatos = new Cat()
console.log(lux)
lux.happy()
lux.seeMouse()
lux.scared()
console.log(mrbarbatos)
mrbarbatos.happy()
mrbarbatos.seeMouse()
mrbarbatos.scared()

class Pirate {
    constructor(eyepatch,parrot,hook,bounty,age) {
      this.eyepatch = eyepatch;
      this.parrot = parrot;
      this.hook = hook;
      this.bounty = bounty; 
      this.age = age    
    }
    battle() {
        console.log("Load the cannons!")
    }
    findTreasure() {
        console.log("Take it to the ship.")
    }   
    victory() {
        console.log("All drinks on me!")
    }  
}
const blackbeard = new Pirate(true,false,false,"1 million",34)
const graybeard = new Pirate(false,true,false,"2 million",50)
const whitebeard = new Pirate(true,true,false,"2.5 million",61)
const jollyRoger = [blackbeard,graybeard,whitebeard]
console.log("JollyRoger Pirates")
for(let i = 0; i < jollyRoger.length; i++) {
    console.log(
        "Eyepatch:",jollyRoger[i].eyepatch,
        "Parrot:",jollyRoger[i].parrot,
        "Age:",jollyRoger[i].age
        )
}
const goldhook = new Pirate(false,true,true,"11 million",31)
const silverhook = new Pirate(true,false,true,"5 million",26)
const bronzehook = new Pirate(false,false,true,"2 million",29)
const blackPearl = [goldhook,silverhook,bronzehook]
console.log("BlackPearl Pirates")
for(let i = 0; i < blackPearl.length; i++) {
    console.log(
        "Parrot:",blackPearl[i].parrot,
        "Hook:",blackPearl[i].hook,
        "Bounty:",blackPearl[i].bounty
        )
}

