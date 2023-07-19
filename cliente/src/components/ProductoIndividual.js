import React from 'react'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import ClienteAxios from '../components/axios/ClienteAxios'

function ProductoIndividual({producto}){

    function borrarProducto(codigo){
        axios.post('http://localhost:5000/api/producto/borrarproducto', {codigo})
        
        Swal.fire({
            title: 'Producto',
            text: 'Producto Eliminado',
            confirmButtonText: 'Ok'
        })
        .then(response =>{
            window.location ='/listaProductos'
            
        })

        
    }
console.log(producto)
    return(
        <div className='card'>

            <div className='cont-img'>
                
                <button className='btn-eliminar' onClick={() => { borrarProducto(producto.codigo) }}>X</button>
               
                <p>{producto.codigo}</p>

                <img src={ producto.file ? "uploads/"+producto.file : "uploads/imagen_por_defecto.jpg"}></img>

            </div>

            <div className="col-sm-6 offset-3">

                <div className='info'>
                    <p className='categoria'>{producto.categoria}</p>
                    <p className='nombre'>{producto.nombre}</p>
                    <p className='precio'>{producto.precio}</p>
                    <p className='descripcion'>{producto.descripcion}</p>

                </div>

               <Link to={`/editarproducto/${producto.codigo}`}><li className='btn btn-success mb-1'>Editar</li></Link> 
                
            </div>
        </div>

    )
}

export default ProductoIndividual