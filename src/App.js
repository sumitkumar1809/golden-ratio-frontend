import { ThemeProvider } from 'styled-components';
import MainBuilder from './routes/MainBuilder';
import theme from './theme';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainBuilder />
      </ThemeProvider>
    </>
  );
}

export default App;
