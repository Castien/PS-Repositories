import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipDetail from './components/StarshipDetail';

import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    getAllStarships()
      .then(data => setStarships(data))
      .catch(error => console.error("These are not the droids you're looking for:", error));
  }, []);

  const handleCardClick = (starship) => {
    setSelectedStarship(starship);
  };

  return (
    <div>
      <h1>Starships</h1>
      <h2>Once upon a time, on an API far, far away...</h2>
      <div className="starship-container">
        {starships.map(starship => (
          <div
            key={starship.url}
            className="starship-card"
            onClick={() => handleCardClick(starship)}
          >
            <p>{starship.name}</p>
          </div>
        ))}
      </div>
      {selectedStarship && (
        <StarshipDetail starship={selectedStarship} />
      )}
    </div>
  );
}

export default App;
