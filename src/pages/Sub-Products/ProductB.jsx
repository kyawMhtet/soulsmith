
import { useTranslation } from 'react-i18next'

import '../product.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import image103 from '../../assets/products/mind-magnifying/Image 103.jpg'

// import image507 from '../assets/products/mind-magnifying/Image 507.jpg'
// import image504 from '../assets/products/mind-magnifying/Image 504.jpg'
// import image498 from '../assets/products/mind-magnifying/Image 498.jpg'
// import image475 from '../assets/products/mind-magnifying/Image 475.jpg'
// import image470 from '../assets/products/mind-magnifying/Image 470.jpg'
// import image468 from '../assets/products/mind-magnifying/Image 468.jpg'
// import image459 from '../assets/products/mind-magnifying/Image 459.jpg'
// import image453 from '../assets/products/mind-magnifying/Image 453.jpg'
// import image275 from '../assets/products/mind-magnifying/Image 275.jpg'
// import image273 from '../assets/products/mind-magnifying/Image 273.jpg'
// import image104 from '../assets/products/mind-magnifying/Image 104.jpg'
// import image174 from '../assets/products/mind-magnifying/Image 174.jpg'
// import image196 from '../assets/products/mind-magnifying/Image 196.jpg'
// import image88 from '../assets/products/mind-magnifying/Image 88.jpg'
import image111 from '../../assets/products/mind-magnifying/Image 111.jpg'
import image107 from '../../assets/products/mind-magnifying/Image 107.jpg'
import Footer from '../../components/Footer';


const Product = () => {

  const {t} = useTranslation();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };



  return (
    <>

      <div className="container mt-4">
        <h2 className='text-center tw-text-gold'>
          <b>
          Mind Exercise Vol.1
          </b>
        </h2>

      {/* <p className='tw-text-bone w-100 px-2 my-4'>
        {t('MagnifyDesc')}
      </p> */}

      </div>


      <div className="container mt-5 px-3">

<div className="row">
<div className="col-12 col-lg-6 col-md-6">
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image103} className="d-block w-100 rounded-3" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image107} className="d-block w-100 rounded-3" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image111} className="d-block w-100 rounded-3" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>


<div className='col-12 col-lg-6 col-md-6 product-content'>
          <p className='tw-text-bone '>
            {t('Vol1Desc')}
          </p>

          <h5 className='text-start mt-4 tw-text-bone'>
            <b>{t('Mind Exercise Vol.1 in one set consists of')}</b>
          </h5>

          <div className='vol1'>
      <div className=''>
      <ul className=''>

<li>{t('book1')}</li>


<li>{t('book2')}</li>


<li>{t('book3')}</li>
<li>

</li>


</ul>
      </div>

<div className=''>
<ul>
<li>{t('pencil1')}</li>
<li>{t('pencil2')}</li>
<li>{t('pencil3')}</li>

</ul>



</div>
<div>
  <ul>
  <li>{t('pencil4')}</li>
  </ul>
</div>
          </div>

          <div className='text-center buy-now1'>
        <a href='' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-1 tw-rounded-md">{t('BUY NOW')}</a>
        </div>

        </div>
</div>


      </div>



      {/* <div className="container-fluid mt-4">

      <div className="">
        <div className="">
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src={image103} className="d-block mx-auto rounded-3 " style={{ width: '80%' }}  alt="..." />
      <div className="carousel-caption d-none d-md-block mt-4">
      <p className='slide-text mb-5'>
            {t('MagnifyDesc')}
          </p>

        <h5 className='text-start'>{t('Mind Magnifying in one set consists of')}</h5>
        <div className='mt-4'>
        <p className='text-start'>- {t('card1')}</p>
        <p className='text-start'>- {t('card2')}</p>
        <p className='text-start'>- {t('card3')}</p>
        <p className='text-start'>- {t('card4')}</p>
        </div>

        <div className='d-flex '>
        <a href='' target='_blank' className="tw-text-bone w-25 tw-bg-gold px-3 py-2 tw-rounded-md">{t('Buy Now')}</a>
        </div>


      </div>
      
    </div>
    <div className="carousel-item">


      <img src={image104} className="d-block mx-auto rounded-3 " style={{ width: '80%' }}  alt="..." />
      
      <div className="carousel-caption d-none d-md-block">


      <h5 className='text-start'>{t('Mind Magnifying in one set consists of')}</h5>

        
<div className='mt-4'>
<p className='text-start'>{t('card1')}</p>
<p className='text-start'>{t('card2')}</p>
<p className='text-start'>{t('card3')}</p>
<p className='text-start'>{t('card4')}</p>
</div>

<div className='d-flex '>
        <a href='' target='_blank' className="tw-text-bone w-25 tw-bg-gold px-3 py-2 tw-rounded-md">{t('Buy Now')}</a>
        </div>

      </div>
    </div>
    <div className="carousel-item">
      <img src={image111} className="d-block mx-auto rounded-3 " style={{ width: '80%' }}  alt="..." />
      <div className="carousel-caption d-none d-md-block">


      <h5 className='text-start'>{t('Mind Magnifying in one set consists of')}</h5>

        
<div className='mt-4'>
<p className='text-start'>{t('card1')}</p>
<p className='text-start'>{t('card2')}</p>
<p className='text-start'>{t('card3')}</p>
<p className='text-start'>{t('card4')}</p>
</div>

<div className='d-flex '>
        <a href='' target='_blank' className="tw-text-bone w-25 tw-bg-gold px-3 py-2 tw-rounded-md">{t('Buy Now')}</a>
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>




        </div>
        </div>



        <div className="">

        </div>
      </div>




        </div> */}




      <div className="products col-11 mx-auto">


      {/* <div className="col-12 col-lg-6 col-md-6 text">
      <h4 className='tw-text-bone '>{t('Mind Magnifying in one set consists of')}</h4>

      <ul className='tw-text-bone mt-4 tw-list-disc magnify-cards'>
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
      </div> */}
    </div>


{/* products */}





  
    {/* <div className='container images'>
    <Carousel   swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  customTransition="transform 0.5s ease-in-out"
  transitionDuration={500}
  containerClass="carousel-container"
  itemClass="carousel-item-padding-40-px" >
<div className="box ">
    <img src={image507} alt="" />
  </div>

  <div className="box ">
    <img src={image498} alt="" />
  </div>

  <div className="box ">
    <img src={image475} alt="" />
  </div>

  <div className="box ">
    <img src={image507} alt="" />
  </div>

  <div className="box ">
    <img src={image498} alt="" />
  </div>

  <div className="box ">
    <img src={image475} alt="" />
  </div>

  <div className="box ">
    <img src={image507} alt="" />
  </div>

  <div className="box ">
    <img src={image498} alt="" />
  </div>

  <div className="box ">
    <img src={image475} alt="" />
  </div>


</Carousel>
    </div> */}


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


{/* <div className='wrapper mt-5'>
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
</div> */}



<Footer />


    </>
  )
}

export default Product