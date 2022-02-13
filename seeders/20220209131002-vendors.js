'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {  
    return await queryInterface.bulkInsert('users',
    [
      {
      name:'',
      departmentId: 2,
      address: '',
      image: '',
      
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
