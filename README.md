# IRS Form 8850 Application

A comprehensive, multi-language digital implementation of IRS Form 8850 (Pre-Screening Notice and Certification Request for the Work Opportunity Tax Credit) with electronic signature capabilities.

## Features

### 🌍 Multi-Language Support
- Complete translations in 6 languages:
  - English (EN)
  - Spanish (ES)
  - French (FR)
  - Haitian Creole (HT)
  - Korean (KO)
  - Russian (RU)
  - Chinese (ZH)
- Automatic language detection based on browser settings
- Manual language selection with persistent preference

### 📝 Complete Form Sections
1. **Personal Information**
   - Name, DOB, SSN
   - Address validation
   - Phone number formatting

2. **Benefits Eligibility**
   - SNAP (Food Stamps) benefits
   - TANF benefits with 9-month qualification
   - SSI benefits
   - State/local benefits

3. **Veteran Information**
   - Service dates
   - Disability status
   - Unemployment compensation
   - SNAP recipient status

4. **Felony Conviction**
   - Conviction date
   - Release date
   - Federal/state conviction type

5. **Vocational Rehabilitation**
   - Agency referral tracking
   - Rehabilitation plan status

6. **Employment Information**
   - Start date
   - Job position
   - Wage information

7. **Contact Information**
   - Phone numbers
   - Email address
   - Preferred contact method

### ✍️ Digital Signature
- Touch-enabled signature pad
- Mouse/trackpad support
- Clear and undo functionality
- Signature validation
- Secure storage in Supabase

### 🔒 Data Security
- Supabase integration for secure storage
- Row-level security policies
- Encrypted data transmission
- GDPR-compliant data handling

### 📱 Responsive Design
- Mobile-first approach
- Works on all devices
- Touch-optimized controls
- Accessible form fields

### ✅ Form Validation
- Real-time field validation
- Required field indicators
- Format validation (SSN, phone, dates)
- Error messages in selected language
- Prevention of invalid submissions

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
   Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## Database Schema

Create the following table in Supabase:

```sql
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  ssn TEXT NOT NULL,
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  county TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  telephone TEXT NOT NULL,
  
  -- Benefits
  snap_benefits BOOLEAN DEFAULT false,
  snap_primary_recipient TEXT,
  snap_city TEXT,
  snap_state TEXT,
  tanf_benefits BOOLEAN DEFAULT false,
  tanf_nine_months BOOLEAN DEFAULT false,
  tanf_recipient TEXT,
  ssi_benefits BOOLEAN DEFAULT false,
  state_benefits BOOLEAN DEFAULT false,
  state_program_name TEXT,
  
  -- Veteran Information
  veteran BOOLEAN DEFAULT false,
  va_disability BOOLEAN DEFAULT false,
  va_disability_6months BOOLEAN DEFAULT false,
  unemployed_6months BOOLEAN DEFAULT false,
  unemployed_4weeks BOOLEAN DEFAULT false,
  unemployed_compensation BOOLEAN DEFAULT false,
  unemployed_stop_date DATE,
  unemployed_start_date DATE,
  snap_6months BOOLEAN DEFAULT false,
  service_start_date DATE,
  service_end_date DATE,
  
  -- Other Information
  vocational_rehab BOOLEAN DEFAULT false,
  rehab_approved BOOLEAN DEFAULT false,
  rehab_agency TEXT,
  summer_youth BOOLEAN DEFAULT false,
  fsc_recipient BOOLEAN DEFAULT false,
  felony_conviction BOOLEAN DEFAULT false,
  conviction_date DATE,
  release_date DATE,
  conviction_federal BOOLEAN DEFAULT false,
  conviction_state BOOLEAN DEFAULT false,
  
  -- Employment
  start_date DATE,
  position TEXT,
  starting_wage DECIMAL(10,2),
  
  -- Contact
  email TEXT,
  contact_preference TEXT,
  
  -- Signature
  signature_data_url TEXT NOT NULL,
  signature_storage_path TEXT,
  
  -- Metadata
  language TEXT,
  submission_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  processing_status TEXT DEFAULT 'pending',
  ip_address INET
);

-- Enable RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting
CREATE POLICY "Enable insert for all users" ON form_submissions
FOR INSERT WITH CHECK (true);
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **React Signature Canvas** - Digital signatures
- **Supabase** - Backend and database
- **React Router** - Routing
- **Lucide React** - Icons

## Language Support

The application includes complete translations for all form fields, labels, error messages, and instructions. Language files are located in `src/locales/[language]/translation.json`.

To add a new language:
1. Create a new folder in `src/locales/`
2. Copy `translation.json` from an existing language
3. Translate all strings
4. Add the language code to `src/i18n.ts`

## Form Flow

1. User selects language (or auto-detected)
2. Welcome overlay with instructions
3. Multi-step form with progress indicators
4. Real-time validation
5. Digital signature capture
6. Review and submit
7. Thank you page with confirmation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**IRS Form 8850 Digital Application** - Making tax credit applications accessible and efficient. 📋✨