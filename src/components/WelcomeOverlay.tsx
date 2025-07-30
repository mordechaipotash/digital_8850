import React from 'react';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface WelcomeOverlayProps {
  onStart: () => void;
}

export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Let's Get Started!
          </h1>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Clock className="w-6 h-6 flex-shrink-0 text-blue-600" />
              <p className="text-left">We just need a couple of quick answers—this will only take two minutes of your time..</p>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-blue-600" />
              <p className="text-left">Your responses are purely for process completion and won’t affect you negatively in any way.</p>
            </div>
          </div>

          <button
            onClick={onStart}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
          >
            <span>Let's Fill It Out Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
