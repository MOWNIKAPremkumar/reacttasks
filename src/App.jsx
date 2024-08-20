import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Greetings from './components/Greetings';
import CounterProgram from './components/CounterProgram';
import RealTimeInput from './components/RealTimeInput';



function App(){
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greetings" element={<Greetings/>} />
        <Route path="/counter-program" element={<CounterProgram />} />
        <Route path="/real-time-input" element={<RealTimeInput />} />
       
      </Routes>
    </Router>
    
  );
};

export default App;
