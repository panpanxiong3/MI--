var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":String,
    "productImage":String,
    "productNum":Number,
    "checked":String
});

module.exports = mongoose.model('Goods',produtSchema);
