import React from 'react';
import { Tooltip } from './Tooltip';
import { useTranslation } from 'react-i18next';

interface YesNoSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  tooltip?: string;
  className?: string;
}

export const YesNoSelect: React.FC<YesNoSelectProps> = ({ 
  label,
  name, 
  value, 
  onChange, 
  required = false,
  tooltip,
  className = ''
}) => {
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const syntheticEvent = {
      target: {
        name: e.target.name,
        value: e.target.value
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(syntheticEvent);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {tooltip && <Tooltip text={tooltip} />}
      </div>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 pr-8 shadow-sm transition-colors
                 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
      >
        <option value="">{t('common.options.select')}</option>
        <option value="yes">{t('common.options.yes')}</option>
        <option value="no">{t('common.options.no')}</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};