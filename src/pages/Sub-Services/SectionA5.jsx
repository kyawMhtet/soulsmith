import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a5.css'
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import A5a from '../../assets/services/A5/A5a.png'
import fourteen from '../../assets/services/A5/14.png'
import A5b from '../../assets/services/A5/A5b.png'
import fifteen from '../../assets/services/A5/15.png'

const SectionA5 = () => {

  const {t} = useTranslation();

  return (
    
    <>
      <h2 className='text-center tw-text-bone mt-4'>
        {t('SectionA5')}
      </h2>

      <div className="container mt-4">
        <p className='tw-text-bone'>
          {t('A5Description_01')}
        </p>

        <p className='tw-text-bone'>
          {t('A5Description_02')}
        </p>




{/* A5a */}
        <div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A5a} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={fourteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A5a')}
        </h5>
    <ul className='mt-4 ms-lg-3'>
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

      <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      
    </ul>
  </div>
</div>


{/* A5b */}
<div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A5b} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={fifteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A5b')}
        </h5>
    <ul className='mt-4 ms-lg-3'>
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


      <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      
    </ul>
  </div>
</div>




<div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A5b} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={fifteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A5b')}
        </h5>
    <ul className='mt-4 ms-lg-3'>
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


      <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      
    </ul>
  </div>
</div>






<div className='my-5 a5 w-100 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A5b} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={fifteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A5b')}
        </h5>
    <ul className='mt-4 ms-lg-3'>
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


      <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      
    </ul>
  </div>
</div>
        
      </div>


    <Footer />

    </>


  )
}

export default SectionA5