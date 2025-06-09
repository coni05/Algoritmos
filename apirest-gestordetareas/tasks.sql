-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestor_tareas;

-- Usar la base de datos
USE gestor_tareas;

-- Crear la tabla de tareas
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pendiente', 'en progreso', 'completada') DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
