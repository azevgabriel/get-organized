import { Container } from './styles'
import logoPng from '../../assets/logo.png';
import { useState } from 'react';

export const Home = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <div className="leftContainer">
        <img 
          src={logoPng} 
          alt="Logotipo da Get Organized"
        />
      </div>
      <div className="rightContainer">
        <div className="loginWrapper">
          <h1>Login</h1>
          <input 
            type="text" 
            placeholder="Coloque o nome de usuário aqui." 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}  
          />
          <button type="submit"> Entrar </button>
        </div>
      </div>
    </Container>
  );
};
