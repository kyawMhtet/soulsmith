import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a4.css'

const SectionA4 = () => {
  const {t} = useTranslation();

  return (
    <>
      <h3 className='text-center mt-4 tw-text-gold text-decoration-underline'>
        {t('SectionA4')}
      </h3>


      <div className="container my-4">
        <p className='tw-text-bone'>
          {t('A4Description_01')}
        </p>

        <p className='tw-text-bone'>
          {t('A4Description_02')}
        </p>


        <div className='my-5 a4 w-100'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-gold  text-decoration-underline'>
          {t('A4a')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4a')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4adesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4alanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4aSession2')}</p>
          </li>
          <li>
            <p>{t('A4aSession3')}</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>



{/* A4b */}


<div className='my-5 a4 w-100'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-gold  text-decoration-underline'>
          {t('A4b')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4b')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4bdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4blanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4aSession2')}</p>
          </li>
          <li>
            <p>{t('A4aSession3')}</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>



{/* A4c */}
<div className='my-5 a4 w-100'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-gold  text-decoration-underline'>
          {t('A4c')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4c')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4bdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4alanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4aSession2')}</p>
          </li>
          <li>
            <p>{t('A4aSession3')}</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>




{/* A4d */}

<div className='my-5 a4 w-100'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about w-75'>
  <h5 className='tw-text-gold  text-decoration-underline'>
          {t('A4d')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4d')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4dDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4ddesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4dlanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4dSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4dSession2')}</p>
          </li>
          <li>
            <p>{t('A4dSession3')}</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>
      </div>
    </>
  )
}

export default SectionA4