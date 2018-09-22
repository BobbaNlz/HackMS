class AlertaService {

  constructor(model) {
    this.$model = model;
  }

  async create(alerta) {
    alerta.justificativa = "";
    alerta.ativo = 1;
    return this.$model.create(alerta);
  }

  async updateChecked(alerta) {
    return this.$model.updateChecked(alerta);
  }

  async findAlertaAberto() {
    return this.$model.findAlertaAberto();
  }

  async verificaAlertaAberto() {
    return this.$model.verificaAlertaAberto();
  }

}

module.exports = AlertaService;
