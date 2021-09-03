import React from "react";
import Navpar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/Footer";
import AddJobOffer from "../Components/AddJobOffer/AddJobOffer";
const addproject = (props) => {
  return (
    <div>
      <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
      <AddJobOffer></AddJobOffer>
      <Footer />
    </div>
  );
};
export default addproject;
