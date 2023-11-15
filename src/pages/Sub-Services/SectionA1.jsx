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

        {/* <li className='button tw-list-none ms-4 mt-5'> */}
      {/* </li> */}
      </li>

      <li className='mt-5 text-center button'>
      <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-5 py-2 tw-rounded-md">{t('Book Now')}</a>
      </li>
      
    </ul>

  



          </div>
        </div>




        {/* <div className=' my-4 a1b tw-bg-midnight p-4 w-100 mx-auto rounded-3'>
      
            <img src={A1a}  alt="" />


          <div className=' about w-100 px-md-2'>
          <h4 className='tw-text-bone text-center'>
            {t('A1a')}
          </h4>

  



          </div>
        </div> */}


<div className="a1b">
    <div className="card-1 tw-bg-midnight rounded-3" >
  <img src={two} className="card-img-top mx-auto p-4"  alt="..." />
  <div className="px-2 pb-5">
    {/* <h5 className="card-title">{t('A1b')}</h5> */}
    <h5 className=' tw-text-bone text-center'>{t('A1b')}</h5>

<div className='text-center mt-4'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-5 py-2 tw-rounded-md">{t('Book Now')}</a>
</div>
      
  </div>
</div>


<div className="card-1 tw-bg-midnight rounded-3 mt-4 mt-md-0" >
  <img src={one} className="card-img-top mx-auto p-4"  alt="..." />
  <div className="px-2 pb-5">
    {/* <h5 className="card-title">{t('A1b')}</h5> */}
    <h5 className=' tw-text-bone text-center'>{t('A1c')}</h5>

    <div className='text-center mt-4'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-5 py-2 tw-rounded-md">{t('Book Now')}</a>
</div>
  </div>
</div>

    </div>


      </div>



      <Footer />

    </>
  )
}

export default SectionA1