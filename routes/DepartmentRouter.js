const Router = require('express').Router();
const controller = require('../controllers/DepartmentController');

Router.get('/', controller.GetAllDepartments);
Router.get('/info', controller.GetAllDepartmentsWithAllInfo);
Router.get('/:id', controller.GetDepartmentById);
Router.get('/info/:id', controller.GetDepartmentByIdWithAllInfo);
Router.put('/:id', controller.UpdateDepartmentDetails);
Router.delete('/:id', controller.DeleteDepartment);
Router.post('/', controller.CreateDepartment);

module.exports = Router;