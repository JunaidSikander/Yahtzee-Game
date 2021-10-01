import React from "react";

export default function Die(props) {
    const {handleClick, idx, locked, val} = props;
    return (
        <button
            className='Die'
            style={{backgroundColor: locked ? 'gray' : 'black'}}
            onClick={() => handleClick(idx)}
        >
            {val}
        </button>
    )
}