import React from "react";
import PostTitle from "../../Components/PostTilte/PostTitle";
import SearchBar from "../../Components/searchBar/searchBarMembers";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import Style from "./Members.module.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
let idmember = null;
class freelancers extends Component {
  state = {
    posts: [],
    FilterBusiness: null,
    FilterProgramming: null,
    FilterEngineering: null,
    FilterDesign: null,
    FilterMarketing: null,
    FilterWriting: null,
    FilterSupport: null,
    FilterEducation: null,
    error: null,

    selectedPostId: 1,
  };
  componentDidMount() {
    axios.get(this.props.ip + "/api/freelancers/").then((response) => {
      console.log("re" + response.data);
      this.setState({ posts: response.data });
    });
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
    if (this.props.FilterBusiness === true)
      this.setState({ FilterBusiness: "Business and Consulting Services" });

    if (this.props.FilterProgramming === true)
      this.setState({
        FilterProgramming: "Programming, web and application development",
      });

    if (this.props.FilterEngineering === true)
      this.setState({
        FilterEngineering: "Engineering, architecture and interior design",
      });

    if (this.props.FilterDesign === true)
      this.setState({
        FilterDesign: "Design, video and audio",
      });

    if (this.props.FilterMarketing === true)
      this.setState({
        FilterMarketing: "Email Marketing and Sales",
      });

    if (this.props.FilterWriting === true)
      this.setState({
        FilterWriting: "Writing, Editing, Translation & Languages",
      });

    if (this.props.FilterSupport === true)
      this.setState({
        FilterSupport: "Support, Help & Data Entry",
      });

    if (this.props.FilterEducation === true)
      this.setState({
        FilterEducation: "Distance education and training",
      });
    axios
      .get("url", {
        params: {
          name: this.props.searchText,
          skills: [
            this.state.FilterBusiness,
            this.state.FilterProgramming,
            this.state.FilterEngineering,
            this.state.FilterDesign,
            this.state.FilterMarketing,
            this.state.FilterWriting,
            this.state.FilterSupport,
            this.state.FilterEducation,
          ],
        },
      })
      .then((response) => {
        this.setState({ posts: response.data });
      });
  };
  render() {
    let posts;
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
              info={post.skillTags}
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
              {" "}
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
