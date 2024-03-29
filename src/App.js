import React from 'react';
import {Decisions, Notify} from './components';
import DecisionsContextProvider from './context/DecisionsContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7798AB',
    },
    secondary: {
      main: '#C3DBC5',
    },
    background: {
      default: '#dfecf5',
      paper: '#fbfafa',
    },
  },
});
function App() {  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DecisionsContextProvider>
          <Notify/>
          <Decisions />
        </DecisionsContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
