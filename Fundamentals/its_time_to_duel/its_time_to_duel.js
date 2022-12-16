class Card{
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }

    showstats(){
        return `Name: ${this.name}, Cost: ${this.cost}`;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power = power
        this.resilience = resilience
    }

    alterattributes(effectcard){
        this[effectcard.stat] = this[effectcard.stat] + effectcard.magnitude < 0 ? 0 : this[effectcard.stat] + effectcard.magnitude;
    }

    attack(target){
        target.alterattributes({
            stat : 'resilience',
            magnitude: -this.power
        })
    }

    showstats(){
        console.log(super.showstats() + ` Power: ${this.power}, Resilience: ${this.resilience}`)
    }
}


class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        target.alterattributes(this);
    }
}


const red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);

const hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandled_promise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pair_programming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Turn 1
hard_algorithm.play(red_belt_ninja);
red_belt_ninja.showstats();

// Turn 2
unhandled_promise.play(red_belt_ninja);
red_belt_ninja.showstats();

//  Turn 3
pair_programming.play(red_belt_ninja);
red_belt_ninja.showstats();
red_belt_ninja.attack(black_belt_ninja);
black_belt_ninja.showstats();