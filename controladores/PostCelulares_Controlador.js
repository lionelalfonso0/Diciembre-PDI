const Celulares = require('../modelos/celulares_modelos');

const AñadirCelulares = async (req, res) => {
    try {
        const { marca, modelo, gama, precio } = req.body;
        const NuevoCel = await Celulares.create({
            marca,
            modelo,
            gama,
            precio
        });
        res.json(NuevoCel);
    } catch (error) {
        console.error('Error al crear el producto', error);
        res.status(400).json({ error: 'No se pudo agregar',details: error.message });
    }
};


module.exports = AñadirCelulares;