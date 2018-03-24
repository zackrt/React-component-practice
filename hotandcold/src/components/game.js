import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses:[],
            feedback:'Make your guess!',
            auralStatus:'',
            correctAnswer:Math.round(Math.random() * 100) + 1
        };
    }
    restartGame() {
        this.setState({
            guesses: [],
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
    
    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    let gameOver = false;
    if (difference >= 50) {
        feedback = 'You\'re Very Cold...';
    } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }  else if (difference >=1) {
        feedback = 'You\'re Hot!';
    } else {
        feedback = 'You got it!';
        gameOver = true;
    }
    
    this.setState({
        gameOver,
        feedback,
        guesses: [...this.state.guesses, guess]
    });
        
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot and Cold';
}

generateAuralUpdate() {
    const { guesses, feedback } = this.state;
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`

    if (guesses.length > 0) {
        auralStatus += `${pluralize ? 'In order of most - to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    this.state({auralStatus});
}
render() {
    const { gameOver, feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

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
                    gameOver={gameOver}
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
