import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const introSection = document.getElementById('introduction');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-80 h-80 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
            Emotion Detection & Classification
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Using OpenCV and Haar Cascade Classifier
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl">
              Explore Technology
            </button>
            <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700">
              View Applications
            </button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button 
              onClick={scrollToContent}
              className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <ChevronDown size={24} className="text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;