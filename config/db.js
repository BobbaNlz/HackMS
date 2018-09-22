const mssql = require('mssql');

const config = {
    user: 'grupo08hackams@cea-sql-server',
    password: 'Hackams01234',
    server: 'cea-sql-server.database.windows.net',
    database: 'cea_banco',
    options: {
        encrypt: true
    }
}

mssql.connect(config);

module.exports = mssql;
