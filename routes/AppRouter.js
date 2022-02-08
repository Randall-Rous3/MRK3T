const Router = require('express').Router();
const DepartmentRouter = require('./DepartmentRouter');
const UserRouter = require('./UserRouter');
const ProductRouter = require('./ProductRouter');

Router.use('/departments', DepartmentRouter);
Router.use('/users', UserRouter);
Router.use('/products', ProductRouter);

module.exports = Router;