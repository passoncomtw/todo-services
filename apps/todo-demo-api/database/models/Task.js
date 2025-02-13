const dayjs = require("dayjs");
const baseSchema = require("../schemas/baseSchema");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      ...baseSchema,
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        comment: "任務 ID",
      },
      title: {
        field: "title",
        type: DataTypes.STRING,
      },
      comment: {
        field: "comment",
        type: DataTypes.STRING,
      },
      isCompleted: {
        field: "is_completed",
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        field: "is_deleted",
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      completedAt: {
        field: "completed_at",
        type: DataTypes.DATE,
        defaultValue: null,
        get() {
          const rawValue = this.getDataValue('completedAt');
          return rawValue ? dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss') : null;
        }
      },
      deadlineAt: {
        field: "deadline_at",
        type: DataTypes.DATE,
        defaultValue: null,
        get() {
          const rawValue = this.getDataValue('deadlineAt');
          return rawValue ? dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss') : null;
        }
      },
    }, {
    sequelize,
    tableName: "tasks",
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  });

  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      as: 'user',
      foreignKey: {
        name: "user_id",
      },
      onDelete: 'CASCADE',
    });
  };

  return Task;
};