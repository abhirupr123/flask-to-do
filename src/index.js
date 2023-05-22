import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './theme';
import { CssBaseline } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);

