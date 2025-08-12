import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          <p className="text-gray-400 mb-8">Full Stack Developer & UI/UX Designer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 John Doe. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;