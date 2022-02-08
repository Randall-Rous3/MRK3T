'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'departments',[
        {
          name: 'Food',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7NmFlVuvdrdYExIj4eY6jAHaEK%26pid%3DApi&f=1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Beverage',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.BRKrrmQd-oYo70rnpsW9cQHaDC%26pid%3DApi&f=1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ware',
          image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.potterybarn.ca%2Fsite%2FPB%2FProduct%2520Images%2Fdakota-flatware-set-alt2_imgz.jpg%3Fresizeid%3D86%26resizeh%3D960%26resizew%3D960&f=1&nofb=1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
