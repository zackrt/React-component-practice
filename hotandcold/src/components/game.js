import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import './game.css'

export default function Game(props) {
    return (
        <section >
            <h1>Hot And Cold</h1>
            <form className="gameform">
                <h2 className="feedback">Make your Guess!</h2>
                <input type="number" placeholder ="number" min='1' max='100' required>
                </input>
                <button className="Guess">
                    GUESS
                </button>

            </form>
        </section>
    );
}