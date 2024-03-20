import React from 'react';

import "./Box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "R" ? "R" : "L";

    return (
        <button className={`box ${value}`} onClick={onClick}></button>
    )
}