import React, { useState } from 'react';

const Technology: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: "OpenCV", icon: "🔍" },
    { title: "Haar Cascade", icon: "🔎" },
    { title: "Python", icon: "🐍" },
    { title: "CNN Models", icon: "🧠" }
  ];
  
  const tabContents = [
    {
      title: "OpenCV",
      description: "Open Source Computer Vision Library (OpenCV) is an open-source computer vision and machine learning software library. It provides a common infrastructure for computer vision applications and accelerates the use of machine perception in commercial products.",
      features: [
        "Real-time image processing",
        "Object detection and tracking",
        "Facial recognition capabilities",
        "Extensive image manipulation tools"
      ],
      imageSrc: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
    },
    {
      title: "Haar Cascade Classifier",
      description: "Haar Cascade is a machine learning-based approach where a cascade function is trained from many positive and negative images. It is used to detect objects in other images, particularly for face detection.",
      features: [
        "Fast detection algorithm",
        "Uses integral images for quick feature calculation",
        "Cascade of classifiers for efficient processing",
        "Pre-trained models available for common objects"
      ],
      imageSrc: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      title: "Python Implementation",
      description: "Python serves as the ideal programming language for implementing emotion detection systems due to its simplicity, readability, and extensive libraries for data science and machine learning.",
      features: [
        "Easy integration with OpenCV library",
        "Rich ecosystem of data science tools",
        "Simple syntax for rapid development",
        "Powerful machine learning frameworks"
      ],
      imageSrc: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
    },
    {
      title: "CNN Models",
      description: "Convolutional Neural Networks (CNNs) are deep learning algorithms that take an image input, assign importance to various features, and differentiate one from another. They're particularly useful for emotion classification.",
      features: [
        "Hierarchical feature extraction",
        "Spatial pattern recognition",
        "Transfer learning capabilities",
        "High accuracy in emotion classification"
      ],
      imageSrc: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Tools & Technologies Used
          </h2>
          
          <div className="mb-8">
            <div className="flex overflow-x-auto py-2 mb-4 scrollbar-hidden">
              <div className="flex space-x-2 mx-auto">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium min-w-[120px] transition-all ${
                      activeTab === index
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {tabContents[activeTab].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {tabContents[activeTab].description}
                  </p>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {tabContents[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-full min-h-[300px] bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={tabContents[activeTab].imageSrc}
                    alt={tabContents[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
              Technology Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
              These technologies work together to create a powerful emotion detection system.
              Here's how they integrate:
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                  <span className="text-3xl">🔍</span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">OpenCV</p>
              </div>
              <div className="hidden md:block text-blue-500">→</div>
              <div className="md:hidden text-blue-500">↓</div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-2">
                  <span className="text-3xl">🔎</span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Haar Cascade</p>
              </div>
              <div className="hidden md:block text-blue-500">→</div>
              <div className="md:hidden text-blue-500">↓</div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                  <span className="text-3xl">🧠</span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">CNN Models</p>
              </div>
              <div className="hidden md:block text-blue-500">→</div>
              <div className="md:hidden text-blue-500">↓</div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                  <span className="text-3xl">😊</span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Emotion Output</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;