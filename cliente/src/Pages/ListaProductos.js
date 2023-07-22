import React, { useEffect, useState } from 'react'
import ProductoIndividual from '../components/ProductoIndividual'
import axios from 'axios'
import Header from '../components/Header'
function ListaProductos(){

    const[dataProductos, setDataProductos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/producto/obtenerproductos')
        .then(res => {
           // console.log(res.data)

            setDataProductos(res.data)
        })

    }, [])

    let listaproductos = dataProductos.sort((a, b) => a.codigo - b.codigo).map(producto => {
        return(
            <ProductoIndividual key={producto._id} producto={producto}></ProductoIndividual>
        )
    })




    return(
        <>
            <Header></Header>
        <div className='container cont-fondo'>
            <h3 className='pt-3 pb-4 mx-2'>Lista de productos</h3>
            
            <div className='cards'>
                {listaproductos.length !== 0 ? listaproductos : <p className='mt-3 mb-5'>No hay productos registrados</p>}
            </div>

        </div>
        </>
    )
}

export default ListaProductos