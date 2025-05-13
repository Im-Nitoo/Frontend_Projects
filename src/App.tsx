import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EmotionDetection from './components/EmotionDetection';
import Technology from './components/Technology';
import Workflow from './components/Workflow';
import Applications from './components/Applications';
import Footer from './components/Footer';
import { observeElements } from './utils/animations';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for user preference in localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply the right theme class to HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    // Initialize animation observers after the component mounts
    observeElements();
    
    // Update page title
    document.title = "Emotion Detection & Classification | EmotionAI";
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <div className="animate-on-scroll opacity-0">
          <Introduction />
        </div>
        <div className="animate-on-scroll opacity-0">
          <EmotionDetection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Technology />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Workflow />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Applications />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;