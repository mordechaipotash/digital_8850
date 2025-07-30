import React from 'react';
import { FormSection } from './FormSection';
import { FormField } from './FormField';
import { YesNoSelect } from './YesNoSelect';
import { DateInput } from './DateInput';
import { ApplicationFormData } from '../types/FormData';

interface FelonySectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const FelonySection: React.FC<FelonySectionProps> = ({ formData, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e as any);
  };

  return (
    <FormSection 
      title="Felony Information" 
      tooltip="Information about any felony convictions in the past year"
    >
      <div className="space-y-6">
        <FormField 
          label="Were you convicted of a felony or released from prison after a felony conviction during the past year?"
          tooltip="This information is used solely for WOTC eligibility determination"
        >
          <YesNoSelect
            label="Have you been convicted of a felony?"
            name="felonyConviction"
            value={formData.felonyConviction}
            onChange={onChange}
            required={true}
            tooltip="Please indicate if you have ever been convicted of a felony."
          />
        </FormField>

        {formData.felonyConviction === 'yes' && (
          <>
            <FormField label="Date of Conviction">
              <DateInput
                name="convictionDate"
                value={formData.convictionDate}
                onChange={onChange}
                required={true}
              />
            </FormField>

            <FormField label="Date of Release">
              <DateInput
                name="releaseDate"
                value={formData.releaseDate}
                onChange={onChange}
                required={true}
              />
            </FormField>

            <FormField label="Type of Conviction">
              <select
                name="convictionType"
                value={formData.convictionType}
                onChange={handleSelectChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select...</option>
                <option value="federal">Federal</option>
                <option value="state">State</option>
                <option value="local">Local</option>
              </select>
            </FormField>
          </>
        )}
      </div>
    </FormSection>
  );
};