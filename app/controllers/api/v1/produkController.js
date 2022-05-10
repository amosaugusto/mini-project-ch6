const produkService = require("../../../services/produkService");

const listProduk = async (req, res) => {
    try {
        const produks = await produkService.findAll();
        res.status(200).json({
            status: "OK",
            produks,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateProduk = async (req, res) => {
    const produk = {
        id: req.params.id,
        name: req.body.name,
        updatedBy: req.user.email,
    };
    try {
        await produkService.updateById(produk);
        res.status(200).json({
            message: "Produk updated",
            data: produk,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteProduk = async (req, res) => {
    const produk = {
        id: req.params.id,
        deletedBy: req.user.email,
    };
    try {
        await produkService.deleteById(produk);
        res.status(200).json({
            message: "Produk deleted",
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

const createProduk = async (req, res) => {
    const produk = {
        name: req.body.name,
        createdBy: req.user.email,
    };
    try {
        await produkService.create(produk);
        res.status(201).json({
            message: "Produk created",
            data: produk,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createProduk,
    listProduk,
    updateProduk,
    deleteProduk
};