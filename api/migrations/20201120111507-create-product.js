'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name:{
          type: Sequelize.STRING(191)
        },
        content:{
          type: Sequelize.TEXT('long')
        },
        tag:{
          type:Sequelize.STRING(191)
        },
        price:{
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }),
      await queryInterface.addColumn('Products', 'sellerId', {
        type: Sequelize.STRING(191)
      }),
      await queryInterface.sequelize.query(
        'alter table Products add FOREIGN KEY(sellerId) REFERENCES Users(id) ON DELETE CASCADE;'
      )
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};