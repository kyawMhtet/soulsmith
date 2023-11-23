import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a1.css'
import Footer from '../../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import 'react-accessible-accordion/dist/fancy-example.css';
import {Accordion,AccordionItem,AccordionItemButton,AccordionItemHeading,AccordionItemPanel} from 'react-accessible-accordion'
import { Carousel } from 'react-responsive-carousel';
import A1a from '../../assets/services/A1a/A1a.png'
import one from '../../assets/services/A1a/1.png'
import two from '../../assets/services/A1a/2.png'

const SectionA1 = () => {

  const {t} = useTranslation();

  return (
    <>
      <h2 className='text-center mt-4 tw-text-bone'>
        {t('SectionA1')}
      </h2>

      <div className='container mt-4 w-100'>
        <p className='tw-text-bone'>
          {t('A1Description_01')}
        </p>
        {/* <br /> */}
        <p className="tw-text-bone">
          {t('A1Description_02')}
        </p>
      </div>


 <div className='mt-5 container'>
  
  <div className='tw-bg-midnight rounded-3'>
      <div className='a1 w-100'>

<img src={A1a} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A1a')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>- {t('descA1a')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>- {t('A1aDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>- {t('A1adesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>- {t('A1alanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>- {t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A1aSession1')}
        </p>
      </li>
      <li>
        <p>{t('A1aSession2')}</p>
      </li>
      <li>
        <p>{t('A1aSession3')}</p>
      </li>
    </ul>
  </li>

  <li className='button tw-list-none ms-4 mt-5'>

<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>


  </li>
</ul>

</div>

</div>

{/* <button className='w-100 pb-3 px-4'>
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
        
            <img src={two} alt="" />
         
            <h5 className='tw-text-bone'>
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

<button className='w-100 pb-3 px-4'>
<Accordion allowZeroExpanded style={{border: 'none'}}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion-btn  rounded-2 tw-bg-midnight tw-text-bone'>
                        <h5>{t('A1a2')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
                <img src={one} alt="" />
         


        
         <h5 className='tw-text-bone'>
           {t('A1a2')}
         </h5>

         <div>
         <a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone px-3 py-2 tw-rounded-md">{t('Book Now')}</a>
         </div>

          
    </div>  
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
</button> */}



      </div>







      <div className='tw-bg-midnight rounded-3'>
      <div className='a1a1 w-100'>

<img src={two} alt="" />


<div className='about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A1a1')}
    </h5>
{/* <ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA1a')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A1aDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A1adesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A1alanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A1aSession1')}
        </p>
      </li>
      <li>
        <p>{t('A1aSession2')}</p>
      </li>
      <li>
        <p>{t('A1aSession3')}</p>
      </li>
    </ul>
  </li>

  <li className='button tw-list-none ms-4 mt-5'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

  </li>
</ul> */}
<div className='button1'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>
</div>
</div>



</div>



      </div>

      </div>



      <Footer />

    </>
  )
}

export default SectionA1