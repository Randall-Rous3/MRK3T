const Router = require('express').Router();
const controller = require('../controllers/ProductController');

Router.get('/', controller.GetAllProducts);
Router.get('/info', controller.GetAllProductsWithVendor);
Router.get('/:id', controller.GetProductById);
Router.put('/:id', controller.UpdateProductDetails);
Router.delete('/:id', controller.DeleteProduct);
Router.post('/', controller.CreateProduct);

module.exports = Router;