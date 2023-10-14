import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Layout.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


const Layout = () => {

  const { i18n } = useTranslation();
  const location = useLocation();

  const body = document.body;

  useEffect(() => {
    body.classList.add('tw-bg-primary');
  },[])

  return (
    <>
        <NavBar className="" />
        <SwitchTransition>
          <CSSTransition classNames="fade" timeout={200} key={location.pathname}>
            <div className='tw-mt-0'>
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
    </>
  )
}

export default Layout