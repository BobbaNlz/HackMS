const { pick } = require('lodash');

class Alerta {

  constructor(connection){
    this.$connection = connection;
  }

  async create(properties) {
    const alerta = pick(properties,
      [
        'type', 'media_server_id', 'detected_at',
        'text', 'camera_id', 'url', 'url_m3u8',
        'image', 'justificativa', 'ativo'
      ]
    );

    const sql = `INSERT INTO tbl_alerta(type, media_server_id, detected_at, text,
    camera_id, url, url_m3u8, image, justificativa, ativo) VALUES(
      ${alerta.type},'${alerta.media_server_id}', '${alerta.detected_at}',
      '${alerta.text}', '${alerta.camera_id}', '${alerta.url}', '${alerta.url_m3u8}',
      '${alerta.image}', '${alerta.justificativa}', ${alerta.ativo}
    );`
    return this.$connection.query(sql);
  }

  async updateChecked(properties) {
    const alerta = pick(properties, ['id','justificativa']);
    const sql = `UPDATE tbl_alerta SET justificativa = '${alerta.justificativa}',
    ativo = 0 WHERE id = ${alerta.id}`;
    const result = await this.$connection.query(sql);
    return result.rowsAffected;
  }

  async findAlertaAberto() {
    const result = await this.$connection.query("SELECT * FROM [dbo].[tbl_alerta] WHERE ativo = 1");
    return result.recordset;
  }

  async verificaAlertaAberto() {
    const result = await this.$connection.query("SELECT * FROM [dbo].[tbl_alerta] WHERE ativo = 1");
    return result.recordset.length > 0 ? true : false;
  }

}

module.exports = Alerta;
