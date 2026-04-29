const { validationResult } = require('express-validator');
const { supabase } = require('../config/supabase');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res, next) => {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProject = async (req, res, next) => {
  try {
    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        const err = new Error('Project not found');
        err.status = 404;
        throw err;
      }
      throw error;
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (Internal CMS use)
const createProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, tech_stack, github_url, live_url, image_url, report_url, featured } = req.body;

    const { data: project, error } = await supabase
      .from('projects')
      .insert([
        {
          title,
          description,
          tech_stack,
          github_url,
          live_url,
          image_url,
          report_url,
          featured,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
};
