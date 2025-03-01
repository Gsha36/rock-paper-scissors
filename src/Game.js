import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rock from './assets/icon-rock.svg';
import paper from './assets/icon-paper.svg';
import scissors from './assets/icon-scissors.svg';

const choices = [
  { name: 'rock', image: rock, borderColor: 'red' },
  { name: 'paper', image: paper, borderColor: 'orange' },
  { name: 'scissors', image: scissors, borderColor: 'green' },
];

const Game = () => {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleChoice = (userChoice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice.name === compChoice.name) {
      result = 'Draw';
    } else if (
      (userChoice.name === 'rock' && compChoice.name === 'scissors') ||
      (userChoice.name === 'paper' && compChoice.name === 'rock') ||
      (userChoice.name === 'scissors' && compChoice.name === 'paper')
    ) {
      result = 'Win';
      setScore(prevScore => prevScore + 1);
    } else {
      result = 'Lose';
      setScore(prevScore => prevScore > 0 ? prevScore - 1 : 0);
    }

    navigate('/result', { state: { userChoice, compChoice, result, updatedScore: score + (result === 'Win' ? 1 : result === 'Lose' ? -1 : 0) } });
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#192a56', color: 'white', textAlign: 'center', padding: '20px' }}>
      <div style={{ 
        marginTop: 30,
        display: 'inline-block',
        padding: '30px 20px', 
        fontSize: 40,
        borderRadius: '10px', 
        border: '1px solid white'
      }}>Rock, Paper, Scissors</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 60}}>
        {choices.map((choice) => (
          <div
            key={choice.name}
            onClick={() => handleChoice(choice)}
            style={{ 
              margin: '0 20px', 
              cursor: 'pointer', 
              backgroundColor: 'white', 
              padding: 30, 
              borderRadius: '50%', 
              border: `18px solid ${choice.borderColor}` 
            }}
          >
            <img src={choice.image} alt={choice.name} style={{ height: 100, width: 100 }} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Game;
