import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>You click { counter } times!</p>
      <button onClick={ () => setCounter(counter + 1) }>Click</button>
    </div>
  );
};

export default Counter;
