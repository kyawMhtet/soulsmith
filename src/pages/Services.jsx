import React from 'react'
import { useTranslation } from 'react-i18next';
import './services.css';
import { NavLink } from 'react-router-dom';

const Services = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container mt-4">
        <h2 className='text-center tw-underline tw-text-bone'>{t('serviceTitle')}</h2>
        
        {/* <div className='container mt-4'>
          <p className='tw-text-bone fw-semibold'>
            {t('ServiceDescription1')}
          </p>
          <br />
          <p className='tw-text-bone fw-semibold'>
              {t('ServiceDescription2')}
          </p>
        </div> */}


        <div className='sections'>
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
        </div>
      </div>



      {/* <div className='container-fluid'>
        <div className="row">
          <div className="col text-center">
          <h5>
                  <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling'}
                    className={'tw-text-gold'}
                  >
                Psychological Support: Psychotherapy & Counseling

                  </NavLink>
              </h5>
          </div>
          <div className="col text-center">
          <h5>
                <NavLink to={'/services/Healing & Therapy'} className={'tw-text-gold'} >
                Healing & Therapy 
                </NavLink>
              </h5>
          </div>
          <div className="col text-center">
          <h5>
                <NavLink to={'/services/Body - Mind - Soul Mixology Service'} className={'tw-text-gold'} >
                Body - Mind - Soul Mixology Service
                </NavLink>
              </h5>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Services