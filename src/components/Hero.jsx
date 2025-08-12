import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            Full Stack Developer & UI/UX Designer passionate about creating 
            <br className="hidden sm:block" />
            beautiful and functional digital experiences
          </p>
          
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;