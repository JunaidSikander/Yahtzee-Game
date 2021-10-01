import React from "react";
import RuleRow from "./RuleRow";
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    chance,
    fourOfKind,
    fullHouse,
    largeStraight,
    smallStraight,
    threeOfKind,
    yahtzee
} from "./Rules";

export default function ScoreTable(props) {
    const {scores, doScore} = props;
    return (
        <div className='ScoreTable'>
            <section className='ScoreTable-section'>
                <h2>Upper</h2>
                <table cellSpacing="0">
                    <tbody>
                    <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)}/>
                    <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)}/>
                    <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)}/>
                    <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)}/>
                    <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)}/>
                    <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)}/>
                    </tbody>
                </table>
            </section>
        </div>
    )
}