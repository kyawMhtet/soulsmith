import React from 'react'
import MainLogo from '../assets/MainLogo.png'

const Footer = () => {
  return (
    <div className='footer tw-bg-midnight' style={{ marginTop: 150 }}>
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12 col-lg-3 col-md-3">
                    <img src={MainLogo} alt="" className='w-75 d-block mx-auto' />
                </div>
                <div className="col-12 col-lg-3 col-md-3 text-center mt-4 pt-4">
                    <h5 className='tw-text-gold'>BETTER YET, SEE US IN PERSON</h5>
                    <p className='text-white'>
                        We love our customers, so feel free to visit during normal business hours.
                    </p>
                </div>
                <div className="col-12 col-lg-3 col-md-3 mt-3">
                <iframe className='rounded-3 d-block mx-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.831269853482!2d100.50927172278587!3d13.725170345225289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b2efbe5181%3A0x838a32522037d70a!2sEmpathy%20Sauce%20Co.%2CLtd.!5e0!3m2!1sen!2smm!4v1696444808945!5m2!1sen!2smm" style={{ width: 300, height: 200, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 col-lg-3 col-md-3 text-center text-white mt-4 pt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eligendi, dolorum ratione id quo quasi harum nulla. Nobis, sequi rerum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer