import { useState } from 'react';

function App() {
    // eslint-disable-next-line no-undef
    const [count, setCount] = useState(0);

    const hanldeClick = () => {
        console.log('clicked');
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={hanldeClick}>Click me</button>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default App;
