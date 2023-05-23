import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'


const { Button, Input } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    
  },
  colors: {
    brand: {
      500: "#319795",
      600: "#2C7A7B",
    },
}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraBaseProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="Phonebook-in-progress-login-user">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ChakraBaseProvider>
);
