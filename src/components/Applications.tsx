import React from 'react';

const Applications: React.FC = () => {
  const applications = [
    {
      title: "Human-Computer Interaction",
      description: "Enhancing user experiences by allowing systems to respond appropriately to user emotions.",
      icon: "🖥️",
      examples: ["Adaptive user interfaces", "Sentiment-aware virtual assistants", "Educational software"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Surveillance & Security",
      description: "Identifying unusual emotional patterns that might indicate security threats or concerns.",
      icon: "🔒",
      examples: ["Airport security screening", "Public space monitoring", "Fraud detection systems"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mental Health Monitoring",
      description: "Tracking emotional states over time to assist in mental health treatment and research.",
      icon: "🧠",
      examples: ["Depression screening tools", "Therapy session analysis", "Mood tracking applications"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Customer Feedback Analysis",
      description: "Analyzing customer emotional responses to products, services, or marketing materials.",
      icon: "📊",
      examples: ["Retail shopping experience analysis", "Product testing", "Advertisement effectiveness"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const limitations = [
    {
      title: "Dataset Quality",
      description: "Accuracy is limited by the quality and diversity of training datasets",
      icon: "📁"
    },
    {
      title: "Environmental Factors",
      description: "Subject to lighting, angle, and occlusion issues",
      icon: "💡"
    },
    {
      title: "Hardware Requirements",
      description: "Real-time systems may lag on low-end hardware",
      icon: "🖥️"
    },
    {
      title: "Cultural Differences",
      description: "Emotional expressions vary across cultures, affecting accuracy",
      icon: "🌎"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {applications.map((app, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:transform hover:scale-[1.02]">
                <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl mr-4">
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{app.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{app.description}</p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example Use Cases:</h4>
                    <ul className="space-y-1">
                      {app.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Limitations
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              While emotion detection technology offers many benefits, it's important to understand its current limitations
              to set realistic expectations and guide future improvements.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {limitations.map((limit, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xl">
                    {limit.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{limit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{limit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Conclusion
            </h3>
            <div className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              <p className="mb-4">
                Emotion detection technology combines computer vision and machine learning to bridge the gap 
                between human emotional expression and computer understanding.
              </p>
              <p className="mb-4">
                The integration of OpenCV with Haar Cascade Classifiers provides a powerful foundation for 
                facial detection, while advanced neural networks enable accurate emotion classification.
              </p>
              <p>
                Despite current limitations, this technology continues to evolve rapidly, opening new 
                possibilities across healthcare, security, marketing, and human-computer interaction.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;