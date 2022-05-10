const produkRepository = require("../repositories/produkRepository");

module.exports = {
    findAll() {
        return produkRepository.getAll();
    },
    create(produk) {
        return produkRepository.create(produk);
    },
    updateById(produk) {
        return produkRepository.updateById(produk);
    },
    deleteById(produk) {
        return produkRepository.deleteById(produk);
    },
};