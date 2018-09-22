const db = require('./config/db');
const app = require('./config/app');
const AlertaModel = require('./models/alerta');
const AlertaService = require('./services/alerta');

const alertaModel = new AlertaModel(db);
const alertaService = new AlertaService(alertaModel);

app.get('/', (req, res) => {
  res.send('API - C&A Hackathon');
});

app.get('/fila/push', async (req, res) => {
   res.json(await alertaService.findAlertaAberto());
});

app.post('/fila/push', async (req, res) => {
  res.json(await alertaService.updateChecked(req.body));
});

app.post('/api/notifications', async (req, res) => {
  console.log('\n/api/notifications');
  const alertaperdente = await alertaService.verificaAlertaAberto();
  if(!alertaperdente) {
    await alertaService.create(req.body);
  } else {
    console.log('\tNão é necessario um novo alerta...')
  }
  res.sendStatus(200);
});
