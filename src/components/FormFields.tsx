import React, { useState } from 'react';
import { Save, Edit2, X, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  ssn: string;
  dob: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  ez_eligible: 'eligible' | 'not eligible' | 'flag' | '';
  wotc_eligible: 'eligible' | 'not eligible' | 'flag' | '';
  nyy_eligible: 'eligible' | 'not eligible' | 'flag' | '';
  hand_signed: 'yes' | 'no' | 'flag' | '';
  date_signed: 'yes' | 'no' | 'flag' | '';
  notes: string;
  [key: string]: string;
}

interface FormFieldsProps {
  data: FormData;
  onSave: (data: FormData) => void;
  saving?: boolean;
}

export function FormFields({ data, onSave, saving = false }: FormFieldsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  const eligibilityOptions = [
    { value: '', label: 'Select status' },
    { value: 'eligible', label: 'Eligible' },
    { value: 'not eligible', label: 'Not Eligible' },
    { value: 'flag', label: 'Flag for Review' }
  ];

  const yesNoOptions = [
    { value: '', label: 'Select option' },
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'flag', label: 'Flag for Review' }
  ];

  return (
    <div className="space-y-6">
      {/* Edit/Save Controls */}
      <div className="flex justify-end">
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              disabled={saving}
              className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 px-3 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            <Edit2 className="w-4 h-4" />
            Edit Fields
          </button>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Social Security Number
              </label>
              <input
                type="text"
                value={formData.ssn}
                onChange={(e) => handleChange('ssn', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                value={formData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Address</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              readOnly={!isEditing}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                isEditing ? 'bg-white' : 'bg-gray-50'
              } text-gray-900`}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleChange('state', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => handleChange('zip', e.target.value)}
                readOnly={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              />
            </div>
          </div>
        </div>

        {/* Eligibility Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Eligibility Status</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                EZ Program
              </label>
              <select
                value={formData.ez_eligible}
                onChange={(e) => handleChange('ez_eligible', e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              >
                {eligibilityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WOTC Program
              </label>
              <select
                value={formData.wotc_eligible}
                onChange={(e) => handleChange('wotc_eligible', e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              >
                {eligibilityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NYY Program
              </label>
              <select
                value={formData.nyy_eligible}
                onChange={(e) => handleChange('nyy_eligible', e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              >
                {eligibilityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Document Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Document Status</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hand Signed
              </label>
              <select
                value={formData.hand_signed}
                onChange={(e) => handleChange('hand_signed', e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              >
                {yesNoOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Signed
              </label>
              <select
                value={formData.date_signed}
                onChange={(e) => handleChange('date_signed', e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  isEditing ? 'bg-white' : 'bg-gray-50'
                } text-gray-900`}
              >
                {yesNoOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Additional Notes</h3>
          
          <div>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              readOnly={!isEditing}
              rows={4}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                isEditing ? 'bg-white' : 'bg-gray-50'
              } text-gray-900`}
              placeholder={isEditing ? "Enter any additional notes here..." : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}