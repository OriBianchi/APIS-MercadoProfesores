/* eslint-disable prettier/prettier */
import React from 'react'
import imagen from './abeja.png';
import '../style.css';

function App() {
    return (
        <div className="App">
            <img src={imagen} className="bee" alt="Abeja" />
        </div>
    );
}

export default App;
