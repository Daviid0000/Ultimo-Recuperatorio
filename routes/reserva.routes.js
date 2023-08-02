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
} = require('../controllers/reserva.controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
router.get('/lista-reservas', (req, res) => {
    res.send('Lista de reservas')
    
})

// Formulario para crear una reserva
router.get('/nueva-reserva', )

// Formulario para editar una reserva
router.get('/editar-reserva/:id', )

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/',);
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;