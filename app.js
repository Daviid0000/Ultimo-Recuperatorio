// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const { env } = require('process');
const router = require('./routes/reserva.routes');
const helmet = require('helmet');
const morgan = require('morgan');



const app = express();
app.use(router)

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/reserva.routes'));
// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');

})

// Starting the server
app.listen(3000, () => console.log('Server on port', 3000));