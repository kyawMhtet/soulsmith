import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a1.css'

const SectionA1 = () => {

  const {t} = useTranslation();

  return (
    <>
      <h2 className='text-center mt-4 tw-text-gold text-decoration-underline'>
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



        <div className=' my-4 a1'>
        <div className="mt-3 ">
            <img src="https://empathysauce.com/wp-content/uploads/2020/05/1Online-Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
          </div>

          <div className='mt-3 ms-4 info'>
          <h5 className='tw-text-gold text-decoration-underline'>
            {t('A1a')}
          </h5>
            <ul className=''>
              <li className='tw-text-bone'>
                <p>Duration 60 minutes</p>
              </li>
            </ul>
          </div>
        </div>



      </div>


    </>
  )
}

export default SectionA1