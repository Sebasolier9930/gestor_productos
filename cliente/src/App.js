import './App.css';
import Landing from'./Pages/Landing';
import ListaProductos from './Pages/ListaProductos';
import EditarProducto from './Pages/EditarProducto';
import AgregarProducto from './Pages/AgregarProducto';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="/">STORE SJO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/listaproductos">Lista productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/agregarproducto">Agregar productos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/listaproductos' element={<ListaProductos></ListaProductos>}></Route>
          <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>}></Route>
          <Route path='/editarproducto/:codigo' element={<EditarProducto></EditarProducto>}></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
