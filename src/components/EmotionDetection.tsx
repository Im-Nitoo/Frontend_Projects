import React from 'react';

const EmotionDetection: React.FC = () => {
  return (
    <section id="emotion-detection" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            What is Emotion Detection?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Understanding the Process
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Emotion detection is the process of identifying human emotions using visual, 
                  audio, or textual cues. This technology focuses primarily on facial expression 
                  analysis to determine emotional states.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Advanced computer vision algorithms analyze facial features to detect subtle changes 
                  that indicate different emotional states such as happiness, sadness, anger, surprise, 
                  and others.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Common Detected Emotions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emotion: "Happy", color: "bg-yellow-500" },
                    { emotion: "Sad", color: "bg-blue-500" },
                    { emotion: "Angry", color: "bg-red-500" },
                    { emotion: "Surprised", color: "bg-purple-500" },
                    { emotion: "Neutral", color: "bg-gray-500" },
                    { emotion: "Fearful", color: "bg-green-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="text-gray-700 dark:text-gray-300">{item.emotion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              The Science Behind Emotion Detection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow transition-transform hover:scale-105">
                <div className="h-1 bg-blue-500 rounded-t-lg -mt-4 mb-4"></div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Facial Feature Extraction</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Analyzing key points on the face to detect muscle movements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow transition-transform hover:scale-105">
                <div className="h-1 bg-purple-500 rounded-t-lg -mt-4 mb-4"></div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Pattern Recognition</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Comparing detected patterns with known emotional expressions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow transition-transform hover:scale-105">
                <div className="h-1 bg-indigo-500 rounded-t-lg -mt-4 mb-4"></div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Machine Learning</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Training models on thousands of examples to improve accuracy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#technology" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              Explore the Technology
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionDetection;