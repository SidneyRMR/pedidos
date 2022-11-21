import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Pedidos from './telas/telaPedidos'
import Clientes from './telas/telaClientes'
import Login from './telas/telaLogin'

function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/clientes/" element={<Clientes />} />
          <Route path="/clientes/pedidos/:id" element={<Pedidos />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
