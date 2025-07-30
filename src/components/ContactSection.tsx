import React from 'react';
import { ApplicationFormData } from '../types/FormData';
import { FormField } from './FormField';
import { DateInput } from './DateInput';

interface ContactSectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          required
          placeholder="Enter your first name"
        />
        
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          required
          placeholder="Enter your last name"
        />
        
        <DateInput
          name="dob"
          value={formData.dob}
          onChange={onChange}
          required={true}
        />
      </div>
    </div>
  );
};