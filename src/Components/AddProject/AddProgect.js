import React from "react";
import classes from "./AddProject.module.css";
import { Form } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
class addproject extends Component {
  state = {
    description: null,
    budget: null,
    expectedTime: null,
    title: null,
    Link: "#",
    skills: [],
    redircet: false,
    FilterBusiness: null,
    FilterProgramming: null,
    FilterEngineering: null,
    FilterDesign: null,
    FilterMarketing: null,
    FilterWriting: null,
    FilterSupport: null,
    FilterEducation: null,
  };
  AddProjectHandeler = () => {
    if (this.props.token != null)
      axios
        .post(this.props.ip + "/api/project_post/" + this.props.token, {
          description: this.state.description,
          budget: this.state.budget,
          expectedTime: this.state.expectedTime,
title:this.state.title,
          tags: [
            this.state.FilterBusiness,
            this.state.FilterProgramming,
            this.state.FilterEngineering,
            this.state.FilterDesign,
            this.state.FilterMarketing,
            this.state.FilterWriting,
            this.state.FilterSupport,
            this.state.FilterEducation,
          ],
        })
        .then((response) => {
          console.log("response ok ");
          this.setState({ redircet: true });
        })
        .catch((error) => {
          console.log(error);
        });
  };
  render() {
    if (this.state.redircet)
      return <Redirect push to="/jobs/Freelance"></Redirect>;
    return (
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <h1 className={classes.h1}>ADD PROJECT</h1>
          <form className={classes.form}>
            <label className={classes.label} style={{ marginBottom: "0.5em" }}>
              Title:
            </label>
            <br />
            <input
              className={[classes.largeinput].join(" ")}
              type="text"
              placeholder="title of your project"
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            ></input>
          </form>
          <form className={classes.form}>
            <label className={classes.label} style={{ marginBottom: "0.5em" }}>
              required skills:
            </label>
            <br />
            <div>
              <Form.Check
                type="checkbox"
                label="Business and Consulting Services"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterBusiness: "Business and Consulting Services",
                    });
                  else
                    this.setState({
                      FilterBusiness: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterBusiness);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Programming, web and application development"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterProgramming:
                        "Programming, web and application development",
                    });
                  else
                    this.setState({
                      FilterProgramming: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterProgramming);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Engineering, architecture and interior design"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterEngineering:
                        "Engineering, architecture and interior design",
                    });
                  else
                    this.setState({
                      FilterEngineering: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterEngineering);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Design, video and audio"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterDesign: "Design, video and audio",
                    });
                  else
                    this.setState({
                      FilterDesign: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterDesign);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Email Marketing and Sales"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterMarketing: "Email Marketing and Sales",
                    });
                  else
                    this.setState({
                      FilterMarketing: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterMarketing);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Writing, Editing, Translation & Languages"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterWriting:
                        "Writing, Editing, Translation & Languages",
                    });
                  else
                    this.setState({
                      FilterWriting: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterWriting);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Support, Help & Data Entry"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterSupport: "Support, Help & Data Entry",
                    });
                  else
                    this.setState({
                      FilterSupport: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterSupport);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Distance education and training"
                onClick={(e) => {
                  if (e.target.checked === true)
                    this.setState({
                      FilterEducation: "Distance education and training",
                    });
                  else
                    this.setState({
                      FilterEducation: null,
                    });
                  console.log("FilterBusiness:" + this.state.FilterBusiness);
                }}
              />
            </div>
          </form>
          <form className={classes.form}>
            <label className={classes.label} style={{ marginBottom: "0.5em" }}>
              Details of Project:
            </label>
            <br />
            <textarea
              className={[classes.largeinput, classes.textinput].join(" ")}
              placeholder="description of your project"
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            ></textarea>
          </form>
          <div className={classes.valuecontainer}>
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Expected budget:
              </label>
              <br />
              <select
                className={[classes.inputfocus, classes.select].join(" ")}
                id="country"
                name="country"
                onChange={(e) => {
                  this.setState({ budget: e.target.value });
                }}
              >
                <option value="25 - 50 $">25 - 50 Dollar</option>
                <option value="50 - 100 $">50 - 100 Dollar</option>
                <option value="100 - 250 $">100 - 250 Dollar</option>
                <option value="250 - 500 $">250 - 500 Dollar</option>
                <option value="500 - 1000 $">500 - 1000 Dollar</option>
                <option value="1000 - 2500 $">1000 - 2500 Dollar</option>
                <option value="2500 - 5000 $">2500 - 5000 Dollar</option>
                <option value="5000 - 10000 $">5000 - 10000 Dollar</option>
              </select>
            </form>
            <form className={classes.form} style={{ marginLeft: "19.5em" }}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Expected Time to do per days:
              </label>
              <br />
              <input
                className={[classes.numberinput, classes.inputfocus].join(" ")}
                min="1"
                type="number"
                onChange={(e) => {
                  this.setState({ expectedTime: e.target.value });
                }}
              ></input>
            </form>
          </div>
          <button
            onClick={this.AddProjectHandeler}
            className={classes.AddButton}
          >
            ADD Project
          </button>
        </div>
        <div className={classes.textContainer}>
          <button className={classes.HowAddProjectButton}>
            How to Add Project
          </button>
          <p
            className={classes.p}
            style={{ color: "#0496FF", fontWeight: "bold", marginTop: "2em" }}
          >
            Start building your project
          </p>
          <p className={classes.p}>
            Through Bluedoor, you can build your project the way you want, enter
            the project details and the expected budget, so that your project
            will be reviewed and published for free on a freelancer.After that,
            the best registered freelancers will submit different offers for you
            to choose the right one for you and start implementing your project.
          </p>

          <p
            className={classes.p}
            style={{ color: "#0496FF", fontWeight: "bold" }}
          >
            Bludor website guarantees your rights
          </p>
          <p className={classes.p}>
            When you deal with a freelancer through the Bludor website, the site
            remains an intermediary between you and the freelancer who
            implements your project, and only when the project is fully
            implemented is the amount transferred to the account of the
            freelancer who implemented your project.
          </p>
          <p
            className={classes.p}
            style={{ color: "#0496FF", fontWeight: "bold" }}
          >
            {" "}
            Tips for a successful business
          </p>
          <p className={classes.p}>1- Enter the project details accurately</p>
          <p className={classes.p}>
            2- Fill in all the fields and provide examples of what you want{" "}
          </p>
          <p className={classes.p} j>
            3- Divide the project into several small phases
          </p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkAccount: () =>
      dispatch({ type: "checkAccount", value: true, typevalue: "company" }),
  };
};
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    accountState: state.accountState,
    ip: state.ip,
    token: state.token,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(addproject);
