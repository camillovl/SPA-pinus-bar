import React, { useState } from 'react';
import { TextField } from '@mui/material';

import '../Styling/createaccount.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de criação de conta aqui
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Date:', date);
    // Redirecionar para a página de login ou outra página apropriada
  };

  return (
    <div className="container">
      <h1>Criação de Conta</h1>
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
          <label htmlFor="email">Email:</label>
          <TextField
            class='username'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
        <div className="form-group">
          <label htmlFor="date">Data:</label>
          <TextField
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default CreateAccount;
