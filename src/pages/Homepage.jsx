import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    
  return (
    <div  style={{ textAlign: 'center', marginTop: '50px', fontSize:'25px'}}>
      <h2 >Phase 5 React Basic Tasks</h2>
      <ul style={{listStyle:'none', lineHeight:'2.5'}}>
        <li><Link to="/greetings">Greetings</Link></li>
        <li><Link to="/counter-program">Counter Program</Link></li>
        <li><Link to="/real-time-input">Real-time Input</Link></li>    
         </ul>
    </div>
  );
};

export default HomePage;
