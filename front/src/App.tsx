import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import { Routes } from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}

export default App;
