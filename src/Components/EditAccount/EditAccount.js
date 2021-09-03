import React from "react";
import classes from "./EditAccount.module.css";
import { connect } from "react-redux";
import { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
let info = {};
class editaccount extends Component {
  state = {
    description: null,
    number: null,
    cv: null,
    photo: null,
    Link: "#",
    skills: [],
    redirect: false,

    FilterBusiness: null,
    FilterProgramming: null,
    FilterEngineering: null,
    FilterDesign: null,
    FilterMarketing: null,
    FilterWriting: null,
    FilterSupport: null,
    FilterEducation: null,
  };
  ApplyHandeler = () => {
    axios.put(this.props.ip + "/api/users/me/" + this.props.token, {
      brief: this.state.description,
      number: this.state.number,

      skillTags: [
        this.state.FilterBusiness,
        this.state.FilterProgramming,
        this.state.FilterEngineering,
        this.state.FilterDesign,
        this.state.FilterMarketing,
        this.state.FilterWriting,
        this.state.FilterSupport,
        this.state.FilterEducation,
      ],
    });

    /* axios.post(this.props.ip + "/api/upload/img/" + this.props.token, {
              photo: this.state.photo,
            });*/

    /* axios
          .post(this.props.ip + "/api/upload/pdf/" + this.props.token, {
            cv: this.state.cv,
          })
          .then((response) => {
            console.log("done");
          });*/
    if (this.state.accountType === "member") {
      let formData = new FormData();
      let fileupload = document.getElementById("fileupload");
      formData.append("file", fileupload.files[0]);
      fetch(this.props.ip + "/api/upload/pdf/" + this.props.token, {
        method: "POST",
        body: formData,
      }).then((response) => {});
    }
    //-------------------
    let data = new FormData();
    let photo = document.getElementById("photo");
    data.append("file", photo.files[0]);
    fetch(this.props.ip + "/api/upload/img/" + this.props.token, {
      method: "POST",
      body: data,
    }).then((response) => {
      this.setState({ redirect: true });
    });
  };

  skillHandeler = (e) => {
    console.log("skills :" + this.state.skills);
  };
  render() {
    if (this.state.redirect === true)
      return (
        <Redirect push to="/Account">
          {" "}
        </Redirect>
      );
    let Edit = null;
    console.log(this.props.accountType);
    if (this.props.accountType === "company") {
      Edit = (
        <div className={classes.container}>
          <div className={classes.formContainer}>
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Brief about you:
              </label>{" "}
              <br />
              <textarea
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
                className={[classes.largeinput, classes.textinput].join(" ")}
                placeholder="describe yourself"
              ></textarea>{" "}
            </form>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                number:
              </label>{" "}
              <br />
              <input
                onChange={(e) => {
                  this.setState({ number: e.target.value });
                }}
                className={[classes.largeinput].join(" ")}
                type="number"
                placeholder="your number phone"
              ></input>{" "}
            </form>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Account Photo:
              </label>{" "}
              <br />
              <input
                onChange={(e) => {
                  this.setState({ photo: e.target });
                }}
                accept="image/*"
                id="photo"
                type="file"
                name="photo"
                placeholder=""
              ></input>{" "}
            </form>{" "}
            <button onClick={this.ApplyHandeler} className={classes.AddButton}>
              Apply Changes{" "}
            </button>{" "}
          </div>{" "}
        </div>
      );
    }

    // ---------------------------------

    if (this.props.accountType === "member") {
      Edit = (
        <div className={classes.container}>
          <div className={classes.formContainer}>
            <h1 className={classes.h1}> Edit Account </h1>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Brief about you:
              </label>{" "}
              <br />
              <textarea
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
                className={[classes.largeinput, classes.textinput].join(" ")}
                placeholder="describe yourself"
              ></textarea>{" "}
            </form>{" "}
            <p className={classes.label} style={{ marginBottom: "0.5em" }}>
              Skills:
            </p>{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
            </div>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                number:
              </label>{" "}
              <br />
              <input
                onChange={(e) => {
                  this.setState({ number: e.target.value });
                }}
                className={[classes.largeinput].join(" ")}
                type="number"
                placeholder="your number phone"
              ></input>{" "}
            </form>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Cv:
              </label>{" "}
              <br />
              <input
                onChange={(e) => {
                  this.setState({ cv: e.target.value });
                }}
                accept=".pdf"
                id="fileupload"
                type="file"
                name="fileupload"
                placeholder=""
              ></input>{" "}
            </form>{" "}
            <form className={classes.form}>
              <label
                className={classes.label}
                style={{ marginBottom: "0.5em" }}
              >
                Account Photo:
              </label>{" "}
              <br />
              <input
                onChange={(e) => {
                  this.setState({ photo: e.target.value });
                }}
                accept="image/*"
                id="photo"
                type="file"
                name="photo"
                placeholder=""
              ></input>{" "}
            </form>
            <button onClick={this.ApplyHandeler} className={classes.AddButton}>
              Apply Changes{" "}
            </button>{" "}
          </div>{" "}
        </div>
      );
    }

    return <div> {Edit} </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAccount: () =>
      dispatch({ type: "checkAccount", value: true, typevalue: "company" }),
    accountinfo: () => dispatch({ type: "accountinfo", value: info }),
  };
};
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    accountState: state.accountState,
    accountType: state.accountType,
    ip: state.ip,
    token: state.token,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(editaccount);
