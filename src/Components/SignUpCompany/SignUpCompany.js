import { React, Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import signupstyle from "../Signup/signup.module.css";
import { Link } from "react-router-dom";
let tokenG = null;
let info = {};
class signup extends Component {
  state = {
    name: null,
    email: null,
    id: null,
    password: null,
    toe: null,
    cr: null,
  };

  regesterbutton = () => {
    console.log("ip is :" + this.props.ip + "/api/users");
    console.log("stateSignup:" + this.state);

    axios
      .post(this.props.ip + "/api/users", {
        name: this.state.name,
        type: "company",
        password: this.state.password,
        email: this.state.email,
        cr: this.state.cr,
        toe: this.state.toe,
      })
      .then((response) => {
        this.props.checkAccount();
        console.log("\ntoken:" + response.data.token);
        tokenG = response.data.token;
        info = {
          name: response.data.info.name,
          type: response.data.info.type,
          id: response.data.info.id,
          email: this.state.email,
          cr: this.state.cr,
          toe: this.state.toe,
        };
        console.log("info name:" + response.data.info.name);
        this.props.tokenStore();
        this.props.accountinfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className={signupstyle.back}>
        <div className={signupstyle.rectangle}>
          <div className={signupstyle.info}>
            <h1 className={signupstyle.sign}>Sign up</h1>
            <form action="" className="form">
              <div className={signupstyle.dodo}>
                <img
                  src="/img/Icon awesome-user-alt.svg"
                  alt="icon"
                  className={signupstyle.pirsonIcon}
                ></img>
                <input
                  type="text"
                  placeholder="Your name"
                  className={signupstyle.input}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signupstyle.dodo}>
                <img
                  src="/img/Icon material-email.svg"
                  alt="icon"
                  className={signupstyle.pirsonIcon}
                ></img>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={signupstyle.input}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signupstyle.dodo}>
                <img
                  src="/img/Icon awesome-lock.svg"
                  alt="icon"
                  className={signupstyle.pirsonIcon}
                ></img>
                <input
                  type="password"
                  placeholder="Password"
                  className={signupstyle.input}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signupstyle.dodo}>
                <img
                  src="/img/Icon awesome-lock2.svg"
                  alt="icon"
                  className={signupstyle.pirsonIcon}
                ></img>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  className={signupstyle.input}
                ></input>
              </div>

              <div className={signupstyle.containerCheckBox}>
                <input type="checkbox" className={signupstyle.checkbox}></input>
                <span className={signupstyle.agree}>
                  i agree all statements in Terms of service
                </span>
              </div>
            </form>

            <button
              className={signupstyle.Register}
              onClick={this.regesterbutton}
            >
              Register
            </button>
          </div>

          <div style={{ marginLeft: "4em", marginTop: "8.5em" }}>
            <form action="" className="form">
              <div className={signupstyle.dodo}>
                <input
                  type="text"
                  placeholder="type of employment"
                  className={signupstyle.input}
                  onChange={(e) => {
                    this.setState({ toe: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signupstyle.dodo}>
                <input
                  type="number"
                  placeholder="Commercial Registern"
                  className={signupstyle.input}
                  onChange={(e) => {
                    this.setState({ cr: e.target.value });
                  }}
                ></input>
              </div>
            </form>
            <br />
            <div>
              <Link to="/SignUp" className={signupstyle.alredymember}>
                Normal Account
              </Link>
            </div>
          </div>
          <div className={signupstyle.imgContainer}></div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkAccount: () =>
      dispatch({ type: "checkAccount", value: true, typevalue: "company" }),
    tokenStore: () => dispatch({ type: "tokenStore", value: tokenG }),
    accountinfo: () => dispatch({ type: "accountinfo", value: info }),
  };
};
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    accountState: state.accountState,
    ip: state.ip,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(signup);
