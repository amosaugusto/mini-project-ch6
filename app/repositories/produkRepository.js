const {
    Produk
} = require("../models");
const {
    Op,
    DATE
} = require("sequelize");
const res = require("express/lib/response");

module.exports = {
    getAll() {
        return Produk.findAll({
            where: {
                deleted_by: {
                    [Op.eq]: null,
                },
            },
        });
    },
    create(produk) {
        return Produk.create({
            name: produk.name,
            created_by: produk.createdBy,
            deleted_by: null,
            updated_by: produk.createdBy,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    },
    updateById(produk) {
        return Produk.findOne({
            where: {
                id: produk.id,
            },
        }).then((updatedProduk) => {
            if (!updatedProduk) return res.status(404).send();
            updatedProduk.update({
                name: produk.name,
                updated_by: produk.updatedBy,
                updatedAt: new Date(),
            });
        });
    },
    deleteById(produk) {
        return Produk.findOne({
            where: {
                id: produk.id,
            },
        }).then((deletedProduk) => {
            if (!deletedProduk) return res.status(404).send();
            deletedProduk.update({
                deleted_by: produk.deletedBy,
                updatedAt: new Date(),
            });
        });
    },
};