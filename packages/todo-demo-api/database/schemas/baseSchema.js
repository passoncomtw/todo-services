const { Sequelize ,DataTypes } = require('sequelize');
const dayjs = require('dayjs');

module.exports = {
  createdAt: {
    filed: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      const rawValue = this.getDataValue('createdAt');
      return dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  updatedAt: {
    filed: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      const rawValue = this.getDataValue('createdAt');
      return dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  deletedAt: {
    filed: 'deleted_at',
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    get() {
      const rawValue = this.getDataValue('deletedAt');
      return rawValue ? dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss') : null;
    }
  },
};