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

const Team = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === 'th';

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
    {/* <div className='members'>
      <img src="https://strategyfirst.edu.mm/img/who-we.png" className='d-flex w-100' alt="" />

    </div> */}
  {/* <div className="container"> */}
  <h2 className='tw-text-gold text-center mt-4'>
      SOULSMITH TEAM MEMBERS
    </h2>
  {/* </div> */}

    <div className='members container rounded-3'>
      <div className="team">
        <div className="team-image" data-aos="fade-right" data-aos-duration="2000">
          <img src={Person1} className='' />
        </div>

        <div className="team-info" data-aos="fade-left" data-aos-duration="2000">
        <h4 className='tw-text-bone name text-sm-center'>
                {t('name1')}
            </h4>
            <h5 className='mt-2 mb-3 category text-sm-center tw-text-bone'>({t('category1')})</h5>

            <div className='text-start py-2'>
                        <h5 className='tw-text-bone'>
                            {t('list1A')}
                        </h5>

                        <ul
                            className='mt-3 mb-5 tw-text-start tw-text-bone'>
                            <li><p>{t('list1Aa')}</p></li>
                            <li className='my-2'><p>{t('list1Ab')}</p></li>
                            <li><p>{t('list1Ac')}</p></li>
                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>

                    <div className='text-start'>
                        <h5 className='tw-text-bone'>
                            {t('list1B')}
                        </h5>

                        <ul className='mt-3 mb-5 tw-text-bone'>
                            <li><p>{t('list1Ba')} <a href="https://www.facebook.com/cbtdeetorjai" className='tw-text-bone' style={{ wordWrap: 'break-word' }}>(https://www.facebook.com/cbtdeetorjai)</a>.
                            </p> 
                                    {/* <span style={{ wordWrap:
                                    'break-word' }}>
                                </span> */}

                            </li>
                            <li className='my-2'>
                              <p>
                              {t('list1Bb')}

                              </p>
                            </li>

                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
        </div>
      </div>


                                <hr  />


{/* 2nd member */}
      <div className="team1">
      <div className="team-info1" data-aos="fade-right" data-aos-duration="2000">
        <h4 className='tw-text-bone name text-sm-center'>
                {t('name2')}
            </h4>
            <h5 className='mt-2 mb-3 category text-sm-center tw-text-bone'>({t('category2')})</h5>

            <div className='text-start py-2'>
                        <h5 className='tw-text-bone'>
                            {t('list2A')}
                        </h5>

                        <ul
                            className='mt-3 mb-5 tw-text-start tw-text-bone'>
                            <li><p>{t('list2Aa')}</p></li>
                            <li className='my-2'><p>{t('list2Ab')}</p></li>
                            <li><p>{t('list2Ac')}</p></li>
                        </ul>
                    </div>

                    <div className='text-start'>
                        <h5 className='tw-text-bone'>
                            {t('list2B')}
                        </h5>

                        <ul className='mt-3 mb-5 tw-text-bone'>
                            <li><p>{t('list2Ba')}
                            </p> 
                                    {/* <span style={{ wordWrap:
                                    'break-word' }}>
                                </span> */}

                            </li>
                            <li className='my-2'>
                              <p>
                              {t('list2Bb')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bc')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bd')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Be')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bf')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bg')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bh')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bi')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bj')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list2Bk')}

                              </p>
                            </li>

                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
        </div>
        <div className="team-image1" data-aos="fade-left" data-aos-duration="2000">
          <img src={Person1} className='' />
        </div>


      </div>

                                <hr />

{/* 3rd member */}

<div className="team">
        <div className="team-image" data-aos="fade-right" data-aos-duration="2000">
          <img src={Person1} className='' />
        </div>

        <div className="team-info" data-aos="fade-left" data-aos-duration="2000">
        <h4 className='tw-text-bone name text-sm-center'>
                {t('name3')}
            </h4>
            <h5 className='mt-2 mb-3 category text-sm-center tw-text-bone'>({t('category3')})</h5>

            <div className='text-start py-2'>
                        <h5 className='tw-text-bone'>
                            {t('list3A')}
                        </h5>

                        <ul
                            className='mt-3 mb-5 tw-text-start tw-text-bone'>
                            <li><p>{t('list3Aa')}</p></li>
                            <li className='my-2'><p>{t('list3Ab')}</p></li>
                            
                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>

                    <div className='text-start'>
                        <h5 className='tw-text-bone'>
                            {t('list3B')}
                        </h5>

                        <ul className='mt-3 mb-5 tw-text-bone'>
                            <li><p>{t('list3Ba')}
                            </p> 
                                    {/* <span style={{ wordWrap:
                                    'break-word' }}>
                                </span> */}

                            </li>
                            <li className='my-2'>
                              <p>
                              {t('list3Bb')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list3Bc')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list3Bd')}

                              </p>
                            </li>

                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
        </div>
      </div>

                                <hr />

{/* 4th member */}
<div className="team1">
      <div className="team-info1" data-aos="fade-right" data-aos-duration="2000">
        <h4 className='tw-text-bone name text-sm-center'>
                {t('name4')}
            </h4>
            {/* <h5 className='mt-2 mb-3 category text-sm-center tw-text-bone'>({t('category4')})</h5> */}

            <div className='text-start py-2'>
                        <h5 className='tw-text-bone'>
                            {t('list4A')}
                        </h5>

                        <ul
                            className='mt-3 mb-5 tw-text-start tw-text-bone'>
                            <li><p>{t('list4Aa')}</p></li>

                        </ul>
                    </div>

                    <div className='text-start'>
                        <h5 className='tw-text-bone'>
                            {t('list4B')}
                        </h5>

                        <ul className='mt-3 mb-5 tw-text-bone'>
                            <li><p>{t('list4Ba')} .
                            </p> 
                                    {/* <span style={{ wordWrap:
                                    'break-word' }}>
                                </span> */}

                            </li>
                            <li className='my-2'>
                              <p>
                              {t('list4Bb')}

                              </p>
                            </li>

                            <li className='my-2'>
                              <p>
                              {t('list4Bc')}

                              </p>
                            </li>

                        </ul>

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
        </div>
        <div className="team-image1" data-aos="fade-left" data-aos-duration="2000">
          <img src={Person1} className='' />
        </div>


      </div>

    </div>








    {/* 7th member */}



    


    <Footer />

    
    </>
  )
}

export default Team