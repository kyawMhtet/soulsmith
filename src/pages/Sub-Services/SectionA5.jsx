import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a5.css'

const SectionA5 = () => {

  const {t} = useTranslation();

  return (
    
    <>
      <h2 className='text-center tw-text-bone mt-4 text-decoration-underline'>
        {t('SectionA5')}
      </h2>

      <div className="container">
        <p className='tw-text-bone'>
          {t('A5Description_01')}
        </p>

        <p className='tw-text-bone'>
          {t('A5Description_02')}
        </p>




{/* A5a */}
        <div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-bone  text-decoration-underline'>
          {t('A5a')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        {/* <p className=''>{t('descA5a')}</p> */}
        <p>May be later</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A5aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A5adesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A5alanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} :
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A5aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A5aSession2')}</p>
          </li>
          <li>
            <p>{t('A5aSession3')}</p>
          </li>
        </ul>
      </li>

      <li className='button tw-list-none ms-5 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
      
    </ul>
  </div>
</div>


{/* A5b */}
<div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-bone  text-decoration-underline'>
          {t('A5b')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        {/* <p className=''>{t('descA4a')}</p> */}
        <p>May be later</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A5bDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A5bdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A5blanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} :
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A5bSession1')}
            </p>
          </li>
          <li>
            <p>{t('A5bSession2')}</p>
          </li>
          <li>
            <p>{t('A5bSession3')}</p>
          </li>
        </ul>
      </li>


      <li className='button tw-list-none ms-5 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
      
    </ul>
  </div>
</div>
        
      </div>
    </>


  )
}

export default SectionA5