import React from "react";
import PostTitle from "../../Components/PostTilte/PostTitle";
import SearchBar from "../../Components/searchBar/searchBarCompany";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Style from "./Company-Members.module.css";
import { connect } from "react-redux";
let idmember = null;
class freelancers extends Component {
  state = { posts: [], error: false, selectedPostId: 1 };
  componentDidMount() {
    axios
      .post(this.props.ip + "/api/companies/")
      .then((response) => this.setState({ posts: response.data }));
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    idmember = id;
    //console.log('second:'+props.sectedId)
  };
  getId() {
    return this.state.selectedPostId;
  }
  searchHandeler = () => {
    axios
      .post(this.props.ip + "/api/companies/", {
        name: this.props.searchText,
      })
      .then((response) => {
        console.log("responese in filter :" + response.data);
        this.setState({ posts: response.data });
      });
  };
  posts;
  render() {
    if (!this.state.error) {
      this.posts = this.state.posts.map((post) => {
        return (
          <Link
            className={Style.link}
            to={"/Account/" + post._id}
            key={post.id}
          >
            <PostTitle
              id={post._id}
              title={post.name}
              info={post.typeOfEmployment}
              discrep={post.brief}
              clicked={
                (() => this.postSelectedHandler(post.id),
                this.props.selectAnotherAccount)
              }
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <Navpar secondItem="Jobs" dropdowntitle="Jobs" thirdItem="Freelance" />
        <div className={Style.gridContainer}>
          <div className={Style.item1}></div>

          <div className={Style.item2}>
            <SearchBar />
            <Button
              onClick={this.searchHandeler}
              style={{ marginLeft: "3em", width: "16em" }}
            >
              search
            </Button>
          </div>

          <div className={Style.item3}>{this.posts}</div>

          <div className={Style.item4}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectAnotherAccount: () => dispatch({ type: "selectAnotherAccount" }),
  };
};
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    FilterBusiness: state.FilterBusiness,
    FilterProgramming: state.FilterProgramming,
    FilterEngineering: state.FilterEngineering,
    FilterDesign: state.FilterDesign,
    FilterMarketing: state.FilterMarketing,
    FilterWriting: state.FilterWriting,
    FilterSupport: state.FilterSupport,
    FilterEducation: state.FilterEducation,
    ip: state.ip,
    searchText: state.searchText,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(freelancers);
