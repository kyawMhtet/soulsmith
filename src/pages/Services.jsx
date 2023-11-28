import React from 'react'
import { useTranslation } from 'react-i18next';
import './services.css';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container mt-4">
        <h2 className='text-center tw-text-gold'>
          <b>{t('serviceTitle')}</b>
        </h2>
        
        {/* <div className='container mt-4'>
          <p className='tw-text-bone fw-semibold'>
            {t('ServiceDescription1')}
          </p>
          <br />
          <p className='tw-text-bone fw-semibold'>
              {t('ServiceDescription2')}
          </p>
        </div> */}


        {/* <div className='sections'>
          <ul>
            <li>
              <h5>
                  <NavLink to={'/services/PsychologicalSupport-Psychotherapy-Counseling'}
                    className={'tw-text-bone'}
                  >
                Psychological Support: Psychotherapy & Counseling
                  </NavLink>
              </h5>
            </li>

            <li>
              <h5>
                <NavLink to={'/services/Healing-Therapy'} className={'tw-text-bone'} >
                Healing & Therapy 
                </NavLink>
              </h5>
            </li>

            <li>
              <h5>
                <NavLink to={'/services/Body-Mind-SoulMixologyService'} className={'tw-text-bone'} >
                Body - Mind - Soul Mixology Service
                </NavLink>
              </h5>
            </li>


          </ul>
        </div> */}


<div className="row">
  <div className="col-12 col-lg-4 col-md-6 mx-auto col-sm-12 sections">
        <NavLink to={'/services/PsychologicalSupport-Psychotherapy-Counseling'} className="text-decoration-none">
        <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg" className="card-img-top" alt="..." />
    <div className="card-body py-3 tw-bg-midnight">
      <h5 className="text-center px-3  tw-text-gold">{t('SectionA')}</h5>
      <div className="card-text px-3">
          <ul className=''>
            <li>{t('SectionA1')}</li>
            <hr className='w-100' />
            <li>{t('SectionA2')}</li>
            <hr className='w-100' />

            <li>{t('SectionA3')}</li>
            <hr className='w-100' />

            <li>{t('SectionA4')}</li>
            <hr className='w-100' />

            <li>{t('SectionA5')}</li>
          </ul>
      </div>
    </div>
    <div className="card-footer">
      {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
    </div>
        </NavLink>
  </div>
  <div className="col-12 col-lg-4 col-md-6 mx-auto col-sm-12 sections">
        <NavLink to={'/services/Healing-Therapy'} className="text-decoration-none">
        <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg" className="card-img-top" alt="..." />
    <div className="card-body py-3 tw-bg-midnight">
      <h5 className="text-center tw-text-gold px-3 ">{t('SectionB')}</h5>
      <div className="card-text py-2 tw-text-bone px-3">
          <ul className=''>
            <li>{t('SectionB1')}</li>
            <hr className='w-100' />

          </ul>
      </div>
    </div>
        </NavLink>
    <div className="card-footer">
      {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
    </div>
  </div>
  <div className=" col-12 col-lg-4 col-md-6 mx-auto col-sm-12 sections">
        <NavLink to={'/services/Body-Mind-SoulMixologyService'} className="text-decoration-none">
        <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg" className="card-img-top" alt="..." />
    <div className="card-body py-3 tw-bg-midnight">
      <h5 className="text-center tw-text-gold px-3 ">{t('SectionC')}</h5>
      <div className="card-text py-2 tw-text-bone px-3">
        {/* <ul>
          <li></li>
        </ul> */}

        <h5 className='text-center mt-5'>Coming Soon!</h5>
      </div>
    </div>
    <div className="card-footer">
      
      {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
    </div>
        </NavLink>
  </div>
</div>

      </div>


        <Footer />


    </>
  )
}

export default Services