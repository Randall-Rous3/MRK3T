'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'products',[
        { 
          userId: 3,
          name: 'carrots',
          price: 5,
          quantity: 6,
          description: 'yummy root vegetable',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
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
