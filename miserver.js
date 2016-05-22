var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.future();
  var randomImage = faker.image.avatar();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContent,
    email: randomEmail,
    fecha: randomDate,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/posts', function (req, res){
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);  
})

app.listen(3000);
