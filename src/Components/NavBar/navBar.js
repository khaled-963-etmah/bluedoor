import { React } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import navstyle from "./navbar.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "react-dom";

const navBar = (props) => {
  let logAccount = null;
  if (!props.accountState)
    logAccount = (
      <Nav className="mr-auto">
        <Link
          onClick={props.FilterRestart}
          to="/LogIn"
          className={navstyle.hover}
        >
          Log in
        </Link>
        <Link
          onClick={props.FilterRestart}
          to="/SignUp"
          className={navstyle.hover}
        >
          Sign up
        </Link>
        <Link
          onClick={props.FilterRestart}
          to="/SignUpCompany"
          className={navstyle.hover3}
        >
          Company
        </Link>
      </Nav>
    );
  else
    logAccount = (
      <Nav className="mr-auto" onClick={props.selectMyAccount}>
        <Link
          onClick={props.FilterRestart}
          to="/Account"
          className={navstyle.hover}
        >
          {props.accountName}
        </Link>
      </Nav>
    );
  console.log("accountState:" + props.accountState);
  return (
    <Navbar
      id="navbar"
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{
        paddingLeft: "2.5em",
        paddingRight: "2.5em",
        transition: "0.4s",
      }}
    >
      <Navbar.Brand>
        <Link onClick={props.FilterRestart} to="/">
          <img
            src="/img/logoWhite.svg"
            className={navstyle.logo}
            alt="bluedoor"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{ marginLeft: "2%" }}>
        <Nav>
          <Link
            onClick={props.FilterRestart}
            to="/howItWork"
            className={navstyle.hover}
          >
            How It Work
          </Link>
          <NavDropdown
            href="/Jobs"
            title={props.dropdowntitle}
            className={navstyle.dropdow}
          >
            <NavDropdown.Item className={navstyle.hover2}>
              <Link
                onClick={props.FilterRestart}
                className={navstyle.hover2}
                to={"/Jobs/" + props.secondItem}
              >
                {props.secondItem}
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className={navstyle.hover2}>
              <Link
                onClick={props.FilterRestart}
                className={navstyle.hover2}
                to={"/Jobs/" + props.thirdItem}
              >
                {props.thirdItem}
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link
            onClick={props.FilterRestart}
            to="/Members"
            className={navstyle.hover}
          >
            Members
          </Link>
          <Link
            onClick={props.FilterRestart}
            to="/CompanyMembers"
            className={navstyle.hover}
          >
            CompanyMembers
          </Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {logAccount}
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    FilterRestart: () => dispatch({ type: "FilterRestart" }),
    selectMyAccount: () => dispatch({ type: "selectMyAccount" }),
  };
};
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    accountState: state.accountState,
    accountName: state.accountName,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(navBar);
