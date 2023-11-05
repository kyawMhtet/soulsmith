import React from 'react'
import MainLogo from '../assets/MainLogo.png'
import { useTranslation } from 'react-i18next'
import './footer.css'

const Footer = () => {

    const {t} = useTranslation();

  return (
    <div className='footer tw-bg-midnight' style={{ marginTop: 150 }}>
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <img src={MainLogo} alt="" className='w-75 d-block mx-auto' />
                </div>
                <div className="col-12 col-lg-3 col-md-6 text-center pt-4">
                    <h5 className='tw-text-gold'>{t('Contact Us')}</h5>
                    <p className='tw-text-bone'>
                        {t('Location')}
                    </p>
                </div>
                <div className="col-12 col-lg-3 col-md-6 mt-3">
                <iframe className='rounded-3 d-block mx-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.831269853482!2d100.50927172278587!3d13.725170345225289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b2efbe5181%3A0x838a32522037d70a!2sEmpathy%20Sauce%20Co.%2CLtd.!5e0!3m2!1sen!2smm!4v1696444808945!5m2!1sen!2smm" style={{ width: 300, height: 170, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 col-lg-3 col-md-6 pt-4 text-center">
                    <h5 className='tw-text-gold'>
                        NEWSLETTER
                    </h5>
                    <small className='tw-text-bone'>Get the latest updates and offers.</small>
                    

                    <div className="input-group mt-3 w-75 mx-auto">
  <input
    type="email"
    className="form-control border-0 h-100"
    placeholder="email"
    aria-describedby="button-addon2"
    style={{ backgroundColor: '#393D4A' }}

  />
  <button
    className="btn"
    type="button"
    id="button-addon2"
    style={{ backgroundColor: "#C4A962" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
  </button>
</div>

                </div>
            </div>
        </div>


    <div className='d-flex justify-content-center mt-2 p-3' >
    <small className='tw-text-bone'>
        © 2023 SOULSMITH. All rights reserved
        </small>
    </div>
    </div>
  )
}

export default Footer