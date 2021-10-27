import React from "react";

export default function RuleRow(props) {
    const {name, score, description, doScore} = props;

    const disabled = score !== undefined;
    const classes = `RuleRow RuleRow-${disabled ? "disabled" : "active"}`;

    return (
        <tr className={classes} onClick={disabled ? null : doScore}>
            <td className="RuleRow-name">{name}</td>
            <td className="RuleRow-score">{disabled ? score : description}</td>
        </tr>
    )
}