'use client';

import setLangCookie from '@/i18n/setLangCookie';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdTranslate } from 'react-icons/md';

const languages = [
  { code: 'en', label: 'English', flag: 'En' },
  { code: 'es', label: 'Español', flag: 'Es' }
];

export const LanguageSelector = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectLang = (code: string) => {
    setLangCookie(code);
    setIsOpen(false);
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative z-40 cursor-pointer">
      {/* Botón LANG */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center p-2 rounded-full text-primary text-xl font-semibold cursor-pointer"
      >
        <MdTranslate />
        <MdKeyboardArrowDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 w-10 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelectLang(lang.code)}
              className={`w-full text-center py-2 text-sm ${locale === lang.code && 'bg-primary'} transition-colors cursor-pointer`}
            >
              <span className='text-black'>{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;