'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING,
        length: 20,
      },
      password: {
        type: Sequelize.STRING,
        length: 200,
      },
      name: {
        type: Sequelize.STRING,
        length: 20,
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
        comment: '建立時間',
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        comment: '最近的修改時間',
      },
      deletedAt: {
        field: "deleted_at",
        allowNull: true,
        type: Sequelize.DATE,
        comment: '刪除時間',
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};