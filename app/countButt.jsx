import React, { useState, useEffect } from "react";

export default function CountButt(props) {
    let [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1 * props.mult);
    }

    function rollOverCount() {
        if (count > 10) {
            setCount(0);
        }
    }

    const buttonStyle = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px"
    }
    useEffect(rollOverCount, [count]);

    return (
        <div>
            <button onClick={handleClick} style={buttonStyle}>{props.name}</button>
            <div>{count}</div>
        </div>
    );
}
