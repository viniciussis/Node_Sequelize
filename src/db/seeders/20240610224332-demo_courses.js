'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'API com Express',
        description: 'Curso de API com Express e MongoDB',
        initial_date: '2023-01-01',
        category_id: 1,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'SpringBoot',
        description: 'Curso de Java com Spring Framework',
        initial_date: '2023-01-01',
        category_id: 2,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Python Web com Django',
        description: 'Curso de aplicações web com Django',
        initial_date: '2023-01-01',
        category_id: 3,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Orientação a Objetos com C#',
        description: 'Curso de C#: coleções, arquivos e libs',
        initial_date: '2023-01-01',
        category_id: 4,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
