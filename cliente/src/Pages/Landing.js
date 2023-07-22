import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {

    return (
        <div className='container cont-portada'>
            <div className='borde'>
                <div className='cont-info'>
                    <h2>BIENVENIDOS A</h2>
                    <h3>"GESTOR DE PRODUCTOS"</h3>
                    <p>Bienvenido a nuestra página para la gestión de productos en venta, aquí encontrarás una lista de productos categorizados con todos sus detalles, precios y descripciones.</p>

                </div>
                <div className='cont-lista'>
                    <img src='images/portatilg.png'></img>
                    <Link to="/listaproductos"><li>Ingresar</li></Link>
                </div>
            </div>
        </div>
    )
}
export default Landing