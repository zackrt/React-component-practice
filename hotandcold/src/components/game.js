import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import './game.css'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses:[],
            feedback:'Make your guess!',
            correctAnswer:Math.round(Math.random() * 100) + 1
        };
    }
    restartGame() {
        this.setState({
            guess: [],
            feedback:'',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({ feedback:'Please enter a number'});
            return;
        }
    
    const difference = Math.abs(guess- this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Very Cold...';
    } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }  else if (difference >=1) {
        feedback = 'You\'re Hot!';
    } else {
        feedback = 'You got it!';
    }
    
    this.setState({
        feedback,
        guesses: [...this.state.guesses, guess]
    });
        
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot and Cold';
}
generateAuralUpdate() {
    const {guesses, feedback} =this.state;
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`

    if (guesses.length > 0) {
        auralStatus += `${pluralize ? 'In order of most - to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    this.state({auralStatus});
}
render() {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guess.length;

    return (
        <div>
            <Header
            onRestartGame={() => this.restartGame()}
            onGenerateAuralUpdate={() => this.generateAuralUpdate()}
            />
                <main role="main">
                <GuessSection
                    feedback={feedback}
                    guessCount={guessCount}
                    onMakeGuess={guess => this.makeGuess(guess)}
                />
                    <StatusSection guesses={guesses} 
                        auralStatus={auralStatus}
                    />
                <InfoSection />
                </main>
        </div>
    );
}
}
