import React from "react";
import style from "./Thanks.module.css";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
const account = (props) => {
  return (
    <div>
      <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
      <div className={style.container}>
        <h1 className={style.h1}>Thanks for send quastion!</h1>
        <p className={style.p}>check your email.</p>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default account;
