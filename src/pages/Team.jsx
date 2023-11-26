import React, {useEffect} from 'react'
import './team.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer'
import member1 from '../assets/team/member1.jpg'
import member2 from '../assets/team/member2.jpg'
import Person1 from '../assets/person1.png'
import { NavLink } from 'react-router-dom'

const Team = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === 'th';

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
  <h2 className='tw-text-gold text-center mt-4'>
      <b>SOULSMITH TEAM MEMBERS</b>
    </h2>
  {/* </div> */}

  <div className='home-team'>
      <div className="container mt-5">
      <NavLink to={'/team/member1'}>

      <div className="col-12 col-lg-4 col-md-4 mx-auto" data-aos="fade-right" data-aos-duration="2500" >
            <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name1')}</h4>
            <p className='p-1'>({t('category1')})</p>
          </div>
          </div>
      </NavLink>

      </div>

      <div className="container-fluid mt-4" >
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="2500" >
            <img src={Person1} alt="" />
            <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name2')}</h4>
            <p className='p-1'>({t('category2')})</p>
          </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="2000">
          <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name3')}</h4>
            <p className='p-1'>({t('category3')})</p>
          </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name4')}</h4>
            <p className='p-1'>({t('category4')})</p>
          </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name5')}</h4>
            <p className='p-1'>({t('category5')})</p>
          </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name6')}</h4>
            <p className='p-1'>({t('category6')})</p>
          </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4" data-aos="fade-right" data-aos-duration="1500">
          <img src={Person1} alt="" />
          <div className='tw-text-bone text-center'>
          <h4 className=''>{t('name7')}</h4>
            <p className='p-1'>{t('category7')}</p>
          </div>
          </div>
        </div>
      </div>

      </div>


    


    <Footer />

    
    </>
  )
}

export default Team