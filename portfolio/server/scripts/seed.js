const { createClient } = require('@supabase/supabase-client');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Define paths
const clientPublicDir = path.join(__dirname, '..', '..', 'client', 'public');
const reportsDir = path.join(clientPublicDir, 'reports');

// Source paths provided by user
const srcLibraryReport = 'C:\\Users\\shlok\\OneDrive\\Desktop\\CP_Report[1]_FINAL[1].docx';
const srcDoorbellReport = 'C:\\Users\\shlok\\OneDrive\\Desktop\\Research paper with plag report.pdf';

// Destination filenames
const destLibraryReportName = 'library_management_report.docx';
const destDoorbellReportName = 'doorbell_system_report.pdf';

const seedProjects = [
  {
    title: "Doorbell System for Deaf People",
    description: "An innovative assistive technology project designed to help hearing-impaired individuals. The system uses visual indicators and haptic feedback (vibrations) to alert the user when someone is at the door. Integrated with mobile notifications for remote alerts.",
    tech_stack: ["Arduino", "ESP32", "Embedded", "IoT", "C++"],
    github_url: "https://github.com/shlok-del",
    live_url: "",
    image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    report_url: `/reports/${destDoorbellReportName}`,
    featured: true
  },
  {
    title: "Library Management System",
    description: "A comprehensive digital solution for libraries to manage book inventory, member registrations, and borrowing processes. Features include real-time search, automated fine calculation, and a dashboard for librarians.",
    tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    github_url: "https://github.com/shlok-del",
    live_url: "",
    image_url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
    report_url: `/reports/${destLibraryReportName}`,
    featured: true
  }
];

async function seed() {
  try {
    console.log('📁 Setting up reports directory...');
    // Create reports directory if it doesn't exist
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    // Copy Library Management System report
    if (fs.existsSync(srcLibraryReport)) {
      console.log('📄 Copying Library Management System report...');
      fs.copyFileSync(srcLibraryReport, path.join(reportsDir, destLibraryReportName));
    } else {
      console.warn('⚠️ Warning: Library Management System report not found at source path.');
    }

    // Copy Doorbell System report
    if (fs.existsSync(srcDoorbellReport)) {
      console.log('📄 Copying Doorbell System report...');
      fs.copyFileSync(srcDoorbellReport, path.join(reportsDir, destDoorbellReportName));
    } else {
      console.warn('⚠️ Warning: Doorbell System report not found at source path.');
    }

    console.log('🌱 Seeding projects to Supabase...');
    const { data, error } = await supabase
      .from('projects')
      .insert(seedProjects);

    if (error) {
      console.error('❌ Error seeding projects:', error.message);
    } else {
      console.log('✅ Successfully added projects with report links!');
    }
  } catch (err) {
    console.error('❌ An error occurred:', err);
  }
}

seed();
