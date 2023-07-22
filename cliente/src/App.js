import './App.css';
import Landing from './Pages/Landing';
import ListaProductos from './Pages/ListaProductos';
import EditarProducto from './Pages/EditarProducto';
import AgregarProducto from './Pages/AgregarProducto';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/listaproductos' element={<ListaProductos></ListaProductos>}></Route>
        <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>}></Route>
        <Route path='/editarproducto/:codigo' element={<EditarProducto></EditarProducto>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
