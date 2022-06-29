import * as React from 'react';

export function useToggle(initialState: boolean = false) {
  const [currentState, setCurrentState] = React.useState(initialState);

  const toggle = () => {
    setCurrentState(!currentState);
  };

  return [currentState, toggle];
}
