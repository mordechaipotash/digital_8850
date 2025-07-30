import React from 'react';

interface FormattedInputProps {
  type: 'ssn' | 'phone';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormattedInput: React.FC<FormattedInputProps> = ({
  type,
  name,
  value,
  onChange,
  required = false,
}) => {
  const formatValue = (input: string) => {
    const digits = input.replace(/\D/g, '');
    
    if (type === 'ssn') {
      if (digits.length <= 3) return digits;
      if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
    }
    
    if (type === 'phone') {
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
    
    return input;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatValue(e.target.value);
    e.target.value = formatted;
    onChange(e);
  };

  const getPattern = () => {
    if (type === 'ssn') return '^\\d{3}-\\d{2}-\\d{4}$';
    if (type === 'phone') return '^\\(\\d{3}\\) \\d{3}-\\d{4}$';
    return undefined;
  };

  const getPlaceholder = () => {
    if (type === 'ssn') return 'XXX-XX-XXXX';
    if (type === 'phone') return '(XXX) XXX-XXXX';
    return undefined;
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      pattern={getPattern()}
      placeholder={getPlaceholder()}
      required={required}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  );
};