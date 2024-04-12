"use strict";
const baseSchema = require("../schemas/baseSchema");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tasks", {
      ...baseSchema,
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        comment: "任務 ID",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        comment: "任務抬頭",
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        defaultValue: null,
        comment: "任務內容",
        allowNull: true,
      },
      created_at: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        comment: '建立時間',
        allowNull: true,
      },
      updated_at: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        comment: '最近的修改時間',
        allowNull: true,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '刪除時間',
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: "任務是否完成",
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: "任務是否刪除",
      },
      completed_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        comment: "任務修改為 is_completed 時間",
      },
      deadline_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        comment: "任務預計完成時間",
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tasks");
  },
};
