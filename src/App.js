import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    // eslint-disable-next-line no-undef
    const [animals, setAnimals] = useState([]);

    const renderAnimals = animals.map((animal, index) => {
            return <AnimalShow key={index} type={animal} />
    });

    const hanldeClick = () => {
        setAnimals([...animals, getRandomAnimal()]);    
    }

    return (
        <div className="app">
            <button onClick={hanldeClick}>Add Animal</button>
            <div className="animal-list">{renderAnimals}</div>
        </div>
    );
}

export default App;
