import React from 'react';
import Navpar from '../Components/NavBar/navBar'
import Footer from '../Components/Footer/Footer'
import AddProject from '../Components/AddProject/AddProgect'
const addproject = (props) => {
    return (
        <div>
            <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
            <AddProject></AddProject>
            <Footer />
        </div>
    )
}
export default addproject;
