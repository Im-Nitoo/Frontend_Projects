import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Introduction
          </h2>
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">The Role of Emotions</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1 mr-2"></div>
                    <p>Emotions play a key role in human communication</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1 mr-2"></div>
                    <p>Automated emotion detection helps in fields like healthcare, marketing, security</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500 mt-1 mr-2"></div>
                    <p>Goal: Detect and classify emotions using computer vision</p>
                  </li>
                </ul>
              </div>
              <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-inner">
                <img 
                  src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg" 
                  alt="People expressing different emotions" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Emotion Detection Matters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Understanding human emotions through automated systems opens up new possibilities across multiple industries. 
              From enhancing user experiences to providing valuable insights in healthcare and security, emotion detection 
              technology bridges the gap between human expression and computer understanding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Enhanced Interaction",
                  description: "Computers that understand emotions can provide more natural and personalized experiences",
                  color: "bg-blue-100 dark:bg-blue-900/30"
                },
                {
                  title: "Health Insights",
                  description: "Monitoring emotional states can provide valuable data for mental health professionals",
                  color: "bg-purple-100 dark:bg-purple-900/30"
                },
                {
                  title: "Security Applications",
                  description: "Detecting unusual emotional patterns can help identify potential security threats",
                  color: "bg-indigo-100 dark:bg-indigo-900/30"
                }
              ].map((item, index) => (
                <div key={index} className={`${item.color} p-6 rounded-lg shadow-md`}>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;