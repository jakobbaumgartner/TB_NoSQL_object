const Events = sequelize.define('events'+userId, {
	// attributes
	date: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	},
	name: {
	  type: Sequelize.STRING,
	  allowNull: false
	  // allowNull defaults to true
	},
	type: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	locationLongitude: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	locationLatitude: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	status: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	icon: {
	  type: Sequelize.STRING,
	  allowNull: true
	  // allowNull defaults to true
	},
	urgency: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	movability: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	priority: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	  // allowNull defaults to true
	},
	other: {
	  type: Sequelize.STRING,
	  allowNull: true
	  // allowNull defaults to true
	}
	
  }, {
	// options
  });