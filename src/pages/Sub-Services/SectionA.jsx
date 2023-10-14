import React from 'react'
import { useTranslation } from 'react-i18next'
import './sectionA.css'
import { NavLink } from 'react-router-dom';

const SectionA = () => {
  const {t} = useTranslation();

  return (
    <>
        <h2 className='tw-text-gold text-center text-decoration-underline mt-4'>
          {t('SectionA')}
        </h2>


        <div className="container my-4">
          <p className='tw-text-bone'>
            {t('ServiceDescription1')}
          </p>

          <p className='tw-text-bone'>
          {t('ServiceDescription1')}
          </p>
        </div>


        <div className="container text-center mt-4">
          <div className="row ">
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 my-3">
              <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Listening Service and Mindfulness Practice'}>
              <div className="card1">
                <div className="card1-content">
                  <h5 className=''>
                  {t('SectionA1')}

                  </h5>
                </div>
              </div>
              </NavLink>
            </div>

            <div className="col-12 col-lg-4 col-md-2 col-sm-12 my-3">
              <div className="card1">
                <div className="card2-content">
                <h5>
                  {t('SectionA2')}

                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-2 col-sm-12 my-3">
            <div className="card1">
                <div className="card3-content">
                <h5>
                  {t('SectionA3')}

                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-2 col-sm-12 my-3">
            <div className="card1">
                <div className="card4-content">
                <h5>
                  {t('SectionA4')}

                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-2 col-sm-12 my-3">
            <div className="card1">
                <div className="card5-content">
                  <h5>
                  {t('SectionA5')}

                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="container text-center mt-4">
          <div className="row">
            <div className="col-4">
            <div className="card1 ">
                <div className="card-content">
                  <h5>
                  {t('A1a')}

                  </h5>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card1">
                <div className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sunt eaque eius animi nemo illum quo recusandae aliquam, architecto libero doloremque quia repellat et aperiam, facere vel. Commodi, vitae similique.
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default SectionA