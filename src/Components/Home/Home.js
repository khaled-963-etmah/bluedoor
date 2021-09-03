import React from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";
//import Link from 'react-dom'
const home_page = () => {
  return (
    <div style={{ overflow: "auto", color: "#212529", marginBottom: "10%" }}>
      <div style={{ width: "100%", height: "450px" }}>
        <span style={{ float: "left", margin: "3% 8% 0 6%", overflow: "auto" }}>
          <h1 style={{ fontSize: "70px", color: "#0496FF" }}>
            Join the world's,
            <br /> work marketplace
          </h1>
          <p style={{ fontSize: "30px", color: "#212529" }}>
            Find great talent. Build your business.
            <br />
            Take your career to the next level.
          </p>
          <Link to="/Jobs/Jobs">
            <button className={classes.butOne}>Find Work</button>
          </Link>
          <Link to="/Members">
            <button className={classes.butTow}>Find Freelancer</button>
          </Link>
        </span>
        <span style={{ float: "left", margin: "2% 0 0 7%", overflow: "auto" }}>
          <img
            src="./img/freelancer.svg"
            width="400px"
            height="400px"
            alt="freelancerphoto"
          />
        </span>
      </div>

      <div
        className={classes.bannerContainer}
        style={{ backgroundImage: "url(./img/client.png)" }}
      >
        <div className={classes.blackContainer}>
          <p style={{ fontSize: "25px", marginBottom: "75px" }}>For clients</p>
          <h1 style={{ fontSize: "70px", marginBottom: "35px" }}>
            Find talent
            <br />
            your way
          </h1>
          <b style={{ fontSize: "30px", fontWeight: "lighter" }}>
            Work with the largest network of independent
            <br />
            professionals and get things done—from quick
            <br />
            turnarounds to big transformations.
            <br />
          </b>
          <Link to="/Jobs/Add-Jobs">
            <button className={classes.butThree}>
              Post a jop
              <br /> and hire a pro{" "}
            </button>
          </Link>
          <Link to="Jobs/Freelance">
            <button className={classes.butThree}>
              Browes and <br />
              buy projects
            </button>
          </Link>
          <Link to="/Members">
            <button className={classes.butThree}>
              Let us help you find <br />
              right talent
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "84%",
          height: "600px",
          marginLeft: "4%",
          marginTop: "6%",
        }}
      >
        <h1 style={{ fontSize: "70px", marginLeft: "2%", color: "#0496FF" }}>
          Hire a pro for any skill
        </h1>
        <span
          style={{
            display: "flexBox",
            float: "left",
            margin: "3% 0 1% 3%",
            width: "60%",
          }}
          className={classes.serviceContainer}
        >
          <Link to="#" className={classes.linkOne}>
            - Development {"&"} IT
          </Link>
          <Link
            to="#"
            className={classes.linkOne}
            style={{ marginLeft: "5em" }}
          >
            - Design {"&"} Creative
          </Link>
          <br />
          <Link to="#" className={classes.linkOne}>
            - Sales {"&"} Marketing
          </Link>
          <Link
            to="#"
            className={classes.linkOne}
            style={{ marginLeft: "5em" }}
          >
            - Writing {"&"} Translation
          </Link>
          <br />
          <Link to="#" className={classes.linkOne}>
            - Customer Support
          </Link>
          <Link
            to="#"
            className={classes.linkOne}
            style={{ marginLeft: "5em" }}
          >
            - Finance {"&"} Accounting
          </Link>
          <br />
          <Link to="#" className={classes.linkOne}>
            - See all specializations
          </Link>
        </span>
        <span style={{ float: "left", margin: "-12% 0 0 0" }}>
          <img
            src="img\worker.svg"
            width="400px"
            height="400px"
            style={{ marginLeft: "4.5em", marginTop: "2em" }}
          />
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "600px",
          paddingLeft: "8%",
          marginTop: "0%",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginLeft: "4.0em",
            color: "#0496FF",
            marginBottom: "-0em",
          }}
        >
          Need something done?
        </h1>

        <span className={classes.card}>
          <h2 style={{ fontSize: "30px", marginBottom: "15%" }}>
            <img
              src="img\SVG\post-a-job-v3.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Post a job
          </h2>
          <p style={{ fontSize: "20px" }}>
            It's easy. Simply post a job you need
            <br /> completed and receive competitive
            <br /> bids from freelancers within minutes.
          </p>
        </span>
        <span className={classes.card}>
          <h2 style={{ fontSize: "30px", marginBottom: "15%" }}>
            <img
              src="img\SVG\work.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Choose freelancers
          </h2>
          <p style={{ fontSize: "20px" }}>
            Whatever your needs, there will be a<br /> freelancer to get it
            done: from web
            <br /> design, mobile app development
            <br />, virtual assistants, product
            <br /> manufacturing, and graphic design
            <br /> (and a whole lot more).
          </p>
        </span>
        <span className={classes.card}>
          <h2 style={{ fontSize: "30px", marginBottom: "15%" }}>
            <img
              src="img\SVG\pay-safely-v3.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Pay safely
          </h2>
          <p style={{ fontSize: "20px" }}>
            With secure payments and
            <br /> thousands of reviewed professionals
            <br /> to choose from, Freelancer.com is
            <br /> the simplest and safest way to get
            <br /> work done online.
          </p>
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "650px",
          paddingLeft: "8%",
          marginTop: "2%",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginLeft: "4.5em",
            color: "#0496FF",
            marginBottom: "-0em",
          }}
        >
          What's great about it?
        </h1>
        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\browse-portfolios-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Browse portfolios
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            Find professionals you can trust by
            <br /> browsing their samples of previous
            <br /> work and reading their profile reviews.
          </p>
        </span>

        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\view-bids-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            View bids
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            Receive free bids from our
            <br /> talented freelancers <br />
            within seconds.
          </p>
        </span>

        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\live-chat-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Live chat
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            You can live chat with
            <br /> your freelancers to get
            <br /> constant updates on the
            <br /> progress of your work.
          </p>
        </span>

        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\pay-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Pay for quality
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            Pay for work when it has been
            <br /> completed and you're 100% satisfied.
          </p>
        </span>
        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\track-progress-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            Track progress
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            Keep up-to-date
            <br /> and on-the-go with our
            <br /> time tracker, and mobile app.
          </p>
        </span>

        <span className={classes.cardTow}>
          <h2 style={{ fontSize: "30px", marginBottom: "1%" }}>
            <img
              src="img\SVG\support-v2.svg"
              width="50px"
              style={{ marginRight: "1%" }}
            />
            24/7 support
          </h2>
          <p style={{ fontSize: "20px", marginLeft: "0.3em" }}>
            We're always here to help.
            <br /> Our support consists of
            <br /> real people who are
            <br /> available 24/7.
          </p>
        </span>
      </div>
    </div>
  );
};
export default home_page;
