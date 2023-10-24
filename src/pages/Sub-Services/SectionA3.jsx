import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a3.css'

const SectionA3 = () => {

  const {t} = useTranslation();

  return (
    <>
      <h2 className='tw-text-bone text-center text-decoration-underline mt-4'>
      {t('SectionA3')}
      </h2>


      <div className="container my-4">
        <p className='tw-text-bone'>
          {t('A3Description_01')}
        </p>

        
        <p className='tw-text-bone'>
          {t('A3Description_02')}
        </p>


        <div className='a3 tw-bg-midnight p-4 rounded-3'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />


  <div className='  about'>
  <h5 className='tw-text-bone text-center text-decoration-underline'>
          {t('A3a')}
        </h5>
    <ul className='mt-3 ms-lg-3'>
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
        {t('Price')} 
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

      <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
    </ul>

  </div>
</div>



{/* A3b */}
<div className=' a3 tw-bg-midnight p-4 rounded-4'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />


  <div className='about'>
  <h5 className='tw-text-bone text-center text-decoration-underline'>
          {t('A3b')}
        </h5>
    <ul className='mt-3 ms-lg-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA3b')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A3bdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A3blanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>


{/* A3c */}
<div className=' a3 tw-bg-midnight p-4 rounded-4'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />


  <div className='about'>
  <h5 className='tw-text-bone text-center text-decoration-underline'>
          {t('A3c')}
        </h5>
    <ul className='mt-3 ms-lg-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA3c')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A3cdesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A3clanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>



{/* A3d */}

<div className=' a3 tw-bg-midnight p-4 rounded-4'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />


  <div className='about'>
  <h5 className='tw-text-bone text-center text-decoration-underline'>
          {t('A3d')}
        </h5>
    <ul className='mt-3 ms-lg-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('descA3d')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>{t('A3ddesc1')}</p>
      </li>
      <li className='tw-text-bone'>
        <p className=''>{t('A3dlanguage')}</p>
      </li>

      <li className='tw-text-bone'>
        {t('Price')} 
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

        <li className='button tw-list-none ms-4 mt-5'>
    <a href='https://SOULSMITH.as.me/' className="tw-text-bone tw-bg-gold px-3 py-2 tw-rounded-md">BOOK NOW</a>

      </li>
      </li>

      
    </ul>
  </div>
</div>


      </div>


      {/* <div className="container mt-5">
      <div className="row  mx-auto gap-5">
          <div className="col p-2">
          <div className=' a3 w-100 mx-auto'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />
  </div>

  <div className='mt-3 ms-4 about'>
  <h5 className='tw-text-bone  text-decoration-underline'>
          {t('A2a')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Service Delivery Channels: Available for Online & Onsite at SOULSMITH</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Language: Available for Thai Language only</p>
      </li>

      <li className='tw-text-bone'>
        Price :
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>Single session, 1,500</p>
          </li>
          <li>
            <p>5 Sessions: xxx</p>
          </li>
          <li>
            <p>10 Session: xxx</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>
          </div>



          <div className="col">
                    <div className=' a3 w-100 mx-auto'>

    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg"  alt="" />
  </div>

  <div className='mt-3 ms-4 about '>
  <h5 className='tw-text-bone  text-decoration-underline'>
          {t('A2a')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Service Delivery Channels: Available for Online & Onsite at SOULSMITH</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Language: Available for Thai Language only</p>
      </li>

      <li className='tw-text-bone'>
        Price :
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>Single session, 1,500</p>
          </li>
          <li>
            <p>5 Sessions: xxx</p>
          </li>
          <li>
            <p>10 Session: xxx</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>
          </div>
        </div>
      </div> */}

      
    </>
  )
}

export default SectionA3