import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a1.css'
import Footer from '../../components/Footer';

const SectionA1 = () => {

  const {t} = useTranslation();

  return (
    <>
      <h2 className='text-center mt-4 tw-text-bone'>
        {t('SectionA1')}
      </h2>

      <div className='container mt-4 w-100'>
        <p className='tw-text-bone'>
          {t('A1Description_01')}
        </p>
        {/* <br /> */}
        <p className="tw-text-bone">
          {t('A1Description_02')}
        </p>
      </div>


      <div className='mt-5 container'>

        <div className=' my-4 a1 tw-bg-midnight p-4 rounded-3'>
      
            <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg"  alt="" />
          

          <div className=' about'>
          <h5 className='tw-text-bone text-center'>
            {t('A1a')}
          </h5>
          <ul className='mt-4 ms-lg-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA1a')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A1aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A1adesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A1alanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A1aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A1aSession3')}</p>
          </li>
        </ul>

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
          </div>
        </div>



      </div>



      <Footer />

    </>
  )
}

export default SectionA1