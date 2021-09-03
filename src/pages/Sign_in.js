import React from 'react';

import NavBar from '../Components/NavBar/navBar';
import Footer from '../Components/Footer/Footer';
import SignIn from '../Components/Signin/signin'
const Sign_in = () => {
    return (
        <div>
              <NavBar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
            <SignIn />
            <Footer />
        </div>
    )
}

export default Sign_in;