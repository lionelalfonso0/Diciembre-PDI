const Celulares = require('../modelos/celulares_modelos');

const Borrar = async (req, res) => {
    const { marca, modelo } = req.params;

    try {
        const eliminar = await Celulares.destroy ({ where: { marca, modelo } });
        if (!eliminar === 0) return res.json({ error: 'Celular no encontrado' });
       
        res.send();
        
    } catch (error) {
        res.json({ error: 'No se pudo eliminar' });
    }
};

module.exports = Borrar;