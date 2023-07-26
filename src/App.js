import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    // eslint-disable-next-line no-undef
    const [animals, setAnimals] = useState([]);

    const hanldeClick = () => {
        console.log('clicked');
        setAnimals([...animals, getRandomAnimal()]);    }
    return (
        <div>
            <button onClick={hanldeClick}>Add Animal</button>
            <h1>{animals}</h1>
        </div>
    );
}

export default App;
