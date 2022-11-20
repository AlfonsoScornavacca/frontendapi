import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Products from './Views/Products';
import Vendedores from './Views/Vendedores';
import Home from './Views/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact path='/'  element={<Home/>}/>
          <Route path='productos'  element={<Products/>}/>
          <Route path='vendedores' element={<Vendedores/>}/>
        </Route>
      </Routes>
  </BrowserRouter>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
