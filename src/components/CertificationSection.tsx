import React from 'react';
import { ApplicationFormData } from '../types/FormData';
import SignaturePad from './SignaturePad';
import { useTranslation } from 'react-i18next';

interface CertificationSectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignatureSave: (signatureData: string) => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({
  formData,
  handleSignatureSave
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('form.certification.title')}</h2>

      <div className="space-y-6">
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700">
            {t('form.certification.text')}
          </p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {t('form.certification.signature.label')} <span className="text-red-500">*</span>
          </label>
          <div className="border rounded-lg p-4">
            <SignaturePad
              value={formData.signature_url}
              onChange={handleSignatureSave}
              required={true}
            />
            {!formData.signature_url && (
              <p className="mt-2 text-sm text-red-600">
                {t('form.certification.signature.warning')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};