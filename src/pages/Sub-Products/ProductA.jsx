import { useTranslation } from "react-i18next";

import "../product.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image103 from "../../assets/products/mind-magnifying/Image 103.jpg";
import image1 from "../../assets/products/mind-magnifying/image1.jpg";
import image2 from "../../assets/products/mind-magnifying/image2.jpg";
import image3 from "../../assets/products/mind-magnifying/image3.jpg";
import image4 from "../../assets/products/mind-magnifying/image4.jpg";
import image5 from "../../assets/products/mind-magnifying/image5.jpg";
import image6 from "../../assets/products/mind-magnifying/image6.jpg";
import image7 from "../../assets/products/mind-magnifying/image7.jpg";
import image8 from "../../assets/products/mind-magnifying/image8.jpg";
import Footer from "../../components/Footer";

const Product = () => {
  const { t } = useTranslation();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center tw-text-gold">
          <b>{t("Mind Magnifying")}</b>
        </h2>

        {/* <p className='tw-text-bone w-100 px-2 my-4'>
        {t('MagnifyDesc')}
      </p> */}
      </div>

      <div className="container mt-5 px-3">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            {/* <div id="carouselExample" className="carousel slide product-carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image107} className="d-block w-100 rounded-3" alt="..." />
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
</div> */}

            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={image1}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image2}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image4}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image3}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image5}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image6}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image7}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image8}
                    className="d-block w-100 rounded-3"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-md-6 product-content">
            <p className="tw-text-bone ">{t("MagnifyDesc")}</p>

            <h5 className="text-start mt-4 tw-text-bone">
              <b>{t("Mind Magnifying in one set consists of")}</b>
            </h5>

            <ul className="one-set">
              <li>{t("card1")}</li>

              <li>{t("card2")}</li>

              <li>{t("card3")}</li>

              <li>{t("card4")}</li>

              <li></li>
            </ul>
            <div className="text-center buy-now">
              <a
                href=""
                target="_blank"
                className="tw-text-bone tw-bg-gold px-3 py-1 tw-rounded-md"
              >
                {t("BUY NOW")}
              </a>
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
  );
};

export default Product;
