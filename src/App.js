import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './Game';
import Result from './Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
