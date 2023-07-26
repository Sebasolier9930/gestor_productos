const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')


const archivoBD = require('./conexion')

app.use(cors({
    origin: "https://storsjocartagena.onrender.com"
}))


app.use(express.json())
app.use(express.static(path.join(__dirname, 'uploads')))

const rutaproducto = require('./rutas/producto')
app.use('/api/producto', rutaproducto)


app.get('/', (req, res) => {
    res.end('Bienvenidos al server perrooo')
})

// configurar server basico
app.listen(5000, function(){
    console.log('Servidor corriendo')
})