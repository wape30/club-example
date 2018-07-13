var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema =  Schema({
  id_user: { type: Schema.ObjectId, ref: 'user'},
  nombre: String,
  descripcion: String,
  image: String,
  fechaC: String,
  direccion: String,
  telefono: String


});
module.exports = mongoose.model('empresa', EmpresaSchema);
