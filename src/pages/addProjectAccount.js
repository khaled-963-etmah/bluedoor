import React from "react";
import Navpar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/Footer";
import AddProejct from "../Components/AddProjectAccount/AddProjectAccount";
const account = (props) => {
  return (
    <div>
      <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
      <AddProejct></AddProejct>
      <Footer></Footer>
    </div>
  );
};
export default account;
