const { supabase } = require('../config/supabase');

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and Supabase. Includes user authentication, shopping cart, and payment integration. Features an intuitive admin dashboard for managing inventory and orders.',
    tech_stack: ['React', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS'],
    github_url: 'https://github.com/example/ecommerce',
    live_url: 'https://ecommerce.example.com',
    image_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A sleek, drag-and-drop task management application designed for agile teams. Uses websockets for real-time updates and features a highly interactive kanban board.',
    tech_stack: ['React', 'Framer Motion', 'Firebase', 'Vite'],
    github_url: 'https://github.com/example/task-app',
    live_url: 'https://task-app.example.com',
    image_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    title: 'AI Image Generator',
    description: 'A wrapper application that leverages OpenAI API to generate images based on user prompts. Implements rate-limiting, user accounts, and a gallery of public generations.',
    tech_stack: ['Next.js', 'Supabase', 'Prisma', 'OpenAI API'],
    github_url: 'https://github.com/example/ai-image',
    live_url: 'https://ai-image.example.com',
    image_url: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    title: 'IoT Smart Home System',
    description: 'A comprehensive smart home ecosystem using ESP32 and MQTT protocol. Features real-time sensor monitoring, remote appliance control via a mobile dashboard, and automated climate adjustments.',
    tech_stack: ['ESP32', 'Arduino', 'MQTT', 'C++', 'IoT'],
    github_url: 'https://github.com/example/iot-home',
    live_url: '',
    image_url: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    title: 'FPGA Signal Processor',
    description: 'High-speed digital signal processing unit implemented on an FPGA. Handles real-time audio filtering and FFT analysis with minimal latency.',
    tech_stack: ['Verilog', 'VHDL', 'FPGA', 'Vivado', 'Signal Processing'],
    github_url: 'https://github.com/example/fpga-dsp',
    live_url: '',
    image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  }
];

const seedDB = async () => {
  try {
    console.log('Starting Supabase seed...');
    
    // Delete existing projects
    const { error: deleteError } = await supabase
      .from('projects')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (deleteError) throw deleteError;
    console.log('Cleared existing projects.');

    // Insert new projects
    const { error: insertError } = await supabase
      .from('projects')
      .insert(sampleProjects);

    if (insertError) throw insertError;
    console.log('✅ Successfully seeded Supabase with project data!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to seed database:', error.message);
    process.exit(1);
  }
};

seedDB();
