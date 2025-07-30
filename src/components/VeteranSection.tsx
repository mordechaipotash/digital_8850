import React from 'react';
import { FormSection } from './FormSection';
import { FormField } from './FormField';
import { YesNoSelect } from './YesNoSelect';
import { DateInput } from './DateInput';
import { ApplicationFormData } from '../types/FormData';

interface VeteranSectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VeteranSection: React.FC<VeteranSectionProps> = ({ formData, onChange }) => {
  return (
    <FormSection 
      title="Veteran Status" 
      tooltip="Information about military service and related benefits"
    >
      <div className="space-y-4">
        <FormField 
          label="Are you a veteran of the U.S. Armed Forces?"
          tooltip="Select 'Yes' if you served in active duty in the U.S. military"
        >
          <YesNoSelect
            label="Are you a veteran?"
            name="veteran"
            value={formData.veteran}
            onChange={onChange}
            required={true}
            tooltip="A veteran is a person who served in the active military, naval, or air service."
          />
        </FormField>

        {formData.veteran === 'yes' && (
          <>
            <FormField 
              label="Discharge Date"
            >
              <DateInput
                name="dischargeDate"
                value={formData.dischargeDate}
                onChange={onChange}
                required={true}
              />
            </FormField>

            <FormField 
              label="Service Start Date"
            >
              <DateInput
                name="serviceStartDate"
                value={formData.serviceStartDate}
                onChange={onChange}
                required={true}
              />
            </FormField>

            <FormField 
              label="Service End Date"
            >
              <DateInput
                name="serviceEndDate"
                value={formData.serviceEndDate}
                onChange={onChange}
                required={true}
              />
            </FormField>

            <YesNoSelect
              label="Are you a member of a family that received SNAP benefits for at least 3 months in the past 15 months?"
              name="veteranSnap"
              value={formData.veteranSnap}
              onChange={onChange}
              required={true}
              tooltip="SNAP benefits received by your family in the past 15 months may qualify you for additional benefits."
            />

            <YesNoSelect
              label="Are you the primary recipient of these benefits?"
              name="veteranPrimaryRecipient"
              value={formData.veteranPrimaryRecipient}
              onChange={onChange}
              required={true}
              tooltip="Indicate if you are the primary person receiving these benefits in your household."
            />

            <YesNoSelect
              label="Are you entitled to compensation for a service-connected disability?"
              name="veteranDisability"
              value={formData.veteranDisability}
              onChange={onChange}
              required={true}
              tooltip="A service-connected disability is an injury or illness that was incurred or aggravated during active military service."
            />

            <YesNoSelect
              label="Were you unemployed for a total of at least 6 months in the past year?"
              name="veteranUnemployed"
              value={formData.veteranUnemployed}
              onChange={onChange}
              required={true}
              tooltip="This includes any periods of unemployment, whether consecutive or not, that total 6 months or more."
            />
          </>
        )}
      </div>
    </FormSection>
  );
};