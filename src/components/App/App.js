import React from 'react';
import './App.css';

import animals from './data';
import AnimalCard from '../AnimalCard/AnimalCard';

function App() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          key={animal.name}
          name={animal.name}
          size={animal.size}
          diet={animal.diet}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  );
}

export default App;
