import React, { useState } from 'react'
import Header from '../components/Header'
import Swal from 'sweetalert2'
import clienteAxios from '../components/axios/ClienteAxios'
function AgregarProducto() {

    // HOOKS
    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [file, setFile] = useState('')


    function addProducto() {

        let producto = {
            codigo: codigo,
            categoria: categoria,
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            file: file
        }
        console.log(file)

        if(codigo!=='' && nombre!=='' &&categoria!=='' &&precio!=='' &&descripcion!==''){
        Swal.fire({
            icon: 'success',
            title: 'Producto Agregado.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        })
            .then(response => {
                clienteAxios.post('http://localhost:5000/api/producto/agregarproducto', producto)
                    .then(res => {

                        window.location = '/listaProductos'

                    })
                    .then(err => { console.log(err) })
            })

    }
    else{
        Swal.fire({
            icon: 'warning',
            title: 'Por favor rellene todos los campos solicitados.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        })
    }
    }

    return (
        <>
            <Header></Header>
            <div className='container pt-5 cont-fondo'>
                <h3>Agregar un producto</h3>

                <form className='mt-3'>
                    <div className="mb-3">
                        <label className="form-label">Codigo</label>
                        <input type="text" className="form-control" value={codigo} onChange={(e) => { setCodigo(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Imagen</label>
                        <input type="file" className="form-control" onChange={(e) => { setFile(e.target.files[0]) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Categoria</label>
                        <input type="text" className="form-control" value={categoria} onChange={(e) => { setCategoria(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" value={precio} onChange={(e) => { setPrecio(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea className="form-control" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} />
                    </div>


                    <button onClick={addProducto} type="button" className="btn-editar-pr">Agregar producto</button>
                </form>
            </div>
        </>
    )
}

export default AgregarProducto