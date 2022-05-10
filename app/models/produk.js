'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produk.init({
    id_user: DataTypes.INTEGER,
    nama_produk: DataTypes.STRING,
    harga_produk: DataTypes.INTEGER,
    desc_produk: DataTypes.STRING,
    img_produk: DataTypes.STRING,
    status_produk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};