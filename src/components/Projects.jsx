import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      tags: ['React', 'Firebase', 'Material-UI']
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      tags: ['JavaScript', 'Chart.js', 'Weather API']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;