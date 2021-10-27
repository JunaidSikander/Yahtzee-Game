import React from "react";
import RuleRow from "./RuleRow";
import {
    chance,
    fives,
    fourOfKind,
    fours,
    fullHouse,
    largeStraight,
    ones,
    sixes,
    smallStraight,
    threeOfKind,
    threes,
    twos,
    yahtzee
} from "./Rules";

export default function ScoreTable(props) {
    const {scores, doScore} = props;

    console.log('SCORES',scores);

    return (
        <div className='ScoreTable'>
            <section className='ScoreTable-section'>
                <h2>Upper</h2>
                <table cellSpacing="0">
                    <tbody>
                    <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)}/>
                    <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)}/>
                    <RuleRow name="Threes" score={scores.threes}
                             doScore={evt => doScore("threes", threes.evalRoll)}/>
                    <RuleRow name="Fours" score={scores.fours}
                             doScore={evt => doScore("fours", fours.evalRoll)}/>
                    <RuleRow name="Fives" score={scores.fives}
                             doScore={evt => doScore("fives", fives.evalRoll)}/>
                    <RuleRow name="Sixes" score={scores.sixes}
                             doScore={evt => doScore("sixes", sixes.evalRoll)}/>
                    </tbody>
                </table>
            </section>
            <section className="ScoreTable-section ScoreTable-section-lower">
                <h2>Lower</h2>
                <table cellSpacing="0">
                    <tbody>
                    <RuleRow name="Three of Kind" score={scores.threeOfKind}
                             doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)}/>
                    <RuleRow name="Four of Kind" score={scores.fourOfKind}
                             doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)}/>
                    <RuleRow name="Full House" score={scores.fullHouse}
                             doScore={evt => doScore("fullHouse", fullHouse.evalRoll)}/>
                    <RuleRow name="Small Straight" score={scores.smallStraight}
                             doScore={evt => doScore("smallStraight", smallStraight.evalRoll)}/>
                    <RuleRow name="Large Straight" score={scores.largeStraight}
                             doScore={evt => doScore("largeStraight", largeStraight.evalRoll)}/>
                    <RuleRow name="Yahtzee" score={scores.yahtzee}
                             doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}/>
                    <RuleRow name="Chance" score={scores.chance}
                             doScore={evt => doScore("chance", chance.evalRoll)}/>
                    </tbody>
                </table>
            </section>
        </div>
    )
}