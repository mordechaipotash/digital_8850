import React from 'react';
import { ApplicationFormData } from '../types/FormData';
import { FormField } from './FormField';
import { YesNoSelect } from './YesNoSelect';
import { useTranslation } from 'react-i18next';
import { StateSelect } from './StateSelect';

interface BenefitsSectionProps {
  formData: ApplicationFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ formData, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">{t('form.benefits.title')}</h2>
        <p className="text-sm text-gray-600 mt-1">{t('form.benefits.subtitle')}</p>
      </div>

      <div className="p-6 space-y-8">
        {/* SNAP Benefits Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('form.benefits.snap.title')}</h3>
          </div>

          <div className="space-y-6">
            <YesNoSelect
              label={t('form.benefits.snap.current.label')}
              name="snapBenefits"
              value={formData.snapBenefits}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.snap.tooltip')}
            />

            <YesNoSelect
              label={t('form.benefits.snap.past.label')}
              name="snapPrimaryRecipient"
              value={formData.snapPrimaryRecipient}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.snap.past.tooltip')}
            />

            {(formData.snapBenefits === 'yes' || formData.snapPrimaryRecipient === 'yes') && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-4">{t('form.benefits.snap.additional.info')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label={t('form.benefits.snap.recipient.name')}
                    type="text"
                    name="snapRecipientName"
                    value={formData.snapRecipientName}
                    onChange={onChange}
                    required={false}
                    tooltip={t('form.benefits.snap.recipient.tooltip')}
                  />
                  <FormField
                    label={t('form.benefits.snap.city')}
                    type="text"
                    name="snapBenefitCity"
                    value={formData.snapBenefitCity}
                    onChange={onChange}
                    required={false}
                    tooltip={t('form.benefits.snap.city.tooltip')}
                  />
                  <StateSelect
                    name="snapBenefitState"
                    value={formData.snapBenefitState}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const newValue = e.target.value;
                      onChange({
                        target: {
                          name: 'snapBenefitState',
                          value: newValue
                        }
                      } as React.ChangeEvent<HTMLInputElement>);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TANF Benefits Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('form.benefits.tanf.title')}</h3>
          </div>

          <div className="space-y-6">
            <YesNoSelect
              label={t('form.benefits.tanf.current.label')}
              name="tanfBenefits"
              value={formData.tanfBenefits}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.tanf.tooltip')}
            />

            <YesNoSelect
              label={t('form.benefits.tanf.past.label')}
              name="tanfNineMonths"
              value={formData.tanfNineMonths}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.tanf.nine.months.tooltip')}
            />

            {(formData.tanfBenefits === 'yes' || formData.tanfNineMonths === 'yes') && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-4">{t('form.benefits.tanf.additional.info')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label={t('form.benefits.tanf.recipient.name')}
                    type="text"
                    name="tanfRecipientName"
                    value={formData.tanfRecipientName}
                    onChange={onChange}
                    required={false}
                    tooltip={t('form.benefits.tanf.recipient.tooltip')}
                  />
                  <FormField
                    label={t('form.benefits.tanf.city')}
                    type="text"
                    name="tanfBenefitCity"
                    value={formData.tanfBenefitCity}
                    onChange={onChange}
                    required={false}
                    tooltip={t('form.benefits.tanf.city.tooltip')}
                  />
                  <StateSelect
                    name="tanfBenefitState"
                    value={formData.tanfBenefitState}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const newValue = e.target.value;
                      onChange({
                        target: {
                          name: 'tanfBenefitState',
                          value: newValue
                        }
                      } as React.ChangeEvent<HTMLInputElement>);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SSI Benefits Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('form.benefits.ssi.title')}</h3>
          </div>

          <div className="space-y-6">
            <YesNoSelect
              label={t('form.benefits.ssi.current.label')}
              name="ssiBenefits"
              value={formData.ssiBenefits}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.ssi.current.tooltip')}
            />
          </div>
        </div>

        {/* Unemployment Benefits Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{t('form.benefits.unemployment.title')}</h3>
          </div>

          <div className="space-y-6">
            <YesNoSelect
              label={t('form.benefits.unemployment.current.label')}
              name="unemploymentBenefits"
              value={formData.unemploymentBenefits}
              onChange={onChange}
              required={true}
              tooltip={t('form.benefits.unemployment.current.tooltip')}
            />

            {formData.unemploymentBenefits === 'yes' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-4">{t('form.benefits.unemployment.additional.info')}</p>
                <div className="grid grid-cols-1 gap-6">
                  <StateSelect
                    name="unemploymentState"
                    value={formData.unemploymentState}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const newValue = e.target.value;
                      onChange({
                        target: {
                          name: 'unemploymentState',
                          value: newValue
                        }
                      } as React.ChangeEvent<HTMLInputElement>);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};