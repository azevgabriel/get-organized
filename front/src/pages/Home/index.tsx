import { Container } from './styles'
import logoPng from '../../assets/logo.png';
import { useCallback, useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';

interface ICrendentails {
  username: string
  password: string
}

export const Home = () => {

  const {signIn} = useAuth();
  const { addToast } = useToast()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async ({username, password}: ICrendentails) => {
    
    try {
      await signIn({
        login: username, 
        senha: password
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha de autenticação.',
        description: 'Verifique seu login e senha.',
      }); 
    }

  }, [addToast, signIn]);

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
          <label>Usuário</label>
          <input 
            type="text" 
            placeholder="Coloque o nome de usuário aqui." 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label>Senha</label>
          <input 
            type="password" 
            placeholder="Coloque a senha aqui." 
            onChange={(e) => setPassword(e.target.value)}
            value={password}  
          />
          <button 
            onClick={() => handleSubmit({
              username, 
              password
            })}
          > 
            Entrar 
          </button>
        </div>
      </div>
    </Container>
  );
};
