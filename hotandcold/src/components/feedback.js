import React from 'react';

import './feedback.css';

export default function Feedback(props) {
    const key = props.guessCount;
    const gameOver = props.gameOver;
    let guessAgain;
    if (key !== 0 && !gameOver) {
        guessAgain = <span className="visuallyhidden">Guess again!</span>;
    }
    return (
        <h2
            key={key}
            id="feedback"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
        >
            {props.feedback} {guessAgain}
        </h2>

    );
}