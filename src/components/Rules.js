import React from "react";

class Rule {
    constructor(params) {
        // put all properties in params on instance
        Object.assign(this, params);
    }

    sum(dice) {
        // sumf of all dice
        return dice.reduce((prev, curr) => prev + curr);
    }

    freq(dice) {
        // frequencies of dice values
        const freqs = new Map();
        for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
        return Array.from(freqs.values());
    }

    count(dice, val) {
        // # times val appears in dice
        return dice.filter(d => d === val).length;
    }
};

// Used for rules like "sum of all ones"
class TotalOneNumber extends Rule {
    evalRoll = dice => this.val * this.count(dice, this.val);
}

// Used for rules like "sum of all dice when there is a 3-of-kind"
class SumDistro extends Rule {
    // do any of the counts meet of exceed this distro?
    evalRoll = dice => this.freq(dice).some(c => c >= this.count() ? this.sum(dice) : 0);
}

/** Check if full house (3-of-kind and 2-of-kind) */

class FullHouse {
    // TODO
}

/** Check for small straights. */

class SmallStraight {
    // TODO
}

/** Check for large straights. */

class LargeStraight extends Rule {
    evalRoll = dice => {
        const d = new Set(dice);

        // large straight must be 5 different dice & only one can be a 1 or a 6
        return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
    };
}

/** Check if all dice are same. */

class Yahtzee extends Rule {
    evalRoll = dice => {
        // all dice must be the same
        return this.freq(dice)[0] === 5 ? this.score : 0;
    };
}

// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threes = new TotalOneNumber({ val: 3 });
const fours = new TotalOneNumber({ val: 4 });
const fives = new TotalOneNumber({ val: 5 });
const sixes = new TotalOneNumber({ val: 6 });

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({ count: 3 });
const fourOfKind = new SumDistro({ count: 4 });

// full house scores as flat 25
const fullHouse = "TODO";

// small/large straights score as 30/40
const smallStraight = "TODO";
const largeStraight = new LargeStraight({ score: 40 });

// yahtzee scores as 50
const yahtzee = new Yahtzee({ score: 50 });

// for chance, can view as some of all dice, requiring at least 0 of a kind
const chance = new SumDistro({ count: 0 });

export {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance
};

