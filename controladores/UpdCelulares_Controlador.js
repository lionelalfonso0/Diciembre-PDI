const Celulares = require('../modelos/celulares_modelos');

const actualizacion = async (req, res) => {
    const { marca, modelo } = req.params;
    const { precio } = req.body;

    try {
        const celus = await Celulares.findOne ({ where: { marca, modelo } });
        if (!celus) return res.json({ error: 'Celular no encontrado', detalles: error.message });
    
        celus.precio = precio;
        await celus.save();
        res.json(celus);
    } catch (error) {
        res.json({ error: 'No se pudo actualizar el precio', detalles: error.message });
    }
};

module.exports = actualizacion;