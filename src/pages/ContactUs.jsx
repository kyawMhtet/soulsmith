import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');




    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('service_quv33gm', 'template_4oijqle', {
        from_name: name,
        from_email: email,
        message: message,
      }, 'vBegxAp8ZYjCa06sF')
        .then((response) => {
          // console.log('Email sent successfully:', response);
          window.alert('Email sent successfully!');
        }, (error) => {
          // console.error('Email sending failed:', error);
          window.alert('Email sending failed.');
        });

            // Clear the form fields after sending
    setName('');
    setEmail('');
    setMessage('');
    };


  return (
    <>


        <div className='container mt-5'>
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12">
            <h2 className='tw-text-gold'>{t('Contact Info')}</h2>

            <div className='row mt-4'>
              {/* <p className='col-3 tw-text-gold'>Contact us:</p>
              <p className='col tw-text-bone'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p> */}
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Address:</p>
              <p className='col tw-text-bone'>
                {t('Location')}
              </p>
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Phone:</p>
              <p className='col tw-text-bone'>
              +66 63 193 3642 
              </p>
            </div>

            <div className='row'>
              <p className='col-3 tw-text-gold'>Email:</p>
              <p className='col tw-text-bone'>
              empathy.sauce@gmail.com
              </p>
            </div>
                </div>

                {/* form */}
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-4">
                
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

<form onSubmit={sendEmail} className='tw-w-full tw-max-w-lg mx-auto'>
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
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>  
</div>

<div style={{ marginTop: '-35px' }} className='inline-block'>
    <textarea className='form-control tw-resize' style={{ backgroundColor: '#E8E5D7' }} rows='5' placeholder='Your Message' name="" id=""
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    ></textarea>
</div>

{/* <button className='tw-bg-gold tw-text-sm tw-px-5 tw-py-3 tw-text-bone mt-2'>Send</button> */}
<button type='submit' className='w-25 rounded-1 tw-bg-gold tw-text-sm tw-text-bone py-3 mt-3'><b>SEND</b></button>

</form>

                </div>
            </div>


            {/* map */}

            <div className='mx-auto my-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.5687291042332!2d100.5084235462813!3d13.725174239190665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b2efbe5181%3A0x838a32522037d70a!2sEmpathy%20Sauce%20Co.%2CLtd.!5e0!3m2!1sen!2smm!4v1696956874400!5m2!1sen!2smm"  style={{ border: 0, width: '100%', height: 500 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


        <Footer />
    </>
  )
}

export default ContactUs