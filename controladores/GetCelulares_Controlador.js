const Celulares = require('../modelos/celulares_modelos');

const obtenerCelulares = async (req, res) => {
    try {
        const celulares = await Celulares.findAll();
        res.json(celulares);
    } catch (error) {
        res.json({ error: 'No se pudo obtener', detalles: error.message });
    }
};


module.exports = obtenerCelulares;