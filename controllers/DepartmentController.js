const { Department, User } = require('../models');

const CreateDepartment = async (req, res) => {
    try {
      let newDepartment = await Department.create(req.body);
      res.send(newDepartment);
    } catch (error) {
      throw error;
    }
  };

const GetAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.send(departments);
  } catch (error) {
    throw error;
  }
};

const GetAllDepartmentsWithAllInfo = async (req, res) => {
  try {
    const departmentsAndInfo = await Department.findAll({
      include: [
        { model: User, as: 'owner' },
      ]
    });
    res.send(departmentsAndInfo);
  } catch (error) {
    throw error;
  }
};

const GetDepartmentById = async (req, res) => {
  try {
    let departmentId = parseInt(req.params.id);
    const department = await Department.findOne({
      where: { id: departmentId }
    });
    res.send(department);
  } catch (error) {
    throw error;
  }
};

const GetDepartmentByIdWithAllInfo = async (req, res) => {
  try {
    let departmentId = parseInt(req.params.id);
    const departmentAndInfo = await Department.findOne({
      where: { id: departmentId },
      include: [
        { model: User, as: 'owner' },
      ]
    });
    res.send(userAndInfo);
  } catch (error) {
    throw error;
  }
};

const UpdateDepartmentDetails = async (req, res) => {
  try {
    let departmentId = parseInt(req.params.id);
    let updatedDepartment = await Department.update(req.body, {
      where: { id: departmentId },
      returning: true
    });
    res.send(updatedDepartment);
  } catch (error) {
    throw error;
  }
};

const DeleteDepartment = async (req, res) => {
  try {
    let departmentId = parseInt(req.params.id);
    await Department.destroy({ where: { id: departmentId } });
    res.send(`Deleted user with an id of ${departmentId}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllDepartments,
  GetAllDepartmentsWithAllInfo,
  GetDepartmentById,
  GetDepartmentByIdWithAllInfo,
  UpdateDepartmentDetails,
  DeleteDepartment,
  CreateDepartment
};