

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incAction, decAction } from './redux';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incAction())}>Increment</button>
      <button onClick={() => dispatch(decAction())}>Decrement</button>
    </div>
  );
}

export default App;
