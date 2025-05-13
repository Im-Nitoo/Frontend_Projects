import React, { useState } from 'react';

const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const workflowSteps = [
    {
      title: "Capture Image",
      description: "The process begins by capturing an image or video frame from a camera or existing media.",
      icon: "📷",
      color: "bg-blue-500"
    },
    {
      title: "Detect Face",
      description: "The Haar Cascade Classifier scans the image to locate and isolate human faces.",
      icon: "👤",
      color: "bg-purple-500"
    },
    {
      title: "Extract Region",
      description: "Once a face is detected, the facial region is extracted from the image for further analysis.",
      icon: "✂️",
      color: "bg-indigo-500"
    },
    {
      title: "Preprocess Image",
      description: "The extracted facial image is preprocessed (resized, normalized, etc.) to prepare it for the model.",
      icon: "🔧",
      color: "bg-green-500"
    },
    {
      title: "Classification",
      description: "The processed image is fed into a trained model to classify the emotion being expressed.",
      icon: "🧠",
      color: "bg-yellow-500"
    },
    {
      title: "Display Result",
      description: "The detected emotion is displayed, typically with a label overlay on the original image.",
      icon: "✅",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Workflow Overview
          </h2>
          
          <div className="mb-12">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="flex overflow-x-auto py-4 mb-8 scrollbar-hidden">
                <div className="flex space-x-4">
                  {workflowSteps.map((step, index) => (
                    <button
                      key={index}
                      className={`flex flex-col items-center min-w-[100px] p-3 rounded-lg transition-all ${
                        activeStep === index
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white mb-2`}>
                        <span>{index + 1}</span>
                      </div>
                      <span className={`text-sm font-medium ${
                        activeStep === index
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}>
                        {step.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${workflowSteps[activeStep].color} rounded-full flex items-center justify-center text-white mr-4`}>
                      <span className="text-2xl">{workflowSteps[activeStep].icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Step {activeStep + 1}: {workflowSteps[activeStep].title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {workflowSteps[activeStep].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <button 
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg disabled:opacity-50"
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                    >
                      ← Previous Step
                    </button>
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      onClick={() => setActiveStep(prev => Math.min(workflowSteps.length - 1, prev + 1))}
                      disabled={activeStep === workflowSteps.length - 1}
                    >
                      Next Step →
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technical Insight:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {activeStep === 0 && "Modern webcams or cameras capture high-resolution images that provide sufficient detail for facial analysis."}
                      {activeStep === 1 && "Haar Cascade uses a series of simple features (similar to Haar wavelets) to detect facial structures."}
                      {activeStep === 2 && "Region extraction typically includes padding to ensure the entire face is captured for analysis."}
                      {activeStep === 3 && "Preprocessing often includes resizing to a standard dimension, normalization, and sometimes grayscale conversion."}
                      {activeStep === 4 && "CNN-based models typically achieve the highest accuracy in emotion classification tasks."}
                      {activeStep === 5 && "Real-time systems can process and display results at 30+ frames per second on modern hardware."}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-[300px] flex items-center justify-center">
                  <img 
                    src={`https://images.pexels.com/photos/${2000 + activeStep * 1000}/pexels-photo-${2000 + activeStep * 1000}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                    alt={`Step ${activeStep + 1}: ${workflowSteps[activeStep].title}`}
                    className="max-w-full max-h-full object-contain rounded"
                    onError={(e) => {
                      // Fallback image if the generated URL doesn't work
                      e.currentTarget.src = "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              Complete Workflow In Action
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              The entire emotion detection process typically takes just milliseconds to complete on modern hardware,
              allowing for real-time analysis.
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;