import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    const { feedback, guessCount, gameOver} = props;
    return (
        <section aria-label="Guess section" aria-describedby="feedback">
            <Feedback feedback={feedback} guessCount={guessCount} gameOver={gameOver} />
            <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
        </section>
    );
}