require('dotenv').config({ path: '../.env' });
const { supabase } = require('../config/supabase');
const fs = require('fs');
const path = require('path');

const addProjects = async () => {
  try {
    const desktopPath = "C:\\Users\\shlok\\OneDrive\\Desktop";
    // We assume this script runs from server/scripts
    const publicAssetsPath = path.join(__dirname, '../../client/public/assets/reports');

    // Ensure assets/reports directory exists
    if (!fs.existsSync(publicAssetsPath)) {
      fs.mkdirSync(publicAssetsPath, { recursive: true });
    }

    const file1Name = "Research paper with plag report.pdf";
    const file2Name = "CP_Report[1]_FINAL[1].docx";

    // Copy files
    const file1Src = path.join(desktopPath, file1Name);
    const file2Src = path.join(desktopPath, file2Name);

    const safeFile1Name = "Smart_Doorbell_Report.pdf";
    const safeFile2Name = "CP_Report_FINAL.docx";

    const file1Dest = path.join(publicAssetsPath, safeFile1Name);
    const file2Dest = path.join(publicAssetsPath, safeFile2Name);

    let copied1 = false;
    let copied2 = false;

    if (fs.existsSync(file1Src)) {
      fs.copyFileSync(file1Src, file1Dest);
      console.log(`✅ Copied ${file1Name} to client/public/assets/reports`);
      copied1 = true;
    } else {
      console.log(`⚠️ Warning: Could not find ${file1Src}. Please copy it manually to client/public/assets/reports/${safeFile1Name}`);
    }

    if (fs.existsSync(file2Src)) {
      fs.copyFileSync(file2Src, file2Dest);
      console.log(`✅ Copied ${file2Name} to client/public/assets/reports`);
      copied2 = true;
    } else {
      console.log(`⚠️ Warning: Could not find ${file2Src}. Please copy it manually to client/public/assets/reports/${safeFile2Name}`);
    }

    const newProjects = [
      {
        title: 'Smart Doorbell System',
        description: 'An IoT-based smart doorbell system with real-time notifications. (Report attached)',
        tech_stack: ['Arduino', 'ESP32', 'IoT', 'C++'],
        report_url: `/assets/reports/${safeFile1Name}`,
        featured: true
      },
      {
        title: 'Full-Stack Web Application',
        description: 'A comprehensive frontend and backend project detailing the complete development lifecycle. (Report attached)',
        tech_stack: ['React', 'Node.js', 'Express', 'Supabase'],
        report_url: `/assets/reports/${safeFile2Name}`,
        featured: true
      }
    ];

    console.log('Adding projects to Supabase database...');
    const { data, error } = await supabase.from('projects').insert(newProjects).select();

    if (error) {
      if (error.message.includes('report_url')) {
        console.error('❌ Database Error: The "report_url" column might be missing from your "projects" table in Supabase.');
        console.error('Please add a "report_url" column (type: text) to your "projects" table and run this script again.');
      } else {
        throw error;
      }
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
