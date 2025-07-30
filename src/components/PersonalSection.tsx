import React from 'react';
import { ApplicationFormData } from '../types/FormData';
import { FormField } from './FormField';
import { DateInput } from './DateInput';
import { useTranslation } from 'react-i18next';

interface PersonalSectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalSection: React.FC<PersonalSectionProps> = ({ formData, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('form.personalInfo.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label={t('form.personalInfo.firstName.label')}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          required
          placeholder={t('form.personalInfo.firstName.placeholder')}
        />
        
        <FormField
          label={t('form.personalInfo.lastName.label')}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          required
          placeholder={t('form.personalInfo.lastName.placeholder')}
        />
        
        <FormField
          label={t('form.personalInfo.dateOfBirth.label')}
          tooltip={t('form.personalInfo.dateOfBirth.tooltip')}
        >
          <DateInput
            name="dob"
            value={formData.dob}
            onChange={onChange}
            required
          />
        </FormField>
      </div>
    </div>
  );
};