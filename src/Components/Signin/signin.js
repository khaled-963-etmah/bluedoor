import { React, Component } from "react";
import signinstyle from "./signin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
let tokenG = null;
let info = {};
class signin extends Component {
  state = { email: null, password: null };

  regesterbutton = () => {
    axios
      .post(this.props.ip + "/api/auth", {
        password: this.state.password,
        email: this.state.email,
      })
      .then((response) => {
        this.props.checkAccount();
        tokenG = response.data.token;
        info = {
          name: response.data.info.name,
          type: response.data.info.type,
          id: response.data.info.id,
        };
        this.props.tokenStore();
        this.props.accountinfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className={signinstyle.back}>
        <div className={signinstyle.rectangle}>
          <div className={signinstyle.imgContainer}>
            <img
              src="/img/login.svg"
              className={signinstyle.signinphoto}
              alt="signin"
            ></img>
            <div className={signinstyle.createAccount}>
              <Link to="/SignUp" className={signinstyle.createAccount}>
                Creat an account
              </Link>
            </div>
          </div>
          <div className={signinstyle.info}>
            <h1 className={signinstyle.sign}>Sign in</h1>
            <form action="" className="form">
              <div className={signinstyle.dodo}>
                <img
                  src="/img/Icon material-email.svg"
                  alt="icon"
                  className={signinstyle.pirsonIcon}
                ></img>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={signinstyle.input}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signinstyle.dodo}>
                <img
                  src="/img/Icon awesome-lock.svg"
                  alt="icon"
                  className={signinstyle.pirsonIcon}
                ></img>
                <input
                  type="password"
                  placeholder="Password"
                  className={signinstyle.input}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                ></input>
              </div>

              <div className={signinstyle.containerCheckBox}>
                <input type="checkbox" className={signinstyle.checkbox}></input>
                <span className={signinstyle.agree}>Remember me</span>
              </div>
            </form>
            <button onClick={this.regesterbutton} className={signinstyle.Login}>
              Log in
            </button>
            <div className={signinstyle.orsigninContainer}>
              <span href="/" className={signinstyle.orsignin}>
                Or log in with
              </span>
              <a href=" " className={signinstyle.Google}>
                <img
                  src="/img/Google.svg"
                  alt="logo"
                  className={signinstyle.Google}
                ></img>
              </a>
              <a href=" " className={signinstyle.Facebook}>
                <img
                  src="/img/Facebook.svg"
                  alt="logo"
                  className={signinstyle.Facebook}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkAccount: () =>
      dispatch({ type: "checkAccount", value: true, typevalue: "member" }),
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
export default connect(mapStateToProps, mapDispatchToProps)(signin);
