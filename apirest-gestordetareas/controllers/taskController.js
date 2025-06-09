const Task = require('../models/taskModel');

// Obtener todas las tareas
exports.getAllTasks = (req, res) => {
  Task.getAllTasks((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Obtener una tarea por ID
exports.getTaskById = (req, res) => {
  const id = req.params.id;
  Task.getTaskById(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
      res.json(results[0]);
    }
  });
};

// Crear una nueva tarea
exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.createTask(newTask, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId, ...newTask });
    }
  });
};

// Actualizar una tarea existente
exports.updateTask = (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  Task.updateTask(id, updatedTask, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
      res.json({ id, ...updatedTask });
    }
  });
};

// Eliminar una tarea
exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.deleteTask(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
      res.json({ message: 'Tarea eliminada exitosamente' });
    }
  });
};
