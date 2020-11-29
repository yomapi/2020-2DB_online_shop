'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        address: {
          type: Sequelize.STRING(191)
        },
        status: {
          type: Sequelize.STRING(191)
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
      await queryInterface.addColumn('Orders', 'sellerId', {
        type: Sequelize.STRING(191)
      }),
      await queryInterface.addColumn('Orders', 'productId', {
        type: Sequelize.INTEGER
      }),
      await queryInterface.addColumn('Orders', 'customerId', {
        type: Sequelize.STRING(191)
      }),
      await queryInterface.sequelize.query(
        'alter table Orders add FOREIGN KEY(sellerId) REFERENCES Users(id) ON DELETE CASCADE;'
      ),
      await queryInterface.sequelize.query(
        'alter table Orders add FOREIGN KEY(productId) REFERENCES Products(id) ON DELETE CASCADE;'
      ),
      await queryInterface.sequelize.query(
        'alter table Orders add FOREIGN KEY(customerId) REFERENCES Users(id) ON DELETE CASCADE;'
      )
    ])
    
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all[
      await queryInterface.removeColumn('Orders', 'sellerId'),
      await queryInterface.removeColumn('Orders', 'productId'),
      await queryInterface.removeColumn('Orders', 'userId'),
      await queryInterface.dropTable('Orders')
    ]
  }
};