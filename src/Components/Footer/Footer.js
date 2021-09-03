import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import footerstyle from "./footer.module.css";
const footer = (props) => {
  return (
    <footer className={footerstyle.mainContainer}>
      <div className={footerstyle.Container}>
        <div className={footerstyle.row}>
          <div className={footerstyle.col}>
            <ul>
              <li>
                <Link className={footerstyle.link} to="/about">
                  About BlueDoor
                </Link>
              </li>
              <li>
                <Link className={footerstyle.link} to="/commonQuestions">
                  common questions
                </Link>
              </li>
              <li>
                <a className={footerstyle.link} href="/guaranteeYourRights">
                  guarantee your rights
                </a>
              </li>
              <li>
                <Link className={footerstyle.link} to="/termsOfUse">
                  terms of use
                </Link>
              </li>
            </ul>
          </div>

          <div className={footerstyle.col}>
            <ul>
              <li>
                <Link className={footerstyle.link} to="/jobs/jobs">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className={footerstyle.link} to="/Jobs/Freelance">
                  Freelane
                </Link>
              </li>
              <li>
                <Link className={footerstyle.link} to="/Members">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          <div className={footerstyle.col}>
            <ul>
              <li>
                <h6> Ask Any Quastion</h6>
              </li>
              <li>
                <form
                  action="https://formsubmit.co/mohammadme255@gmail.com"
                  method="POST"
                >
                  <textarea
                    className={footerstyle.Control}
                    type="text"
                    name="quastion"
                    required
                  />
                  <input type="hidden" name="_template" value="table"></input>
                  <input
                    type="hidden"
                    name="name"
                    value={props.accountName}
                  ></input>
                  <input
                    type="hidden"
                    name="email"
                    value={props.accountEmail}
                  ></input>

                  <input type="hidden" name="_captcha" value="false"></input>
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:3000/Thanks"
                  ></input>
                  <br></br>
                  <button className={footerstyle.sumbit} type="submit">
                    Send
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
const mapStateToProps = (state) => {
  return {
    accountName: state.accountName,
    accountEmail: state.accountEmail,
  };
};

export default connect(mapStateToProps)(footer);
