import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import MainLogo from '../assets/MainLogo.png';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import DownArrow from '../assets/down-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'


const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);


  const [isNavbar, setIsNavbar] = useState(null);

  const [ANav, setANav] = useState(false);
  const [subNav, setSubNav] = useState(false);


  useEffect(() => {
    setIsNavbar(false);
  }, [location.pathname, t])

  const toggleNavbar = () => {
    setIsNavbar(true);
  }

  
  // Load the offcanvas menu state from localStorage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem('offcanvasOpen');
    if (storedState) {
      setIsOffcanvasOpen(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen((isOffcanvasOpen) => !isOffcanvasOpen);
    
    if (!isOffcanvasOpen) {
   
      const backdrops = document.querySelectorAll('.offcanvas-backdrop');
      backdrops.forEach((backdrop) => {
        backdrop.remove();
      });
    }
  };

  useEffect(() => {
    setIsOffcanvasOpen(false);
  }, [location.pathname]);

  

  const navbarClasses = `navbar navbar-expand-lg sticky-top tw-bg-primary shadow-sm ${
    isNavbarFixed ? ' navbar-transition' : ''
  }`;
  

  const toggleA = () => {
    setANav((prevANav) => !prevANav);
  }

  const toggleA1 = () => {
    setSubNav((prevSubNav) => !prevSubNav);
  }

  return (
    <>
      <div className='tw-hidden lg:tw-block tw-booking tw-bg-bone tw-text-gold '>
        <div className='tw-grid tw-grid-cols-5'>
          <div className='tw-text-right tw-py-5 tw-pe-5 '> +66 63 193 3642</div>
          <div className='tw-py-5 tw-px-8  '>empathy.sauce@gmail.com</div>
          <div className='tw-col-span-3'>
            <div className='tw-flex tw-ps-10 tw-space-x-10 tw-justify-evenly'>
              <div className='tw-py-5'>Empathy Sauce</div>
              <div className='tw-py-5'>The Workshoppers</div>
              <div className='tw-py-1'>
                <button className='tw-bg-gold tw-text-sm tw-px-4 tw-py-4 text-dark'>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={navbarClasses} >
        <div className="container-fluid ">
          <a className="navbar-brand ms-4" href="#">
            <img src={MainLogo} alt="" />
          </a>
          <button
            className="navbar-toggler border-0 outline-none"
            type="button"

            
            // 
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon" />
          </button>


          
          <div
            className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`}
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: '75%' }}
          >
                        {/* <style>
              {`
                .offcanvas-backdrop.show {
                  background-color: transparent;
                  box-shadow: none;
                }
              `}
            </style> */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label={`Close`}
              />
            </div>
            <div className="">
              {/* <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item  mx-2">
                  <NavLink to={'/'} className="nav-link tw-text-gold" onClick={toggleOffcanvas}>
                    {t('Home')}
                  </NavLink>
                </li>

                <li className="nav-item  mx-2">
                  <NavLink to={'/services'} className="nav-link tw-text-gold" onClick={toggleOffcanvas}>
                    {t('Service')}
                  </NavLink>
                </li>

                <li className="nav-item dropdown mx-2 py-2">
                
  <button class="dropbtn tw-text-gold">Dropdown</button>
  <div class="dropdown-content mt-1">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
 
</div>
                </li>

                <li className="nav-item mx-2">
                  <NavLink to={'/product'} className="nav-link tw-text-gold" onClick={toggleOffcanvas}>
                    {t('Product')}
                  </NavLink>
                </li>

                <li className="nav-item mx-2">
                  <NavLink to={'/team'} className="nav-link tw-text-gold" onClick={toggleOffcanvas}>
                    {t('Team')}
                  </NavLink>
                </li>

                <li className="nav-item mx-2">
                  <NavLink to={'/contact-us'} className="nav-link tw-text-gold" onClick={toggleOffcanvas}>
                    {t('Contact Us')}
                  </NavLink>
                </li>

                <li className='nav-item tw-ms-5'>
                  <LanguageToggle className="nav-link" />
                </li>
              </ul> */}

<ul className="nested-dropdowns navbar-nav justify-content-end flex-grow-1 pe-3 border-0">
    <li className="nav-item mx-2">
    <NavLink to={'/'} className="nav-link tw-text-gold" >
                    {t('Home')}
                  </NavLink>
    </li>
    <li className="nav-item mx-2">
        <div className="nested-dropdowns__item">
        <NavLink to={'/services'} className="nav-link tw-text-gold" >
                    {t('Services')}
                  </NavLink>
            {/* <div class="nested-dropdowns__arrow">...</div> */}
        </div>
        <ul>


        <li>
                <div className="nested-dropdowns__item">
                  <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling'} className="nav-link tw-text-gold"  >
                {t('SectionA')}

                  </NavLink>
                    {/* <div class="nested-dropdowns__arrow">...</div> */}
                </div>
                <ul>
                    <li>
                      <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling/ListeningServiceandMindfulnessPractice'}
                        className="nav-link tw-text-gold" 
                      >
                        {t('SectionA1')}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling/Counseling'} className="nav-link tw-text-gold"  >
                      {t('SectionA2')}

                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling/Psychotherapy'} className="nav-link tw-text-gold"  >
                      {t('SectionA3')}

                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling/ArtsPsychotherapy'}
                        className="nav-link tw-text-gold" 
                      >
                      {t('SectionA4')}

                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={'/services/PsychologicalSupport:Psychotherapy&Counseling/TherapeuticWorkshop'} 
                      className="nav-link tw-text-gold" 
                      >
                      {t('SectionA5')}

                      </NavLink>
                    </li>
                </ul>
            </li>
        <li>
              <NavLink to={'/services/Healing&Therapy'} className="nav-link tw-text-gold" >
                {t('SectionB')}
              </NavLink>
        </li>

            <li>
              <NavLink to={'/services/Body-Mind -SoulMixologyService'} className="nav-link tw-text-gold"   >
                {t('SectionC')}

              </NavLink>
            </li>

        </ul>
    </li>
    <li className="nav-item mx-2">
    <NavLink to={'/team'} className="nav-link tw-text-gold" >
                    {t('Team')}
                  </NavLink>
    </li>
    <li className="nav-item mx-2">
    <NavLink to={'/contact-us'} className="nav-link tw-text-gold" >
                    {t('Contact Us')}
                  </NavLink>
    </li>

    <li className="nav-item mx-2">
    <LanguageToggle className="nav-link" />

    </li>
</ul>

            </div>
          </div>

        </div>
      </nav>

    

    {
      isNavbar && (
        <div class="drawer">
    
        <div class="drawer__overlay"></div>
    
      
        <div class="drawer__sidebar">

        <div className="offcanvas-header p-3">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsNavbar(false)}

                // data-bs-dismiss="offcanvas"
                // aria-label={`Close`}
              />
            </div>

        <ul className="nested-dropdowns navbar-nav justify-content-end flex-grow-1 pe-3 border-0">
        <li className="nav-item mx-2">
        <NavLink to={'/'} className="nav-link tw-text-gold" >
                        {t('Home')}
                      </NavLink>
        </li>
        <li className="nav-item mx-2">
            <div className="nested-dropdowns__item d-flex justify-content-between">
            <NavLink to={'/services'} className="nav-link tw-text-gold justify-content-between" >
                        {t('Services')} 

                      </NavLink>
                      <img src={DownArrow} alt="" onClick={toggleA}/>

            </div>

            {
              ANav && (
                            <ul>
    
    
            <li>
                    <div className="nested-dropdowns__item d-flex justify-content-between">
                      <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling'} className="nav-link d-flex tw-text-gold"  >
                    {t('SectionA')}
                      </NavLink>

                      <img src={RightArrow} alt="" onClick={toggleA1} />

                       
                    </div>
                    {
                      subNav && (
                        <ul className='A1-links'>
                        <li>
                          <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Listening Service and Mindfulness Practice'}
                            className="nav-link tw-text-gold" 
                          >
                            {t('SectionA1')}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Counseling'} className="nav-link tw-text-gold"  >
                          {t('SectionA2')}
    
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Psychotherapy'} className="nav-link tw-text-gold"  >
                          {t('SectionA3')}
    
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Arts Psychotherapy'}
                            className="nav-link tw-text-gold" 
                          >
                          {t('SectionA4')}
    
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={'/services/Psychological Support: Psychotherapy & Counseling/Therapeutic Workshop'} 
                          className="nav-link tw-text-gold" 
                          >
                          {t('SectionA5')}
    
                          </NavLink>
                        </li>
                    </ul>
                      )
                    }
                </li>
            <li>
                  <NavLink to={'/services/Healing & Therapy'} className="nav-link tw-text-gold" >
                    {t('SectionB')}
                  </NavLink>
            </li>
    
                <li>
                  <NavLink to={'/services/Body - Mind - Soul Mixology Service'} className="nav-link tw-text-gold"   >
                    {t('SectionC')}
    
                  </NavLink>
                </li>
    
            </ul>
              )
            }
        </li>


        

        <li className="nav-item mx-2">
        <NavLink to={'/team'} className="nav-link tw-text-gold" >
                    {t('Team')}
                  </NavLink>
        </li>
        <li className="nav-item mx-2">
        <NavLink to={'/contact-us'} className="nav-link tw-text-gold" >
                        {t('Contact Us')}
                      </NavLink>
        </li>
    
        <li className="nav-item mx-2">
        <LanguageToggle className="nav-link" />
    
        </li>
    </ul>
        </div>
    </div>
      )
    }


    </>
  );
};

export default NavBar;
