import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a4.css'
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import A4a from '../../assets/services/A4/A4a.png'
import ten from '../../assets/services/A4/10.png'
import A4b from '../../assets/services/A4/A4b.png'
import eleven from '../../assets/services/A4/11.png'
import A4c from '../../assets/services/A4/A4c.png'
import twelve from '../../assets/services/A4/12.png'
import A4d from '../../assets/services/A4/A4d.png'
import thirteen from '../../assets/services/A4/13.png'

const SectionA4 = () => {
  const {t} = useTranslation();

  return (
    <>
      <h3 className='text-center mt-4 tw-text-bone'>
        {t('SectionA4')}
      </h3>


      <div className="container my-4 main-desc">
        <p className='tw-text-bone'>
          {t('A4Description_01')}
        </p>

        <p className='tw-text-bone A4D2'>
          {t('A4Description_02')}
        </p>


        <div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />
    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4a} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={ten} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A4a')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>



{/* A4b */}


<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4b} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={eleven} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className=' about w-100'>
  <h5 className='tw-text-bone text-center '>
          {t('A4b')}
        </h5>
    <ul className='mt-4 lists ms-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4b')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4bDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4bdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4blanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        <p>{t('Price')}</p> 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4bSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4bSession2')}</p>
          </li>
          <li>
            <p>{t('A4bSession3')}</p>
          </li>
        </ul>
        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
        
      </li>

      
    </ul>
  </div>
</div>



{/* A4c */}
<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4c} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={twelve} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone px-3 text-center '>
          {t('A4c')}
        </h5>
    <ul className='mt-4 lists ms-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA4c')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4cDuration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A4cdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A4clanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        <p>{t('Price')}</p> 
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>
              {t('A4cSession1')}
            </p>
          </li>
          <li>
            <p>{t('A4cSession2')}</p>
          </li>
          <li>
            <p>{t('A4cSession3')}</p>
          </li>
        </ul>

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>




{/* A4d */}

<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4d} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={thirteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone text-center'>
          {t('A4d')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>






<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4d} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={thirteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone text-center'>
          {t('A4d')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>





<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4d} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={thirteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone text-center'>
          {t('A4d')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>


<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4d} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={thirteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone text-center'>
          {t('A4d')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>





<div className='my-5 a4 tw-bg-midnight p-4 rounded-3 w-100'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />

    {/* <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} autoPlay={true} emulateTouch={true} showStatus={false} className='react-carousel mx-auto'>
            <div className=''>
              <img src={A4d} className='w-100' alt="" />
            </div>

            <div className=''>
              <img src={thirteen} className='w-100' alt="" />
            </div>

          </Carousel> */}

  <div className='about w-100'>
  <h5 className='tw-text-bone text-center'>
          {t('A4d')}
        </h5>
    <ul className='mt-4 lists ms-3'>
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
        <p>{t('Price')}</p> 
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

export default SectionA4