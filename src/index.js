import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './Assets/Context';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ad6goslkxzeg4e56.us.auth0.com"
    clientId="hQzP7ccpUSDONe9qaHkH2CRD4qMqw5R9"
    redirectUri={window.location.origin}
  >
    <ContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ContextProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
