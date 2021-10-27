import React from "react";

export default function RuleRow(props) {
    const {name, score, doScore} = props;
    return (
        <tr className="RuleRow RuleRow-active" onClick={doScore}>
            <td className="RuleRow-name">{name}</td>
            <td className="RuleRow-score">{score}</td>
        </tr>
    )
}