import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import ClienteAxios from '../components/axios/ClienteAxios'

function ProductoIndividual({ producto }) {
    const navigate = useNavigate();
    function borrarProducto(codigo) {
        axios.post('https://storsjo.onrender.com/api/producto/borrarproducto', { codigo })

        Swal.fire({
            title: 'Producto Eliminado',
            icon: 'succes',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        })
            .then(response => {
                navigate('/listaProductos')
            })


    }
    console.log(producto)
    return (
        <div className='card'>

            <div className='cont-img'>

                <button className='btn-eliminar' onClick={() => { borrarProducto(producto.codigo) }}>X</button>

                <p>{producto.codigo}</p>

                <img src={producto.file ? "https://storsjo.onrender.com/" + producto.file : "https://storsjo.onrender.com/imagen_por_defecto.jpg"}></img>

            </div>

            <div className="cont-carta">

                <div className='info'>
                    <p className='categoria'>{producto.categoria}</p>
                    <p className='nombre'>{producto.nombre}</p>
                    <p className='precio'>$ {new Intl.NumberFormat().format(producto.precio)}</p>
                    <p className='descripcion'>{producto.descripcion}</p>

                </div>
                <div className='cont-edit'>
                    <Link to={`/editarproducto/${producto.codigo}`}><li className='btn-editar'>Editar</li></Link>
                </div>


            </div>
        </div>

    )
}

export default ProductoIndividual