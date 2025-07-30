import React from 'react';
import { Form } from '../components/Form';
import { LanguageSelector } from '../components/LanguageSelector';

const FormPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LanguageSelector />
      <Form companyName="HCS" />
    </div>
  );
};

export default FormPage; 