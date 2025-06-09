const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de tareas
app.use('/api', taskRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
