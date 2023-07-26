import './App.css';
import Landing from './Pages/Landing';
import ListaProductos from './Pages/ListaProductos';
import EditarProducto from './Pages/EditarProducto';
import AgregarProducto from './Pages/AgregarProducto';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
// import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router>

      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/listaproductos' element={<ListaProductos></ListaProductos>}></Route>
        <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>}></Route>
        <Route path='/editarproducto/:codigo' element={<EditarProducto></EditarProducto>}></Route>
      </Routes>
    </Router>


  );
}

export default App;
