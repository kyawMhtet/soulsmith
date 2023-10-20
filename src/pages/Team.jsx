import React from 'react'
import './team.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'react-i18next'

const Team = () => {
  const { t } = useTranslation();

  return (
    <>
    {/* <div className='members'>
      <img src="https://strategyfirst.edu.mm/img/who-we.png" className='d-flex w-100' alt="" />

    </div> */}
    <h2 className='tw-text-bone text-center mt-4 text-decoration-underline'>
      SOULSMITH TEAM MEMBERS
    </h2>

    <div className=" mt-4">

      <div className='person w-75 mx-auto'>
        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle' alt="" />
        </div>

        <div className='w-100 info p-3 tw-text-bone'>
          <h4 className='tw-text-bone text-center text-decoration-underline'>
          {t('name1')}
          </h4>
          <h5 className='my-3 text-center'>({t('category1')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start mt-2'>
              <h5 className=''>
                {t('list1A')}
              </h5>

              <ul className='tw-list-disc mt-1 mb-5 tw-text-start' >
                <li>{t('list1Aa')}</li>
                <li className='my-2'>{t('list1Ab')}</li>
                <li>{t('list1Ac')}</li>
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>


            <div className='text-start mt-2'>
              <h5 className=''>
              {t('list1B')}
              </h5>

              <ul className='tw-list-disc mt-3 mb-5'>
                <li>{t('list1Ba')} <span style={{ wordWrap: 'break-word' }}>
                (https://www.facebook.com/cbtdeetorjai).

                </span>

                </li>
                <li className='my-2'>
                  {t('list1Bb')}
                </li>
                
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>
          </Carousel>
          {/* </div> */}





        </div>
      </div>


{/* second member */}

      <div className='person w-75 mx-auto'>


        
      <div className='w-100 info1 p-3 tw-text-bone'>

      <h4 className='tw-text-bone text-center text-decoration-underline'>
          {t('name2')}
          </h4>
          <h5 className='my-3 text-center'>({t('category2')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start py-1 list2'>
              <h5 className=''>
                {t('list2A')}
              </h5>

              <ul className='tw-list-disc mt-1 mb-5 tw-text-start' >
                <li>{t('list2Aa')}</li>
                <li className='my-2'>{t('list2Ab')}</li>
                <li>{t('list2Ac')}</li>
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>


            <div className='text-start py-1'>
              <h5 className=''>
              {t('list2B')}
              </h5>

              <ul className='tw-list-disc mt-3 mb-5'>
                <li>{t('list2Ba')}
                </li>
                <li className='my-2'>
                  {t('list2Bb')}
                </li>

                <li className='my-2'>
                  {t('list2Bc')}
                </li>

                <li className='my-2'>
                  {t('list2Bd')}
                </li>

                <li className='my-2'>
                  {t('list2Be')}
                </li>

                <li className='my-2'>
                  {t('list2Bf')}
                </li>

                <li className='my-2'>
                  {t('list2Bg')}
                </li>

                <li className='my-2'>
                  {t('list2Bh')}
                </li>

                <li className='my-2'>
                  {t('list2Bi')}
                </li>

                <li className='my-2'>
                  {t('list2Bj')}
                </li>

                <li className='my-2'>
                  {t('list2Bk')}
                </li>
                
              </ul>
                </div>
          </Carousel>




        </div>

        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle photo1' alt="" />
        </div>
      </div>

  





    </div>
    </>
  )
}

export default Team