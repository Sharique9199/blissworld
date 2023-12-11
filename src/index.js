import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopUpProvider } from './context/popUp';
import PopUpCart from './Page/PopUpCart/PopUpCart';
import { CartProvider } from './context/cart';
import { Toaster } from 'react-hot-toast';
// import { Auth0Provider } from '@auth0/auth0-react';
import { AuthContext } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <BrowserRouter>
      <PopUpProvider>
        <CartProvider>
          <Toaster />
          <App />
        </CartProvider>
      </PopUpProvider>
    </BrowserRouter>

  </AuthContext>



);

