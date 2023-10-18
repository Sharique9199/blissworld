import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopUpProvider } from './context/popUp';
import PopUpCart from './Page/PopUpCart/PopUpCart';
import { CartProvider } from './context/cart';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-1ysnxt3jj2wdfko6.us.auth0.com"
    clientId="cP8nG0oQ7ETNRYN82tENRpDWfaBKYAoS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <PopUpProvider>
      <CartProvider>
        <Toaster />
        <App />
      </CartProvider>
    </PopUpProvider>
  </BrowserRouter>
  </Auth0Provider>


);

