import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, level: '90%' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, level: '85%' },
    { name: 'Backend Development', icon: <Database size={24} />, level: '80%' },
    { name: 'Mobile Development', icon: <Smartphone size={24} />, level: '75%' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a full-stack developer with 5+ years of experience creating web and mobile applications. 
              I love turning complex problems into simple, beautiful designs. When I'm not coding, 
              you'll find me exploring new technologies and contributing to open-source projects.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My goal is to build products that provide pixel-perfect, performant experiences 
              across all devices and browsers.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;