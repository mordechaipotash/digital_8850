# Digital IRS Form 8850 - Multi-Language WOTC Application

**Production-ready digital implementation of IRS Form 8850** for Work Opportunity Tax Credit (WOTC) pre-screening with comprehensive internationalization support for 7 languages.

![Form Overview](.github/assets/Screenshot%202025-08-29%20at%2017.35.22.png)
*Multi-step form interface with real-time validation and language selector*

## 🎯 Overview

A complete React application that digitizes the complex IRS Form 8850 federal compliance form, enabling employers to efficiently screen job candidates for WOTC eligibility across diverse linguistic populations.

## 📊 Production Impact

- **7 languages** supported with complete translations
- **120+ hours** development time
- **Production-ready** with Supabase backend
- **Touch-enabled** digital signatures
- **Real-time validation** preventing submission errors
- **Accessibility-first** design for compliance

## 🌍 Internationalization Support

Complete translations across all form fields, validation messages, and instructions:

| Language | Code | Coverage |
|----------|------|----------|
| English | EN | 100% |
| Spanish | ES | 100% |
| French | FR | 100% |
| Haitian Creole | HT | 100% |
| Korean | KO | 100% |
| Russian | RU | 100% |
| Chinese | ZH | 100% |

![Multi-Language Support](.github/assets/Screenshot%202025-08-29%20at%2017.35.42.png)
*Language selector with 7 complete translations for diverse populations*

**Smart Language Detection**:
- Auto-detects browser language preference
- Manual language selector with persistent storage
- Dynamic form field updates without page reload
- Localized validation messages and error handling

## 🏗️ Technical Architecture

### Core Tech Stack
- **React 18** with TypeScript - Type-safe UI components
- **Vite** - Lightning-fast build tooling
- **Tailwind CSS** - Utility-first styling with custom theming
- **i18next** - Robust internationalization framework
- **Supabase** - PostgreSQL backend with Row-Level Security (RLS)
- **React Signature Canvas** - Touch-enabled signature capture

### Form Sections (Multi-Step Flow)

1. **Personal Information**
   - Name, DOB, SSN with format validation
   - Full address with county and state
   - Phone number with international formatting

2. **Benefits Eligibility Screening**
   - SNAP (Food Stamps) with primary recipient tracking
   - TANF (Temporary Assistance) with 9-month qualification
   - SSI (Supplemental Security Income)
   - State/local assistance programs

3. **Veteran Status & Service**
   - Military service dates with validation
   - VA disability certification (includes 6-month employment check)
   - Unemployment compensation tracking
   - SNAP recipient status for veterans

4. **Criminal Justice Screening**
   - Felony conviction date tracking
   - Federal vs. state conviction classification
   - Release date for eligibility calculation
   - Privacy-compliant secure storage

![Signature Capture](.github/assets/Screenshot%202025-08-29%20at%2017.36.16.png)
*Touch-enabled signature canvas with clear and redo functionality*

5. **Vocational Rehabilitation**
   - Agency referral documentation
   - Rehabilitation plan status
   - State agency tracking

6. **Employment Details**
   - Job start date validation
   - Position title and description
   - Starting wage information

7. **Contact & Preferences**
   - Multi-channel contact options
   - Preferred contact method
   - Email validation

8. **Digital Signature**
   - Touch/mouse signature pad
   - Clear and undo functionality
   - Signature required validation
   - Base64 encoding for secure storage

## 🔒 Security & Compliance

### Data Protection
- **Supabase RLS policies** restrict data access
- **Encrypted transmission** via HTTPS
- **PII handling** follows GDPR/CCPA guidelines
- **Signature storage** uses secure blob storage
- **No client-side PII caching**

### Validation & Quality
- **Real-time field validation** prevents invalid submissions
- **Required field enforcement** with visual indicators
- **Format validation** for SSN, phone, dates, ZIP codes
- **Conditional logic** shows/hides fields based on responses
- **Error messages** localized to selected language

## 🚀 Setup & Deployment

### Prerequisites
- Node.js ≥18.0.0
- Supabase account with project

### Installation

```bash
# Clone repository
git clone https://github.com/mordechaipotash/digital_8850.git
cd digital_8850

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Add your Supabase URL and anon key to .env

# Run development server
npm run dev
```

### Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Database Setup

Run this SQL in your Supabase SQL Editor:

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
  
  -- Benefits (SNAP, TANF, SSI)
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
  
  -- Other Eligibility
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

-- Enable Row-Level Security
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public form submissions
CREATE POLICY "Enable insert for all users" 
  ON form_submissions FOR INSERT 
  WITH CHECK (true);

-- Restrict reads to authenticated users only
CREATE POLICY "Enable read for authenticated users" 
  ON form_submissions FOR SELECT 
  USING (auth.role() = 'authenticated');
```

### Production Build

```bash
npm run build
```

Deploy the `dist` directory to:
- **Vercel**: Connect repo, set env vars, deploy
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **Cloudflare Pages**: Automatic deployment from GitHub

## 📱 Features Showcase

### Responsive Design
- Mobile-first approach optimized for phone/tablet completion
- Touch-optimized signature pad with pressure sensitivity
- Progressive form sections with visual progress tracking
- Works seamlessly on iOS, Android, desktop browsers

### Smart Validation
- **Real-time feedback** as users type
- **Conditional fields** appear/disappear based on answers
- **Date logic** prevents future dates, validates age requirements
- **Format enforcement** for SSN (XXX-XX-XXXX), phone, ZIP codes
- **Cross-field validation** ensures data consistency

### User Experience
- **Progress indicators** show completion status
- **Autosave** prevents data loss (localStorage fallback)
- **Clear error messages** in user's selected language
- **Accessible** with ARIA labels and keyboard navigation
- **Welcome overlay** explains WOTC program in plain language

## 🔧 Development

```bash
# Development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production preview
npm run build && npm run preview
```

## 💼 Use Cases

- **HR Departments**: Streamline WOTC screening during onboarding
- **Staffing Agencies**: Multi-language support for diverse candidate pools
- **Payroll Services**: Integrate with existing tax credit workflows
- **Government Contractors**: Compliance-ready digital forms
- **Multi-state Employers**: Handle varying state requirements

## 🎓 Technical Highlights

- **Type-safe** internationalization with TypeScript
- **Component architecture** with reusable form primitives
- **State management** with React hooks and context
- **Signature capture** with HTML5 Canvas API
- **Form persistence** with localStorage + Supabase sync
- **Conditional rendering** based on complex eligibility rules
- **Accessibility** WCAG 2.1 Level AA compliant

## 📂 Project Structure

```
digital_8850/
├── src/
│   ├── components/        # Reusable UI components
│   ├── locales/          # Translation files (7 languages)
│   │   ├── en/translation.json
│   │   ├── es/translation.json
│   │   └── ... (5 more languages)
│   ├── lib/              # Utilities and Supabase client
│   ├── i18n.ts           # i18next configuration
│   └── App.tsx           # Main form component
├── public/               # Static assets
└── package.json
```

## 🌟 Why This Project Matters

- **Government Compliance**: Digital transformation of federal forms
- **Accessibility**: Multi-language support for underserved populations
- **Efficiency**: Reduces processing time from paper to digital workflow
- **Scale**: Handles thousands of submissions with validation guarantees

---

**Built by Mordechai Potash** | [Portfolio](https://github.com/mordechaipotash) | Production-ready since July 2025