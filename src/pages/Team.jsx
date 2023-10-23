import React from 'react'
import './team.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'

const Team = () => {
  const { t, i18n } = useTranslation();

  const isThaiLanguage = i18n.language === 'th';

  console.log(isThaiLanguage);

  return (
    <>
    {/* <div className='members'>
      <img src="https://strategyfirst.edu.mm/img/who-we.png" className='d-flex w-100' alt="" />

    </div> */}
  <div className="container">
  <h2 className='tw-text-bone text-center mt-4 text-decoration-underline'>
      SOULSMITH TEAM MEMBERS
    </h2>
  </div>

    <div className=" mt-4">

      <div className='person w-75 mx-auto'>
        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle' alt="" />
        </div>

        <div className='w-100 info p-3 tw-text-bone'>
          <h4 className='tw-text-bone name text-decoration-underline'>
          {t('name1')}
          </h4>
          <h5 className='my-3 category'>({t('category1')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start py-1'>
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


            <div className='text-start py-1'>
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

      <h4 className='tw-text-bone name text-decoration-underline'>
          {t('name2')}
          </h4>
          <h5 className='my-3 category'>({t('category2')})</h5>
          
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

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list2Bh')}
                  </li>
                  )
                }

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list2Bi')}
                  </li>
                  )
                }

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list2Bj')}
                  </li>
                  )
                }

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list2Bk')}
                  </li>
                  )
                }
                
              </ul>
                </div>
          </Carousel>




        </div>

        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle photo1' alt="" />
        </div>
      </div>



      {/* 3rd member */}

      <div className='person w-75 mx-auto h-auto'>
        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle' alt="" />
        </div>

        <div className='w-100 info p-3 tw-text-bone'>
          <h4 className='tw-text-bone name text-decoration-underline'>
          {t('name3')}
          </h4>
          <h5 className='my-3 category'>({t('category3')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start py-1 '>
              <h5 className=''>
                {t('list3A')}
              </h5>

              <ul className='tw-list-disc mt-1 mb-5 tw-text-start' >
                <li>{t('list3Aa')}</li>
                <li className='my-2'>{t('list3Ab')}</li>
                
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>


            <div className='text-start py-1'>
              <h5 className=''>
              {t('list3B')}
              </h5>

              <ul className='tw-list-disc mt-3 mb-5'>
                <li>{t('list3Ba')}

                </li>
                <li className='my-2'>
                  {t('list3Bb')}
                </li>

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list3Bc')}
                  </li>
                  )
                }

                {
                  !isThaiLanguage && (
                    <li className='my-2'>
                    {t('list3Bd')}
                  </li>
                  )
                }

                
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>
          </Carousel>
          {/* </div> */}





        </div>
      </div>




      {/* 4th member */}

      <div className='person w-75 mx-auto'>


        
      <div className='w-100 info1 p-3 tw-text-bone'>

      <h4 className='tw-text-bone name text-decoration-underline'>
          {t('name2')}
          </h4>
          <h5 className='my-3 category'>({t('category4')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start py-1 list2'>
              <h5 className=''>
                {t('list4A')}
              </h5>

              <ul className='tw-list-disc mt-1 mb-5 tw-text-start' >
                <li>{t('list4Aa')}</li>

              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>


            <div className='text-start py-1'>
              <h5 className=''>
              {t('list4B')}
              </h5>

              <ul className='tw-list-disc mt-3 mb-5'>
                <li>{t('list4Ba')}
                </li>
                <li className='my-2'>
                  {t('list4Bb')}
                </li>

                <li className='my-2'>
                  {t('list4Bc')}
                </li>

                
              </ul>
                </div>
          </Carousel>




        </div>

        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle photo1' alt="" />
        </div>
      </div>




      {/* 5th member */}
  
      <div className='person w-75 mx-auto h-auto'>
        <div className='photo'>
          <img src="https://strategyfirst.edu.mm/frontend/people/wypz.png" className='rounded-circle' alt="" />
        </div>

        <div className='w-100 info p-3 tw-text-bone'>
          <h4 className='tw-text-bone name text-decoration-underline'>
          {t('name5')}
          </h4>
          <h5 className='my-3 category'>({t('category5')})</h5>
          
          {/* <h5 className=' tw-text-gold text-center'> Cognitive Behavioral Therapist</h5> */}

          
          {/* <div className='mt-3 text-left'> */}
          <Carousel showThumbs={false} width="100%" dynamicHeight={true} showArrows={false} emulateTouch={true} showStatus={false} >
          <div className='text-start py-1 '>
              <h5 className=''>
                {t('list5A')}
              </h5>

              <ul className='tw-list-disc mt-1 mb-5 tw-text-start' >
                <li>{t('list5Aa')}</li>
                <li className='my-2'>{t('list5Ab')}</li>
                <li className='my-2'>{t('list5Ac')}</li>
                
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>


            <div className='text-start py-1'>
              <h5 className=''>
              {t('list5B')}
              </h5>

              <ul className='tw-list-disc mt-3 mb-5'>
                <li>{t('list5Ba')}

                </li>
                <li className='my-2'>
                  {t('list5Bb')}
                </li>

                <li className='my-2'>
                  {t('list5Bc')}
                </li>

                <li className='my-2'>
                  {t('list5Bd')}
                </li>

                <li className='my-2'>
                  {t('list5Be')}
                </li>

                <li className='my-2'>
                  {t('list5Bf')}
                </li>

                <li className='my-2'>
                  {t('list5Bg')}
                </li>

                <li className='my-2'>
                  {t('list5Bh')}
                </li>


                
              </ul>

                    {/* <p className="legend">Legend 1</p> */}
                </div>
          </Carousel>
          {/* </div> */}





        </div>
      </div>




    </div>


    <Footer />

    
    </>
  )
}

export default Team