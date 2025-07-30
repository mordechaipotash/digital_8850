import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PersonalSection } from './PersonalSection';
import { BenefitsSection } from './BenefitsSection';
import { CertificationSection } from './CertificationSection';
import { LanguageSelector } from './LanguageSelector';
import { ApplicationFormData } from '../types/FormData';
import { saveFormSubmission } from '../lib/supabase';

interface FormProps {
  companyName: string;
}

export const Form: React.FC<FormProps> = ({ companyName }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [formStartTime] = useState(new Date().toISOString());
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    dob: '',
    snapBenefits: '',
    snapPrimaryRecipient: '',
    snapRecipientName: '',
    snapBenefitCity: '',
    snapBenefitState: '',
    tanfBenefits: '',
    tanfNineMonths: '',
    tanfRecipientName: '',
    tanfBenefitCity: '',
    tanfBenefitState: '',
    ssiBenefits: '',
    unemploymentBenefits: '',
    unemploymentState: '',
    signature_url: '',
    formStartTime: formStartTime
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignatureSave = (signatureData: string) => {
    setFormData(prev => ({
      ...prev,
      signature_url: signatureData
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await saveFormSubmission(formData, formData.signature_url);
      
      if (result.error) {
        setError('Failed to submit form. Please try again.');
        console.error('Form submission error:', result.error);
        return;
      }

      // Navigate to thank you page on success
      navigate('/thank-you');
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] pb-12">
      {/* Language Selector */}
      <LanguageSelector />

      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('form.title')}
            </h1>
            <p className="text-gray-600">
              {t('form.subtitle')}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <PersonalSection 
              formData={formData}
              onChange={handleChange}
            />

            {/* Benefits Information */}
            <BenefitsSection 
              formData={formData}
              onChange={handleChange}
            />

            {/* Certification */}
            <CertificationSection 
              formData={formData}
              onChange={handleChange}
              handleSignatureSave={handleSignatureSave}
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!formData.signature_url}
                className={`
                  px-6 py-3 rounded-lg text-white font-medium
                  ${formData.signature_url 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'}
                  transition-colors duration-200
                `}
              >
                {t('form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form; 