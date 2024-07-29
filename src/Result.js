import { useLocation, useNavigate } from 'react-router-dom';
import rock from './assets/icon-rock.svg';
import paper from './assets/icon-paper.svg';
import scissors from './assets/icon-scissors.svg';

const choices = {
  rock: rock,
  paper: paper,
  scissors: scissors,
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userChoice, compChoice, result, updatedScore } = location.state;

  return (
    <div style={{height: '100vh', backgroundColor: '#192a56', color: 'white', textAlign: 'center', padding: '20px' }}>
      <div style={{ padding: 40, fontSize: 40 }}>
        Rock, Paper, Scissors
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ margin: '0 20px' }}>
          <h2>You Picked</h2>
          <img src={choices[userChoice.name]} alt={userChoice.name} style={{ height: 100, width: 100, backgroundColor: 'white', padding: 30, borderRadius: '50%' }} />
        </div>
        <div style={{ margin: '0 20px' }}>
          <h2>{result}</h2>
          <button style={{color: 'black', padding: 10, cursor: 'pointer', backgroundColor: 'yellow', borderColor: 'yellow'}} onClick={() => navigate('/')}>Play Again</button>
        </div>
        <div style={{ margin: '0 20px' }}>
          <h2>The House Picked</h2>
          <img src={choices[compChoice.name]} alt={compChoice.name} style={{ height: 100, width: 100, backgroundColor: 'white', padding: 30, borderRadius: '50%'}} />
        </div>
      </div>
      <div style={{ padding: 20, fontSize: 20 }}>
        <p>Score: {updatedScore}</p>
      </div>
    </div>
  );
};

export default Result;
