import React from "react";
import Die from "./Die";

export default function Dice(props) {
    const {dice, handleClick, locked} = props;
    return (
        <div className="Dice">
            {dice.map((d, idx) =>
                <Die
                    key={idx}
                    idx={idx}
                    handleClick={handleClick}
                    locked={locked[idx]}
                    val={d}
                />
            )}
        </div>
    )
}