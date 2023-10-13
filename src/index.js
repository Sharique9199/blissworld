import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PopUpProvider } from './context/popUp';
import PopUpCart from './Page/PopUpCart/PopUpCart';
import { CartProvider } from './context/cart';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PopUpProvider>
      <CartProvider>
        <Toaster />
        <App />
      </CartProvider>
    </PopUpProvider>
  </BrowserRouter>


);

