import React, { useState } from 'react';
import axios from '../utils/axiosInstance';

const SignupLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      onSuccess(response.data.token); // Pass token back to parent component
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignupLogin;
