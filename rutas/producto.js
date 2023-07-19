const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const multer = require('multer')
const sharp = require('sharp')

const eschemaproducto = new eschema({
    codigo: String,
    nombre: String,
    categoria: String,
    precio: String,
    descripcion: String,
    file: String
})

const ModeloProducto = mongoose.model('productos', eschemaproducto)

module.exports = router

// --------------------------------------- Vaina pa subir fotos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file) {
            cb(null, './cliente/public/uploads')
        }
    },
    filename: (req, file, cb) => {
        if (file) {
            const ext = file.originalname.split('.').pop()
            cb(null, `${Date.now()}.${ext}`)
        }
    }
})

const upload = multer({ storage })

const helperImg = (filePath, filename, size = 900) => {
    return WaveShaperNode(filePath)
        .resize(size)
        .toFile(`./cliente/public/uploads/${filename}`)
}

// ---------------------------------------


router.get('/obtenerproductos', async (req, res) => {

    const productos = await ModeloProducto.find()
    res.send(productos)
})

router.post('/agregarproducto', upload.single('file'), (req, res) => {

    let fileFinal = ""

    if (req.file) {
        fileFinal = req.file.filename
    }

    const nuevoproducto = new ModeloProducto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: fileFinal
    })
    nuevoproducto.save()

    res.end('Producto Agregado')
})

router.post('/borrarproducto', async (req, res) => {
    console.log(req.body)
    await ModeloProducto.findOneAndDelete({ codigo: req.body.codigo })

    res.end('Producto Eliminado')
})

router.post('/editarproducto', async (req, res) => {
    console.log(req.body)
    const producto = await ModeloProducto.findOne({ codigo: req.body.codigo })

    res.send(producto)

})

router.post('/actualizarproducto', upload.single('file'), async (req, res) => {

    let fileFinal = req.body.imagen

    if (req.file) {
        fileFinal = req.file.filename
    }

    console.log(req.body)
    await ModeloProducto.findOneAndUpdate({ codigo: req.body.codigoAnterior }, {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: fileFinal
    })

    res.end('Producto actualizado')

})




