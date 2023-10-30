import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Section1 from '../assets/Section1_Photo.png'
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'
import Footer from '../components/Footer';
import Element1 from '../assets/Element1.png'
import Element2 from '../assets/Element2.png'
import Element3 from '../assets/Element3.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './home.css'



const HomePage = () => {


  useEffect(() => {
    Aos.init();
  },[])

  const { t } = useTranslation();

  return (
    <>


      <div className='main mt-3'>
          <div className=' main-content order-2 order-lg-1'>
            <h1 className='tw-text-gold'>SOULSMITH</h1>
            <p className='tw-text-bone mt-3'>
              {t('About SOULSMITH')}
            </p>

            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id nisi, ipsam sint, debitis architecto odit odio pariatur delectus consectetur laudantium excepturi quas eligendi! Temporibus et beatae dolorem architecto sequi provident voluptatibus illum harum, nihil distinctio quo earum ad aspernatur! Debitis harum minima adipisci! Corrupti quidem dolore earum rem quasi saepe nihil ab enim autem laudantium dolores natus, hic porro vel commodi sed maxime? Aspernatur, voluptate eius nostrum quidem deleniti doloremque libero itaque, adipisci optio odio suscipit, fugit aut commodi?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate iusto vitae aperiam exercitationem, minus harum non aliquam tempora ad, eligendi ullam laborum accusamus doloremque soluta assumenda ratione unde ut corrupti dignissimos. Quisquam enim itaque perspiciatis repellat voluptatem esse molestias.</p> */}
          </div>



        <div
        id="carouselExampleFade"
        className="carousel-home slide carousel-fade order-1 order-lg-2"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Adjust the interval (in milliseconds) as needed 
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Section1}
              alt="Slide 1"
              
            />
          </div>
          <div className="carousel-item">
            <img
              src={Section1}
              
              alt="Slide 2"
              
            />
          </div>
          <div className="carousel-item">
            <img
              src={Section1}
              
              alt="Slide 3"
              
            />
          </div>
        </div>

      </div>


      </div>





      {/* <div className="container mt-4">
        {t('pageTitle')}
        <p className="tw-bg-blue-500">{t('pageContent')}</p>
      </div> */}




      {/* services */}


      <div className='container-fluid mt-5' >
        <div className="row">
          <div className="col-10  mx-auto rounded-3 services">
            <h3 className='tw-text-bone text-center p-3'>SERVICES</h3>


            <div className='row mt-2 gap-2 py-4 mx-auto' data-aos="fade-right" data-aos-duration="1500">
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-midnight">
                  <div className='child'>

                  </div>
                </div>
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-midnight">
                  <div className="child">

                  </div>
                </div>
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-midnight">
                  <div className="child">
                    
                  </div>
                </div>
            </div>

            <div className='element1 d-none d-lg-block'>
              <img src={Element1} className='' alt="" />
            </div>

            <div className='element2 d-none d-lg-block'>
              <img src={Element2} className='' alt="" />
            </div>
            <div className='element3 d-none d-lg-block'>
              <img src={Element3} className='' alt="" />
            </div>  

          </div>
        </div>

      </div>


      {/* our team */}

      <div className='team'>
        <h3 className='text-center tw-text-bone'>OUR TEAM</h3>


      <div className="container mt-5">
      <div className="col-12 col-lg-4 col-md-4 mx-auto" data-aos="fade-right" data-aos-duration="2500" >
            <img src={Person1} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto, repudiandae voluptas maxime magni cumque a expedita aperiam doloremque</p>
          </div>
      </div>

      <div className="container-fluid mt-4" >
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="2500" >
            <img src={Person1} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto, repudiandae voluptas maxime magni cumque a expedita aperiam doloremque error?</p>
          </div>
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="2000">
          <img src={Person2} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptatem officia soluta maiores distinctio facere ullam suscipit perspiciatis excepturi in?</p>
          </div>
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person3} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi sequi voluptatum nobis optio labore ipsam, tempore magni nostrum deleniti!</p>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person1} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi sequi voluptatum nobis optio labore ipsam, tempore magni nostrum deleniti!</p>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person2} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi sequi voluptatum nobis optio labore ipsam, tempore magni nostrum deleniti!</p>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person3} alt="" />
            <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi sequi voluptatum nobis optio labore ipsam, tempore magni nostrum deleniti!</p>
          </div>
        </div>
      </div>

      </div>


      <div className="book-now">
        <a href='https://SOULSMITH.as.me/' target='_blank' className="book-now-button rounded-1">Book Now</a>
      </div>



      <Footer />

    </>
  );
};

export default HomePage;
