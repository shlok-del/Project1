const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tech_stack: {
    type: DataTypes.JSON, // Array of strings e.g. ["React", "Node", "MySQL"]
    allowNull: true
  },
  github_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  live_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  report_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'projects',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false // not requested in schema, but we can omit
});

module.exports = Project;
