import React, { useState } from 'react';
import { TextField } from '@mui/material';
import '../Styling/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Username:', username);
    console.log('Password:', password);
    // Redirecionar para página após login
  };

  const handleCreateAccount = () => {
    // Redirecionar para a página de criação de conta
    console.log('Redirecionando para a página de criação de conta');
  };

  return (
    <div className="container">
      <h1>Página de Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome de usuário:</label>
          <TextField
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <TextField
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não possui uma conta?{' '}
        <a href='/create-account' onClick={handleCreateAccount}>
          Crie uma conta
        </a>
      </p>
    </div>
  );
}

export default Login;
