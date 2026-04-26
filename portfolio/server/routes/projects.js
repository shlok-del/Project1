const express = require('express');
const { body } = require('express-validator');
const { getProjects, getProject, createProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);

router.get('/:id', getProject);

// Create project validation
const createProjectValidation = [
  body('title').notEmpty().withMessage('Title is required').isLength({ max: 100 }),
  body('description').notEmpty().withMessage('Description is required'),
  body('tech_stack').optional().isArray().withMessage('Tech stack must be an array'),
  body('github_url').optional().isURL().withMessage('Must be a valid URL'),
  body('live_url').optional().isURL().withMessage('Must be a valid URL'),
  body('image_url').optional().isURL().withMessage('Must be a valid URL'),
  body('featured').optional().isBoolean(),
];

router.post('/', createProjectValidation, createProject);

module.exports = router;
