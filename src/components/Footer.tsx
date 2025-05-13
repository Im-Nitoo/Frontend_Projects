import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EmotionAI
              </h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                Advanced emotion detection & classification using cutting-edge computer vision technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
              <div>
                <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {['Introduction', 'Emotion Detection', 'Technology', 'Workflow', 'Applications'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  {['Documentation', 'Tutorials', 'API Reference', 'GitHub Repository'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="block">Email:</span>
                    <a href="" className="hover:text-white transition-colors">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Emotion Detection.</p>
            <div className="mt-2 flex justify-center space-x-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;