// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const { Router } = require('express');
const router = Router();

const {
    renderListaReservas,
    renderNuevaReserva,
    renderEditarReserva,
    obtenerReservas, 
    obtenerUnaReserva,
    crearUnaReserva,
    actualizarReserva,
    eliminarUnaReserva
} = require('../controllers/reserva.controllers.js');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
router.get('/', renderListaReservas)

// Formulario para crear una reserva
router.get('/crear-reserva', renderNuevaReserva)

// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', renderEditarReserva) 

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', obtenerReservas);
 
// Obtener una sola reserva
router.get('/api/:id', obtenerUnaReserva);

// Crear una reserva
router.post('/api/', crearUnaReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarUnaReserva);

 
 module.exports = router;