import React from 'react';
import Navpar from '../Components/NavBar/navBar'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'

const home_page = () => (
  <div>
    <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
    <Home />
    <Footer />
  </div>
);
export default home_page;
