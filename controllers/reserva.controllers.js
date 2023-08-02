// TODO: Crear controladores para cada una de las rutas de reserva.
const ctrl = {};

// ==========================================
//    Controladores para renderizar vistas
// ==========================================

// Obtener todas las reservas
ctrl.renderListaReservas = (req, res) => {
    res.render('listado-reserva')
}
// Formulario para crear una reserva
ctrl.renderNuevaReserva

// Formulario para editar una reserva
ctrl.renderEditarReserva,

// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.obtenerReservas

// Obtener una reserva
ctrl.obtenerUnaReservas

// Crear una reserva
ctrl.crearUnaReserva

// Actualizar una reserva
ctrl.actualizarReserva

// Eliminar una reserva de forma lógica
ctrl.eliminarUnaReserva


module.exports = ctrl;