import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languageCodes = ['en', 'es', 'zh', 'fr', 'ht', 'ru', 'ko'];

export function LanguageSelector() {
  const { i18n, t } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        >
          {languageCodes.map((code) => (
            <option key={code} value={code}>
              {t(`common.languages.${code}`)}
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Globe className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
