import React from "react";
import Die from "./Die";

export default function Dice(props) {
    const {dice, handleClick, locked, rolling} = props;
    return (
        <div className="Dice">
            {dice.map((d, idx) =>
                <Die
                    key={idx}
                    idx={idx}
                    handleClick={handleClick}
                    locked={locked[idx]}
                    val={d}
                    rolling={rolling && !locked[idx]}
                />
            )}
        </div>
    )
}