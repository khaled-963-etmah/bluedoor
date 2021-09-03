import React from 'react'
import Navpar from '../Components/NavBar/navBar'
import Footer from '../Components/Footer/Footer'
import Singup from '../Components/Signup/Signup'
const sing_up = () => (
    <div>
         <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
        <Singup/>
        <Footer/>
    </div>
);
export default sing_up;