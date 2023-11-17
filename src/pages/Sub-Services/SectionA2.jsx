import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a2.css'
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import 'react-accessible-accordion/dist/fancy-example.css';
import {Accordion,AccordionItem,AccordionItemButton,AccordionItemHeading,AccordionItemPanel} from 'react-accessible-accordion'
import A2a from '../../assets/services/A2a/A2a.png';
import three from '../../assets/services/A2a/3.png';


const SectionA2 = () => {

  const { t } = useTranslation();

  return (
    <>
      <h2 className='text-center tw-text-bone  mt-4'>
        {t('SectionA2')}
      </h2>


      <div className='container mt-4 w-100'>
        <p className='tw-text-bone'>
          {t('A2Description_01')}
        </p>
        {/* <br /> */}
        <p className="tw-text-bone">
          {t('A2Description_02')}
        </p>



        {/* <h5 className='tw-text-gold mt-5 text-decoration-underline'>
          {t('Service')}
        </h5> */}




      </div>


      <div className='mt-5 container'>



      <div className='tw-bg-midnight rounded-3'>
      <div className='a2 w-100'>

<img src={A2a} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A1a')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA2a')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A2aDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A2adesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A2alanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A2aSession1')}
        </p>
      </li>
      <li>
        <p>{t('A2aSession2')}</p>
      </li>
      <li>
        <p>{t('A2aSession3')}</p>
      </li>
    </ul>
  </li>

  {/* <li className='button tw-list-none ms-4 mt-5'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

  </li> */}
</ul>

</div>

</div>

<button className='w-100 pb-3 px-4'>
<Accordion allowZeroExpanded style={{border: 'none'}}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion-btn  rounded-2 tw-bg-midnight tw-text-bone'>
                        <h5>{t('A1a1')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
        
            <img src={three} alt="" />
         


        
            <h5 className='tw-text-bone '>
              {t('A1a1')}
            </h5>

            <div>
            <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone px-3 py-2 tw-rounded-md">{t('Book Now')}</a>
            </div>

          

    </div>  
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
</button>




      </div>






</div>


<Footer />
      
    </>
  )
}

export default SectionA2