
import React, {useState} from 'react'

function CounterProgram() {
  
  const [count, setCount] = useState(0);

  
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize:'25px', Color:'green'}}>
      <h1>Counter:{count}</h1>
      <div>
        <button onClick={increment} style={{ marginRight: '10px', backgroundColor:'green',fontSize:'20px' }}>
          Increment
        </button>
        <button onClick={decrement} style={{ backgroundColor:'red',fontSize:'20px' }}>
          Decrement
        </button>
      </div>
    </div>
  );


}

export default CounterProgram