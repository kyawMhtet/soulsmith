import React from 'react'
import { useTranslation } from 'react-i18next'
import 'react-accessible-accordion/dist/fancy-example.css';
import {Accordion,AccordionItem,AccordionItemButton,AccordionItemHeading,AccordionItemPanel} from 'react-accessible-accordion'
import './css/section-a3.css'
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import A3a from '../../assets/services/A3/A3a.png'
import five from '../../assets/services/A3/5.png'
import four from '../../assets/services/A3/4.png'
import six from '../../assets/services/A3/6.png'
import A3b from '../../assets/services/A3/A3b.png'
import seven from '../../assets/services/A3/7.png'
import A3c from '../../assets/services/A3/A3c.png'
import eight from '../../assets/services/A3/8.png'
import A3d from '../../assets/services/A3/A3d.png'
import nine from '../../assets/services/A3/9.png'


const SectionA3 = () => {

  const {t} = useTranslation();

  return (
    <>

      <h2 className='tw-text-bone text-center mt-4'>
      {t('SectionA3')}
      </h2>


      <div className="container my-4">
        <p className='tw-text-bone'>
          {t('A3Description_01')}
        </p>

        
        <p className='tw-text-bone'>
          {t('A3Description_02')}
        </p>




      <div className='tw-bg-midnight rounded-3'>
      <div className='a3 w-100'>

<img src={A3a} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A3a')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA3a')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3aDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3adesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A3alanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A3aSession1')}
        </p>
      </li>
      <li>
        <p>{t('A3aSession2')}</p>
      </li>
      <li>
        <p>{t('A3aSession3')}</p>
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
                        <h5>{t('A3a1')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
        
            <img src={four} alt="" />
         


        
            <h5 className='tw-text-bone'>
              {t('A3a1')}
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
                        <h5>{t('A3a2')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
                <img src={five} alt="" />
         


        
         <h5 className='tw-text-bone'>
           {t('A3a2')}
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
                        <h5>{t('A3a3')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
                <img src={six} alt="" />
         


        
         <h5 className='tw-text-bone'>
           {t('A3a3')}
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












{/* A3b */}
<div className='tw-bg-midnight rounded-3'>
      <div className='a3  p-4 w-100'>

<img src={A3b} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A3b')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA3b')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3bDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3bdesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A3blanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A3bSession1')}
        </p>
      </li>
      <li>
        <p>{t('A3bSession2')}</p>
      </li>
      <li>
        <p>{t('A3bSession3')}</p>
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
                        <h5>{t('A3b1')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
        
            <img src={seven} alt="" />
         


        
            <h5 className='tw-text-bone'>
              {t('A3b1')}
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


{/* A3c */}
<div className='tw-bg-midnight rounded-3'>
      <div className='a3 p-4 w-100'>

<img src={A3c} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A3c')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA3c')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3cDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3cdesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A3clanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A3cSession1')}
        </p>
      </li>
      <li>
        <p>{t('A3cSession2')}</p>
      </li>
      <li>
        <p>{t('A3cSession3')}</p>
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
                        <h5>{t('A3c1')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
        
            <img src={eight} alt="" />
         


        
            <h5 className='tw-text-bone'>
              {t('A3c1')}
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



{/* A3d */}

<div className='tw-bg-midnight rounded-3'>
      <div className='a3 p-4 w-100'>

<img src={A3d} alt="" />


<div className='  about w-100'>
<h5 className='tw-text-bone text-center'>
      {t('A3d')}
    </h5>
<ul className='mt-4 ms-lg-3'>
  <li className='tw-text-bone'>
    <p className=''>{t('descA3d')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3dDuration')}</p>
  </li>

  <li className='tw-text-bone'>
    <p className=''>{t('A3ddesc1')}</p>
  </li>
  <li className='tw-text-bone'>
    <p className=''>{t('A3dlanguage')}</p>
  </li>

  <li className='tw-text-bone'>
    <p>{t('Price')}</p> 
    <ul className='mt-2' style={{ listStyleType: "circle" }}>
      <li>
        <p>
          {t('A3dSession1')}
        </p>
      </li>
      <li>
        <p>{t('A3dSession2')}</p>
      </li>
      <li>
        <p>{t('A3dSession3')}</p>
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
                        <h5>{t('A3d1')}</h5>
                        <button href="" type='button' className='btn btn-secondary'>Select</button>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='accordion-content mx-auto rounded-2' >
        
            <img src={eight} alt="" />
         


        
            <h5 className='tw-text-bone'>
              {t('A3d1')}
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

export default SectionA3