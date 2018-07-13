var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: String,
    apellido: String,
    apodo: String,
    edad: String,//fecha nacimiento
    telefono: String,
    cedula: String,
    genero: String,
    direccion: String,
    ciudad: String,
    pais: String,
    email: String,
    password: String,
    rol: String,
    Profesion: String,
    descripcion: String,
    rAlimenticias: String,
    cEspeciales: String,
    sCuantico: String,
    angel: String,
    estatus: String,
    img: String


});

module.exports = mongoose.model('user', UserSchema);
