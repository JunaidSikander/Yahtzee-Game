import React, {useEffect, useState} from 'react'
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

export default function Game() {

    //State
    const [dice, setDice] = useState(Array.from({length: NUM_DICE}));
    const [locked, setLocked] = useState(Array(NUM_DICE).fill(false));
    const [rollsLeft, setRolls] = useState(NUM_ROLLS);
    const [rolling, setRolling] = useState(false);
    const [scores, setScore] = useState({
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
    });

    //Methods
    const animateRoll = () => setRolling(() => true, setTimeout(roll, 1000));

    useEffect(() => animateRoll(), []);

    const roll = (event) => {
        // roll dice whose indexes are in reroll

        setDice((prevState) => prevState.map((d, i) => locked[i] ? d : Math.ceil(Math.random() * 6)));
        setLocked((prevState) => rollsLeft > 1 ? prevState : Array(NUM_DICE).fill(true));
        setRolls((prevState) => prevState - 1);
        setRolling(false);
    };

    const toggleLocked = (idx) => {
        // toggle whether idx is in locked or not
        if (rollsLeft && !rolling)
            setLocked((prevState) => {
                return [
                    ...prevState.slice(0, idx),
                    !prevState[idx],
                    ...prevState.slice(idx + 1)
                ]
            })
    };

    const doScore = (ruleName, ruleFn) => {
        // evaluate this ruleFn with the dice and score this rulename
        setScore((prevState) => {
            return {
                ...prevState,
                [ruleName]: ruleFn(dice)
            }
        });
        setRolls(NUM_ROLLS);
        setLocked(Array(NUM_DICE).fill(false))
        animateRoll();
    };

    const displayRollInfo = () => {
        const messages = ['0 Rolls Left', '1 Roll Left', '2 Rolls Left', "Starting Round"];
        return messages[rollsLeft];
    }

    return (
        <div className="Game">
            <header className='Game-header'>
                <h1 className="App-title"> Yahtzee! </h1>

                <section className='Game-dice-section'>
                    <Dice
                        dice={dice}
                        locked={locked}
                        handleClick={toggleLocked}
                        rolling={rolling}
                    />
                    <div className='Game-button-wrapper'>
                        <button
                            className='Game-reroll'
                            disabled={locked.every(x => x) || rollsLeft === 0 || rolling}
                            onClick={animateRoll}
                        >
                            {displayRollInfo()}
                        </button>
                    </div>
                </section>
            </header>
            <ScoreTable doScore={doScore} scores={scores}/>
        </div>
    )
}