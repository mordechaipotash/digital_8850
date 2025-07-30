import React from 'react';

interface FormSectionProps {
  title: string;
  tooltip?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  tooltip, 
  children
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {tooltip && (
          <div className="p-3 bg-blue-50 border border-blue-100 rounded-md text-sm text-blue-800">
            {tooltip}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};