import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles'

/* Contexts */
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';

/* Assets */
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import logoPng from '../../assets/logo.png';

interface ICrendentails {
  username: string
  password: string
}

interface iRememberData {
  username: string;
  password: string;
  checkedVerification: boolean;
}

export const Login = () => {

  const {signIn} = useAuth();
  const { addToast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [type, setType] = useState('password');
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    let getCredentials = localStorage.getItem('@GetOrganized:CREDENTIALS');

    if (getCredentials) {
      let credentials =JSON.parse(getCredentials); 
      setUsername(credentials.username);
      setPassword(credentials.password);
      setRemember(credentials.checkedVerification);
    } 
     
  },[]);

  const handleSubmit = useCallback(async ({username, password}: ICrendentails) => {
    
    try {

      await signIn({
        login: username, 
        senha: password
      });      

      addToast({
        type: 'success',
        title: 'Logado com sucesso!',
        description: 'Bem vindo ao Get Organized!',
      });

      if (remember === true){
        let Credentials : iRememberData = {
          username: username,
          password: password,
          checkedVerification: true
        }
        localStorage.setItem('@GetOrganized:CREDENTIALS', JSON.stringify(Credentials));
      } else {
        localStorage.removeItem('@GetOrganized:CREDENTIALS');
      }

    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha de autenticação.',
        description: 'Verifique seu login e senha.',
      }); 
    }

  }, [addToast, remember, signIn]);

  const handleVisibleTextInput = useCallback(() => {
    if(type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }, [type]);

  const handleEnter = useCallback(({event, username, password}) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit({
        username, 
        password
      })
    }
}, [handleSubmit]);

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
            onKeyPress={(e) => handleEnter({
              event: e, 
              username, 
              password
            })}
          />
          <label>Senha</label>
          <div className="inputWrapper">
            <input 
              type={type} 
              placeholder="Coloque a senha aqui." 
              onChange={(e) => setPassword(e.target.value)}
              value={password}  
              onKeyPress={(e) => handleEnter({
                event: e, 
                username, 
                password
              })}
            />              
            <button onClick={() => handleVisibleTextInput()}>
              {type === 'password' ? <AiFillEye size={20}/> : <AiFillEyeInvisible size={20}/>}
            </button>
          </div>
          <div className="rememberMe">
            <button
              className="textButton"
              onClick={() => setRemember(oldValue => !oldValue)}
            >
              Lembrar-me
            </button>
            <label className="switch">
              <input 
                type="checkbox"
                checked = {remember === true}
                onChange={check => setRemember(check.target.checked)}
              />
              <span className="slider round"/>
            </label>            
          </div>
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
