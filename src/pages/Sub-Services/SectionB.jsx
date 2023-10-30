import React from 'react'
import { useTranslation } from 'react-i18next'
// import './sectionB.css'
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';

const SectionB = () => {
  const {t} = useTranslation();

  return (
    <>
        <h2 className='tw-text-bone text-center mt-4'>
          {t('SectionB')}
        </h2>


        <div className="container my-4">
          <p className='tw-text-bone'>
            {t('BDescription_01')}
          </p>

          <p className='tw-text-bone'>
          {t('BDescription_02')}
          </p>


        <p className='mt-5 tw-text-gold'>
        {t('Bspan')}
        </p>
          

          <div className="mt-4">
            <h4 className='tw-text-bone'>
              {t('SectionB1')}
            </h4>


            <p className='tw-text-bone mt-4'>
              {t('B1Description_01')}
            </p>

            <p className='tw-text-bone'>
              {t('B1Description_02')}
            </p>
          </div>
        </div>

        <div className='mt-5 container'>

<div className=' my-4 a1 tw-bg-midnight p-4 rounded-3'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg"  alt="" />
  

  <div className=' about'>
  <h5 className='tw-text-bone text-center'>
    {t('B1a')}
  </h5>
  <ul className='mt-4 ms-lg-3'>
<li className='tw-text-bone'>
<p className=''>{t('descB1a')}</p>
</li>

<li className='tw-text-bone'>
<p className=''>{t('B1aDuration')}</p>
</li>

<li className='tw-text-bone'>
<p className=''>{t('B1adesc1')}</p>
</li>
<li className='tw-text-bone'>
<p className=''>{t('B1alanguage')}</p>
</li>

<li className='tw-text-bone'>
{t('Price')} 
<ul className='mt-2' style={{ listStyleType: "circle" }}>
  <li>
    <p>
      {t('B1aSession1')}
    </p>
  </li>

  <li>
    <p>
      {t('B1aSession2')}
    </p>
  </li>
  <li>
    <p>{t('B1aSession3')}</p>
  </li>
</ul>

<li className='button tw-list-none ms-4 mt-5'>
<a href='https://SOULSMITH.as.me/' target='_blank' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">{t('Book Now')}</a>

</li>
</li>


</ul>
  </div>
</div>



</div>
        
        <Footer />
      
    </>
  )
}

export default SectionB