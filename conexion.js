const mongoose= require('mongoose')
//mongoose.connect('mongodb+srv://douglasdv210:1047471147@gestorproductos.rnn3m.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://sebastianolier99302:12345@gestor.ailit.mongodb.net/?retryWrites=true&w=majority')

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')})


module.exports = mongoose