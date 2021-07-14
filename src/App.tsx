import React, { useState } from 'react';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [isCounter, setIsCounter] = useState(false);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        Counter:
        {counter}
      </p>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setIsCounter(!isCounter);
        }}
      >
        Show counter
      </button>
    </div>
  );
};

export default App;
