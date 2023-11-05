import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a2.css'
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import A2a from '../../assets/services/A2a/A2a.png';
import three from '../../assets/services/A2a/3.png';

const SectionA2 = () => {

  const { t } = useTranslation();

  return (
    <>
      <h2 className='text-center tw-text-bone  mt-4'>
        {t('SectionA2')}
      </h2>


      <div className='container mt-4 w-100'>
        <p className='tw-text-bone'>
          {t('A2Description_01')}
        </p>
        {/* <br /> */}
        <p className="tw-text-bone">
          {t('A2Description_02')}
        </p>



        {/* <h5 className='tw-text-gold mt-5 text-decoration-underline'>
          {t('Service')}
        </h5> */}




      </div>


      <div className='mt-5 container'>



<div className='my-4 a2 tw-bg-midnight p-4 rounded-3 w-100'>

    {/* <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" alt="" /> */}

    {/* <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={A2a} className="d-block w-75 mx-auto" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={two} className="d-block w-75 mx-auto" alt="..." />
    </div>

  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
          <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A2a} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={three} className='w-100' alt="" />
            </div>

          </Carousel>



  <div className='about w-100'>
  <h4 className='tw-text-bone text-center'>
          {t('A2a')}
        </h4>
    <ul className='mt-4 ms-lg-3'>
      <li className="tw-text-bone">
        <p>{t('descA2a')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A2aDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A2adesc1')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A2alanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')}
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>{t('A2aSession1')}</p>
          </li>
          <li>
            <p>{t('A2aSession2')}</p>
          </li>
          <li>
            <p>{t('A2aSession3')}</p>
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

export default SectionA2