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
      {/* <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade z-0"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Adjust the interval (in milliseconds) as needed 
      >
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src={Section1}
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/29871894_192517221366750_7151077294607288258_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=MmYWkYg3j0QAX85za8p&_nc_ht=scontent-sin6-2.xx&oh=00_AfDh2maSdLP_nQYPfupbgc1963q-o5ned8kSNrJwg-pefg&oe=65447EC2"
              className="d-block w-100 img-fluid"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/380816010_615859110754892_2738443758761912119_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=hUd4UeF9xlQAX9LDbrW&_nc_ht=scontent-sin6-2.xx&oh=00_AfB5766mcXXFUfKkbp2MhDdXLjSac8V04dxZ9C3YSFoPdQ&oe=6522C7C8"
              className="d-block w-100 img-fluid"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <div id='main'>
        <div className='content'>
          
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ducimus ex iure doloremque possimus neque eius, non corporis, voluptatum quidem alias nobis, qui corrupti cupiditate ea! Numquam necessitatibus, dolore suscipit itaque omnis eaque nisi neque totam. Rerum quos cumque, nesciunt atque eum omnis officia beatae commodi? Adipisci molestias nostrum officia?
          
          <div className='main-photo'>
              <img src={Section1} className='' alt="" />
          </div>
        </div>
      </div> */}


      <div className='main mt-3'>
          <div className=' main-content order-2 order-lg-1'>
            <h1 className='tw-text-gold'>SOUL SMITH</h1>
            <p className='text-white'>
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
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-gold">
                  <div className='child'>

                  </div>
                </div>
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-gold">
                  <div className="child">

                  </div>
                </div>
                <div className="col-12 my-3 col-lg-4 col-md-4 col-sm12 mx-auto service tw-bg-gold">
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
        <a href='https://SOULSMITH.as.me/' className="book-now-button rounded-1">Book Now</a>
      </div>



      <Footer />

    </>
  );
};

export default HomePage;
