const db = require('../config/db');

// Obtener todas las tareas
exports.getAllTasks = (callback) => {
  db.query('SELECT * FROM tasks', callback);
};

// Obtener una tarea por ID
exports.getTaskById = (id, callback) => {
  db.query('SELECT * FROM tasks WHERE id = ?', [id], callback);
};

// Crear una nueva tarea
exports.createTask = (task, callback) => {
  db.query('INSERT INTO tasks SET ?', task, callback);
};

// Actualizar una tarea existente
exports.updateTask = (id, task, callback) => {
  db.query('UPDATE tasks SET ? WHERE id = ?', [task, id], callback);
};

// Eliminar una tarea
exports.deleteTask = (id, callback) => {
  db.query('DELETE FROM tasks WHERE id = ?', [id], callback);
};
