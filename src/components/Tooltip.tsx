import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="relative inline-block group ml-2">
      <HelpCircle className="h-4 w-4 text-gray-400" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-sm rounded shadow-lg z-50">
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};