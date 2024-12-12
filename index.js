const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', require('./rutas/CelularesRutas'));

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
