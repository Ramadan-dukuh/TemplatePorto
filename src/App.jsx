import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone } from 'lucide-react';

import './App.css'
import Header from './components/Header'
import HeroSection from './components/Hero'
import AboutSection from './components/About'
import ProjectsSection from './components/Projects'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
    </>
  )
}

export default App
