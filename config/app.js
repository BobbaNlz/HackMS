const app = require('express')();
const bodyParser = require('body-parser');
const PORTA = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORTA, function(){
  console.log('Rodando na porta ' + PORTA);
});

module.exports = app;
