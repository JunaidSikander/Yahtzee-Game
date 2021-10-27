import React from "react";

export default function Die(props) {
    const {handleClick, idx, locked, val, numberWords, rolling} = props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked"
    if (rolling) classes += "Die-rolling"
    return <i className={classes} onClick={() => handleClick(idx)}/>
}

Die.defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
}