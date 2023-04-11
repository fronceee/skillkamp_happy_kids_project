import React from 'react';
import { Outlet } from 'react-router-dom';
import PromoCodeBar from './PromoCodeBar';
import NavBar from './NavBar';
import Footer from '../containers/Footer';
import LogoBar from './LogoBar';

function Layout() {
  return (
    <>
        <PromoCodeBar/>
        <LogoBar fontSize="text-5xl"/>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout