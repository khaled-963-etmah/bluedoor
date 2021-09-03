import axios from "axios";
import { Redirect } from "react-router-dom";
import { React, Component } from "react";
import classes from "./AddProjectAccount.module.css";
import { connect } from "react-redux";
class addproject extends Component {
  state = {
    title: null,
    description: null,
    url: null,

    redircet: false,
  };
  addprojectHandeler = () => {
    if (this.props.token != null)
      axios
        .post(this.props.ip + "/api/users/me/portfolio/" + this.props.token, {
          title: this.state.title,
          description: this.state.description,
          url: this.state.url,
        })
        .then((response) => {
          console.log(response.data);
          this.setState({ redircet: true });
        })
        .catch((error) => {
          console.log(error);
        });
  };
  render() {
    if (this.state.redircet) return <Redirect push to="/Account"></Redirect>;
    return (
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <h1 className={classes.h1}>ADD Account Project</h1>
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

          <form className={classes.form}>
            <label className={classes.label} style={{ marginBottom: "0.5em" }}>
              url Link:
            </label>
            <br />
            <input
              className={[classes.largeinput].join(" ")}
              type="text"
              placeholder="Link of your project"
              onChange={(e) => {
                this.setState({ url: e.target.value });
              }}
            ></input>
          </form>

          <button
            onClick={this.addprojectHandeler}
            className={classes.AddButton}
          >
            ADD project
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    accountState: state.accountState,
    ip: state.ip,
    token: state.token,
  };
};
export default connect(mapStateToProps)(addproject);
