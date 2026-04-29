const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { supabase } = require('../config/supabase');

const addProjects = async () => {
  try {
    const newProjects = [
      {
        title: 'Smart Doorbell System',
        description: 'An IoT-based smart doorbell system with real-time notifications. (Report attached)',
        tech_stack: ['Arduino', 'ESP32', 'IoT', 'C++'],
        report_url: '/assets/Research paper with plag report.pdf',
        featured: true
      },
      {
        title: 'Full-Stack Web Application',
        description: 'A comprehensive frontend and backend project detailing the complete development lifecycle. (Report attached)',
        tech_stack: ['React', 'Node.js', 'Express', 'Supabase'],
        report_url: '/assets/CP_Report[1]_FINAL[1].docx',
        featured: true
      }
    ];

    console.log('Adding projects to Supabase database...');
    const { data, error } = await supabase.from('projects').insert(newProjects).select();

    if (error) {
      throw error;
    } else {
      console.log('✅ Successfully added the two projects with clickable report links!');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to add projects:', error.message);
    process.exit(1);
  }
};

addProjects();
