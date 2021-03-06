import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import theme from './themes/theme';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store} >
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
