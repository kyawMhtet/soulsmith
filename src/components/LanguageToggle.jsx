import React from 'react';
import { useTranslation } from 'react-i18next';
import ThaiFlag from '../assets/thailand.png'
import UK from '../assets/UK.png'

function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLanguage = localStorage.getItem('language') || i18n.language;

  return (
    <div className='tw-text-gold tw-mt-2 tw-lg:mx-3'>
      {currentLanguage === 'en' && (
        <button className='tw-lg:me-3 tw-flex' onClick={() => changeLanguage('th')}>Thai <img src={ThaiFlag} className=' ms-2' alt="" /></button>
      )}
      {currentLanguage === 'th' && (
        <button className='tw-lg:me-3 tw-flex' onClick={() => changeLanguage('en')}>English <img src={UK} className=' ms-2' alt="" /></button>
      )}
    </div>
  );
}

export default LanguageToggle;
