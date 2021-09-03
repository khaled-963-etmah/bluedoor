import React from "react";
import HowItWork from "../Components/HowItWork/HowItWork";
import Navpar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/Footer";
const howitwork = () => (
  <div>
    <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
    <HowItWork />
    <Footer />
  </div>
);
export default howitwork;
