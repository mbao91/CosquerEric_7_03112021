'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'john@email.com',
        uuid: 'ee21aeea-daab-455a-b46b-7f561dd0c92c',
        role: "admin",
        createAt: '2021-12-12T17:47:00.000Z',
        updatedAt: '2021-12-12T17:47:00.000Z'
      }, {
        name: 'Jane Doe',
        email: 'jane@email.com',
        uuid: 'ee21aeea-daab-455a-b46b-7fkdnlkfc92c',
        role: "admin",
        createAt: '2021-12-12T17:47:00.000Z',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
