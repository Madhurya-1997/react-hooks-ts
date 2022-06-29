import * as React from 'react';
import { Toggler } from './hooks/Toggler';
import { useToggle } from './hooks/useToggle';

export default function Home() {
  const [count, setCount] = React.useState(0);
  const [isHappy, toggleIsHappy] = useToggle();
  return (
    <React.Fragment>
      <h1 onClick={toggleIsHappy}>{isHappy ? ':)' : ':('}</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Substract 1</button>
    </React.Fragment>
  );
}
