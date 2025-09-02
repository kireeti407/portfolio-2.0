import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import GitHubSection from './components/Sections/GitHubSection';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import ChatBot from './components/AIAssistant/ChatBot';

function App() {
 
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
  <About />
  <GitHubSection />
  <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;