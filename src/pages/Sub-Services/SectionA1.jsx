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
      
            {/* <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg"  alt="" /> */}

            {/* <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={A1a} className="d-block w-75 mx-auto" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={one} className="d-block w-75 mx-auto" alt="..." />
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
              <img src={A1a} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={one} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={two} className='w-100' alt="" />
            </div>

          </Carousel>


          <div className=' about w-100'>
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