'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.createTable('Files', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        originalFileName: {
          type: Sequelize.STRING(191)
        },
        serverFileName: {
          type: Sequelize.STRING(191)
        },
        path: {
          type: Sequelize.STRING(191)
        },
        mimeType: {
          type: Sequelize.STRING(191)
        },
        size: {
          type: Sequelize.INTEGER
        },
      },{
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }),
      await queryInterface.addColumn('Files', 'productId', {
        type: Sequelize.INTEGER
      }),
      await queryInterface.sequelize.query(
        'alter table Files add FOREIGN KEY(productId) REFERENCES Products(id) ON DELETE CASCADE;'
      )
    ])
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([
        await queryInterface.removeColumn('Files', 'productId'),
        await queryInterface.dropTable('Files')
      
    ])
  }
};