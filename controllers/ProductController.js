const { User, Product, ShoppinCart } = require('../models');

const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    throw error;
  }
};


const GetAllProductsWithVendor = async (req, res) => {
  try {
    const productsAndVendor = await Product.findAll({
      include: [{ model: User, as: 'owner' }]
    });
    res.send(productsAndVendor);
  } catch (error) {
    console.log(error);
  }
};


const CreateProduct = async (req, res) => {
  try {
    let newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (error) {
    throw error;
  }
};

const GetProductById = async (req, res) => {
    try {
      let productId = parseInt(req.params.id);
      const product = await Product.findOne({
        where: { id: productId }
      });
      res.send(product);
    } catch (error) {
      throw error;
    }
  };
const UpdateProductDetails = async (req, res) => {
  try {
    let productId = parseInt(req.params.id);
    let updatedProduct = await Product.update(req.body, {
      where: { id: productId },
      returning: true
    });
    res.send(updatedProduct);
  } catch (error) {
    throw error;
  }
};

const DeleteProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.id);
    await Product.destroy({ where: { id: productId } });
    res.send(`Deleted event with an id of ${productId}`);
  } catch (error) {
    throw error;
  }
};


module.exports = {
GetAllProducts,
GetAllProductsWithVendor,
CreateProduct,
UpdateProductDetails,
DeleteProduct,
GetProductById
};