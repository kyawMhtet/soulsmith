import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a1.css'
import Footer from '../../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import A1a from '../../assets/services/A1a/A1a.png'
import one from '../../assets/services/A1a/1.png'
import two from '../../assets/services/A1a/2.png'

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

        <div className=' my-4 a1 tw-bg-midnight p-4 w-100 mx-auto rounded-3'>
      
            <img src={A1a}  alt="" />


          <div className=' about w-100 px-md-2'>
          <h4 className='tw-text-bone text-center'>
            {t('A1a')}
          </h4>
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

      <li className='tw-text-bone '>
        <p>{t('Price')}</p>
        <ul className='' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A1aSession1')}
            </p>
          </li>
          <li>
            <p>{t('A1aSession2')}</p>
          </li>

          <li>
            <p>{t('A1aSession3')}</p>
          </li>


        </ul>
        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
        {/* <li className='button tw-list-none ms-4 mt-5'> */}
      {/* </li> */}


      </li>


      
    </ul>

  



          </div>
        </div>



{/* 2nd */}
        <div className=' my-4 a1 tw-bg-midnight p-4 w-100 mx-auto rounded-3'>
      
            <img src={two}  alt="" />


          <div className=' about w-100 px-md-2'>
          <h4 className='tw-text-bone text-center'>
            {t('A1b')}
          </h4>


          {/* <p className=''>(May be later)</p> */}


          </div>
        </div>


{/* 3rd */}

<div className=' my-4 a1 tw-bg-midnight p-4 w-100 mx-auto rounded-3'>
      
      <img src={one}  alt="" />


    <div className=' about w-100 px-md-2'>
    <h4 className='tw-text-bone text-center'>
      {t('A1c')}
    </h4>


    {/* <p className=''>(May be later)</p> */}


    </div>
  </div>


      </div>



      <Footer />

    </>
  )
}

export default SectionA1