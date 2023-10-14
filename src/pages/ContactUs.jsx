import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer';

const ContactUs = () => {

    const { t } = useTranslation();


  return (
    <>
        <div className='container mt-5 mx-auto'>
        <div className="row gap-5 mx-auto">
          <div className="col-md-6">
            <h1 className='tw-text-gold'>Contact Info</h1>

            <div className='row mt-4'>
              <p className='col-3 tw-text-gold'>Contact us:</p>
              <p className='col text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?
              </p>
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Address:</p>
              <p className='col text-white'>
                Empathy Sauce Co., Ltd. (Head Office)
                521, 523 Soi Charoen Nakhon 5/1 Charoen Nakhon Road
                Khlong Ton Sai, Khlong San Bangkok 10600
              </p>
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Phone:</p>
              <p className='col text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?
              </p>
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Email:</p>
              <p className='col text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?
              </p>
            </div>
                </div>

                {/* form */}
                <div className="col">
                
                {/* <form action="">
                    <div className='row'>
                        <div className='col'>
                            
                        <input type="text" className='form-control' placeholder='Your Name' />
                        </div>

                        <div className='col'>
                        <input type="text" className='form-control' placeholder='Your Name' />

                        </div>

                    </div>
                </form> */}

<form action="" className='tw-w-full tw-max-w-lg mt-2'>
<div className="tw-flex tw--mx-3 tw-mb-6">
    <div className="tw-w-full tw-md:w-1/2 tw-px-3 tw-mb-6 tw-md:mb-0">
      <label
        className="tw-block tw-uppercase tw-tracking-wide tw-text-gold tw-text-xs tw-font-bold tw-mb-2"
        htmlFor="grid-first-name"
      >
        Your Name
      </label>
      <input
        className="tw-appearance-none tw-block tw-w-full tw-bg-bone tw-text-gray-700 tw-border tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight tw-focus:tw-outline-none tw-focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
      />
      {/* <p className="tw-text-red-500 tw-text-xs tw-italic">Please fill out this field.</p> */}
    </div>
    <div className="tw-w-full tw-md:w-1/2 tw-px-3">
      <label
        className="tw-block tw-uppercase tw-tracking-wide tw-text-gold tw-text-xs tw-font-bold tw-mb-2"
        htmlFor="grid-last-name"
      >
        Your Email
      </label>
      <input
        className="tw-appearance-none tw-block tw-w-full tw-bg-bone tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight tw-focus:tw-outline-none tw-focus:bg-white tw-focus:border-gray-500"
        id="grid-last-name"
        type="email"
        placeholder="Your Email"
      />
    </div>  
</div>

<div style={{ marginTop: '-35px' }} className='inline-block'>
    <textarea className='tw-resize tw-rounded-md tw-bg-bone py-2 px-3' placeholder='Your Message' name="" id=""></textarea>
</div>

<button className='tw-bg-gold tw-text-sm tw-px-3 tw-py-3 text-white mt-2'>BOOK NOW</button>

</form>

                </div>
            </div>


            {/* map */}

            <div className='mx-auto px-2 my-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.5687291042332!2d100.5084235462813!3d13.725174239190665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b2efbe5181%3A0x838a32522037d70a!2sEmpathy%20Sauce%20Co.%2CLtd.!5e0!3m2!1sen!2smm!4v1696956874400!5m2!1sen!2smm"  style={{ border: 0, width: '100%', height: 500 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


        <Footer />
    </>
  )
}

export default ContactUs