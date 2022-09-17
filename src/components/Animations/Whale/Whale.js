/* eslint-disable prettier/prettier */
import React from 'react'
import imagen from './h-hands.png';
import imagen2 from './h-heart.png';
import '../style.css';

function App() {
    return (
        <div className="healthcare-animation">
            <img src={imagen} className="h-hands" alt="Manos" />
            <img src={imagen2} className="h-heart" alt="Corazon" />
        </div>
    );
}

export default App;
