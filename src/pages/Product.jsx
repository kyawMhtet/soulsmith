
import { useTranslation } from 'react-i18next'
import './product.css'

import 'react-multi-carousel/lib/styles.css'
import image507 from '../assets/products/mind-magnifying/Image 507.jpg'
import image504 from '../assets/products/mind-magnifying/Image 504.jpg'
import image498 from '../assets/products/mind-magnifying/Image 498.jpg'
import image475 from '../assets/products/mind-magnifying/Image 475.jpg'
import image470 from '../assets/products/mind-magnifying/Image 470.jpg'
import image468 from '../assets/products/mind-magnifying/Image 468.jpg'
import image459 from '../assets/products/mind-magnifying/Image 459.jpg'
import image453 from '../assets/products/mind-magnifying/Image 453.jpg'
import image275 from '../assets/products/mind-magnifying/Image 275.jpg'
import image273 from '../assets/products/mind-magnifying/Image 273.jpg'
import image104 from '../assets/products/mind-magnifying/Image 104.jpg'
import Footer from '../components/Footer'


const Product = () => {

  const {t} = useTranslation();

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 2
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 
  //   }
  // };



  return (
    <>
      <div className="container-fluid mt-4">
        <h2 className='text-center tw-text-gold'>{t('Mind Magnifying')}</h2>


<div className="row mt-5 ">

  <div className="col-12 col-lg-6 col-md-6 products">
    <img src={image104} className='' alt="" />
  </div>

  <div className="col-12 col-lg-6 col-md-6 text">
  <p className=' tw-text-bone w-100'>
          {t('MagnifyDesc')}
        </p>


      
      
      <h5 className='tw-text-bone mt-5'>{t('Mind Magnifying in one set consists of')}</h5>

      <ul className='tw-text-bone mt-4 tw-list-disc'>
  <li>
    <p>{t('card1')}</p>
  </li>
  <li>
    <p>{t('card2')}</p>
  </li>
  <li>
    <p>{t('card3')}</p>
  </li>
  <li>
    <p>{t('card4')}</p>
  </li>
</ul>
  </div>
</div>
      </div>



{/* products */}





  
{/* <Carousel showThumbs={false} responsive={responsive} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false}>
<div className="box ">
    <img src={image507} alt="" />
  </div>

  <div className="box ">
    <img src={image504} alt="" />
  </div>

  <div className="box ">
    <img src={image498} alt="" />
  </div>

  <div className="box ">
    <img src={image475} alt="" />
  </div>

  <div className="box ">
    <img src={image470} alt="" />
  </div>

  <div className="box box2">
    <img src={image468} alt="" />
  </div>

  <div className="box box2">
    <img src={image459} alt="" />
  </div>
  <div className="box box2">
    <img src={image453} alt="" />
  </div>

  <div className="box box2">
    <img src={image275} alt="" />
  </div>

  <div className="box box2">
    <img src={image273} alt="" />
  </div>
</Carousel> */}


{/* <Carousel   responsive={responsive}
        showDots={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        autoPlaySpeed={5000}
        autoPlay={true} 
        infinite={true}
        additionalTransfrom={0}
  >


<div className="box">
    <img src={image507} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image504} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image498} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image475} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image470} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image468} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image459} className='img-fluid rounded-3' alt="" />
  </div>
  <div className="box">
    <img src={image453} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image275} className='img-fluid rounded-3' alt="" />
  </div>

  <div className="box">
    <img src={image273} className='img-fluid rounded-3' alt="" />
  </div>

</Carousel> */}

  
{/* <div className="products container-fluid mt-5">
  <div className="row">
    <div className="col-12 col-lg-4 col-md-4 mx-auto ">
      <img src={image273} alt="" />
    </div>
    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>

    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>
    
  </div>


  <div className="row">
    <div className="col-12 col-lg-4 col-md-4 mx-auto ">
      <img src={image273} alt="" />
    </div>
    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>

    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>
  </div>


  <div className="row">
    <div className="col-12 col-lg-4 col-md-4 mx-auto ">
      <img src={image273} alt="" />
    </div>
    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>

    <div className="col-12 col-lg-4 col-md-4 mx-auto">
      <img src={image273} alt="" />
    </div>
  </div>

  
</div> */}


<div className='wrapper mt-5'>
  <div className="box">
    <img src={image273} alt="" />
  </div>

  <div className="box">
    <img src={image275} alt="" />
  </div>

  <div className="box">
    <img src={image453} alt="" />
  </div>

  <div className="box">
    <img src={image459} alt="" />
  </div>

  <div className="box">
    <img src={image468} alt="" />
  </div>

  <div className="box">
    <img src={image470} alt="" />
  </div>

  <div className="box">
    <img src={image475} alt="" />
  </div>

  <div className="box">
    <img src={image498} alt="" />
  </div>

  <div className="box">
    <img src={image504} alt="" />
  </div>
</div>



<Footer />


    </>
  )
}

export default Product