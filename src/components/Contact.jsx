import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';
import { useState } from 'react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Work Together</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and I'll 
              get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={20} />
                <span className="text-gray-700">john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-blue-600 mr-4" size={20} />
                <span className="text-gray-700">linkedin.com/in/johndoe</span>
              </div>
              <div className="flex items-center">
                <Github className="text-blue-600 mr-4" size={20} />
                <span className="text-gray-700">github.com/johndoe</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;