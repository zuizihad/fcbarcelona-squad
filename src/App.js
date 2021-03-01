import fakeData from './data/playerData.json';
import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Team from './components/Team/Team';

function App() {
  const [player, setPlayer] = useState([]);
  const [squad, setSquad] = useState([]);

  const handleSquad = (player) => {
    const newPlayer = [...squad, player];
    setSquad(newPlayer);
  }

  useEffect(() => {
    setPlayer(fakeData);
  }, [])
  return (
    <div className="container-fluid">
      <h1 className="text-center my-5">FC Barcelona Player's</h1>

      <div className="custom-container">
        <div className="player-container">
          {
            player.map(player => <Player player={player} key={player.shirtNumber} handleSquad={handleSquad}></Player>)
          }
        </div>
        <div className="team-container">
          <h3 className="text-center text-uppercase text-success">Barca Next Match Squad</h3>
          <h4 className="text-primary">Selected Player: {squad.length}</h4>
          <Team squad={squad}></Team>
        </div>
      </div>

    </div>
  );
}

export default App;
