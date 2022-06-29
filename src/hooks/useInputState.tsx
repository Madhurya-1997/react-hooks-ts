import * as React from 'react';

export function useInputState(initialValue: string = '') {
  const [value, setValue] = React.useState(initialValue);

  const updateValue = (e: any) => setValue(e.target.value);

  const resetValue = () => setValue('');

  return [value, updateValue, resetValue];
}
