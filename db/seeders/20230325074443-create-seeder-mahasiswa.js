'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('mahasiswas', [
      {
        'nama': "Henry",
        'nrp': "5025201131",
        'jurusan': "Teknik Informatika",
        'umur': 20,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'nama': "Rizky",
        'nrp': "5025201132",
        'jurusan': "Teknik Informatika",
        'umur': 21,
        'createdAt': new Date(),
        'updatedAt': new Date()
      }
    ], {});
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
