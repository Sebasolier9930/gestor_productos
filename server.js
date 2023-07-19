const express = require('express')
const app = express()
const cors =require('cors')

const archivoBD = require('./conexion')

app.use(cors({
    origin:"http://localhost:3000"
}))
//importanción del archivo de rutas y modelo usuario
const rutaproducto =require('./rutas/producto')

app.use(express.json())

app.use('/api/producto', rutaproducto)



/*const bodyParser =require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:'true'}))*/

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})