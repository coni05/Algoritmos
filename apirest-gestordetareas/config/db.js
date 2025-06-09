const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',     // Dirección del servidor MySQL
  user: 'root',    // Tu usuario de MySQL
  password: '',
  database: 'gestor_tareas',  // Nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');

});


module.exports = connection;
