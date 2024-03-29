import * as React from 'react';
import { useInputState } from './hooks/useInputState';

export default function Login() {
  const [username, updateUsername, resetUsername] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');
  const handleSubmit = () => {
    resetUsername();
    resetPassword();
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={updateUsername}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
