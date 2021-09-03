import { Link } from "react-router-dom";
import React from "react";
import classstyle from "./HowItWork.module.css";
import { bottom } from "@popperjs/core";
const howitwork = () => {
  return (
    <div>
      <div className={classstyle.container}>
        <div className={classstyle.firstContainer}>
          <div className={classstyle.textContainer}>
            <h1 className={classstyle.h1}>Searching for a member</h1>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>1. Post a offer or contest </h5>
              <p>
                Simply post a project or contest for what you need done and
                receive competitive bids from freelancers within minutes.
              </p>
            </div>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>
                2. Choose the perfect presenter{" "}
              </h5>
              <p>
                Browse freelancer profiles. Chat in real time. Compare proposals
                and select the best one. Award your project and your freelancer
                starts work.
              </p>
            </div>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>3. Pay when you’re satisfied </h5>
              <p>
                Pay securely using our Milestone Payment system. Release
                payments when it has been completed and you're 100% satisfied.
              </p>
            </div>
            <div className={classstyle.buttonContainer}>
              <Link to="/Jobs/Add-Jobs">
                <button className={classstyle.button}>Post a Job</button>
              </Link>
              <Link to="/Jobs/Add-freelance-offer">
                <button className={classstyle.button}>Post a Project</button>
              </Link>
            </div>
          </div>
          <div className={classstyle.imageContainer}>
            <img src="./img/Group 8.svg" />
          </div>
        </div>

        <div
          className={classstyle.firstContainer}
          style={{ marginTop: "20%", marginBottom: "10%" }}
        >
          <div className={classstyle.imageContainer}>
            <img src="./img/Group 9.svg" style={{ paddingLeft: "1.1em" }} />
          </div>
          <div
            className={classstyle.textContainer}
            style={{ marginLeft: "8.5em" }}
          >
            <h1 className={classstyle.h1}>Searching for a job</h1>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>1. Post a offer or contest </h5>
              <p>
                Simply post a project or contest for what you need done and
                receive competitive bids from freelancers within minutes.
              </p>
            </div>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>
                2. Choose the perfect presenter{" "}
              </h5>
              <p>
                Browse freelancer profiles. Chat in real time. Compare proposals
                and select the best one. Award your project and your freelancer
                starts work.
              </p>
            </div>
            <div className={classstyle.context}>
              <h5 className={classstyle.h5}>3. Pay when you’re satisfied </h5>
              <p>
                Pay securely using our Milestone Payment system. Release
                payments when it has been completed and you're 100% satisfied.
              </p>
            </div>
            <div className={classstyle.buttonContainer}>
              <Link to="/Jobs/Freelance">
                <button className={classstyle.button}>freelance offers</button>
              </Link>
              <Link to="/Jobs/Jobs">
                <button className={classstyle.button}>Job offers</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default howitwork;
