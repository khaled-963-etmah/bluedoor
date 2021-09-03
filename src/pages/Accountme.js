import React from 'react'
import Account from '../Components/Accountme/Accountme'
import Navpar from '../Components/NavBar/navBar'
import Footer from '../Components/Footer/Footer'
const account = (props) => {
    return (
        <div>
            <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
            <Account></Account>
            <Footer></Footer>
        </div>
    )
}
export default account;