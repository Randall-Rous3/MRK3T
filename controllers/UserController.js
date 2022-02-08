const { User, Product } = require('../models');

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetAllUsersWithAllInfo = async (req, res) => {
  try {
    const usersAndInfo = await User.findAll({
      include: [
        { model: Product, as: 'owner' },
      ]
    });
    res.send(usersAndInfo);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    const user = await User.findOne({
      where: { id: userId }
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const GetUserByIdWithAllInfo = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    const userAndInfo = await User.findOne({
      where: { id: userId },
      include: [
        { model: Product, as: 'owner' },
      ]
    });
    res.send(userAndInfo);
  } catch (error) {
    throw error;
  }
};

const UpdateUserDetails = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    await User.destroy({ where: { id: userId } });
    res.send(`Deleted user with an id of ${userId}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetAllUsersWithAllInfo,
  GetUserById,
  GetUserByIdWithAllInfo,
  UpdateUserDetails,
  DeleteUser
};
