import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Swal from 'sweetalert2'
import clienteAxios from '../components/axios/ClienteAxios'
import { useNavigate } from 'react-router-dom'
function EditarProducto() {
    const navigate = useNavigate();
    const params = useParams()

    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')
    const [file, setFileN] = useState('')

    useEffect(() => {
        axios.post('https://storsjo.onrender.com/api/producto/editarproducto', { codigo: params.codigo })
            .then(res => {
                console.log(res.data[0])

                const dataproducto = res.data

                setCodigo(dataproducto.codigo)
                setNombre(dataproducto.nombre)
                setCategoria(dataproducto.categoria)
                setPrecio(dataproducto.precio)
                setDescripcion(dataproducto.descripcion)
                setImagen(dataproducto.file)
            })
        console.log(params)
    }, [])

    const codigoAnterior = params.codigo

    function editarProducto() {
        const actualizarproducto = {
            codigoAnterior: codigoAnterior,
            codigo: codigo,
            categoria: categoria,
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            imagen: imagen,
            file: file
        }
        if (codigo !== '' && nombre !== '' && categoria !== '' && precio !== '' && descripcion !== '') {
            clienteAxios.post('https://storsjo.onrender.com/api/producto/actualizarproducto', actualizarproducto)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto Editado.',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F66A0D'
                    })
                        .then(response => {
                            navigate('/listaProductos')
                        })
                })
        } else {
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
            <div className='container cont-fondo pt-5'>
                <h3>Editar producto</h3>

                <form className='mt-3'>
                    <div className="mb-3">
                        <label className="form-label">Codigo</label>
                        <input type="text" className="form-control" value={codigo} onChange={(e) => { setCodigo(e.target.value) }} />
                    </div>
                    <div className='mb-3 cont-img cont-input-img'>

                        <div>
                            <label className="form-label">Imagen</label>
                            <input type="file" className="form-control" onChange={(e) => { setFileN(e.target.files[0]) }} />
                        </div>
                        <img src={imagen ? "https://storsjo.onrender.com/" + imagen : "https://storsjo.onrender.com/imagen_por_defecto.jpg"}></img>
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
                        <textarea type="text" className="form-control" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} />
                    </div>

                    <button onClick={editarProducto} type="button" className="btn-editar-pr">Editar</button>
                </form>
            </div>
        </>
    )
}

export default EditarProducto