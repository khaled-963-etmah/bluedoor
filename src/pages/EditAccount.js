import React from "react";
import EditAccount from "../Components/EditAccount/EditAccount";
import Navpar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/Footer";
const editaccount = (props) => {
  return (
    <div>
      <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
      <EditAccount></EditAccount>
      <Footer></Footer>
    </div>
  );
};
export default editaccount;
