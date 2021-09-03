import React from "react";
import PostTitle from "../../Components/PostTilte/PostTitle";
import SearchBar from "../../Components/searchBar/searchBarJobs";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Style from "./Jobs.module.css";
let tag = [];
class freelancers extends Component {
  state = {
    posts: [],
    error: false,
    selectedPostId: 1,
    FilterBusiness: null,
    FilterProgramming: null,
    FilterEngineering: null,
    FilterDesign: null,
    FilterMarketing: null,
    FilterWriting: null,
    FilterSupport: null,
    FilterEducation: null,
  };
  componentDidMount() {
    axios
      .post(this.props.ip + "/api/job_post/")
      .then((response) => this.setState({ posts: response.data }));
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    //console.log('second:'+props.sectedId);
  };
  getId() {
    return this.state.selectedPostId;
  }
  searchHandeler = () => {
    if (this.props.FilterBusiness == true) {
      this.setState({ FilterBusiness: "Business and Consulting Services" });
      tag.push(this.state.FilterBusiness);
    }

    if (this.props.FilterProgramming == true) {
      this.setState({
        FilterProgramming: "Programming, web and application development",
      });
      tag.push(this.state.FilterProgramming);
    }

    if (this.props.FilterEngineering == true) {
      this.setState({
        FilterEngineering: "Engineering, architecture and interior design",
      });
      tag.push(this.state.FilterEngineering);
    }

    if (this.props.FilterDesign == true) {
      this.setState({
        FilterDesign: "Design, video and audio",
      });
      tag.push(this.state.FilterDesign);
    }

    if (this.props.FilterMarketing == true) {
      this.setState({
        FilterMarketing: "Email Marketing and Sales",
      });
      tag.push(this.state.FilterMarketing);
    }
    if (this.props.FilterWriting == true) {
      this.setState({
        FilterWriting: "Writing, Editing, Translation & Languages",
      });
      tag.push(this.state.FilterWriting);
    }
    if (this.props.FilterSupport == true) {
      this.setState({
        FilterSupport: "Support, Help & Data Entry",
      });
      tag.push(this.state.FilterSupport);
    }
    if (this.props.FilterEducation == true) {
      this.setState({
        FilterEducation: "Distance education and training",
      });
      tag.push(this.state.FilterEducation);
    }
    console.log("title:" + this.props.searchText);
    axios
      .post(this.props.ip + "/api/job_post/", {
        keyword: this.props.searchText,
        tag: [
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
        console.log("post in response :" + response.data);
        this.setState({ posts: response.data });
      });
  };
  render() {
    let posts;

    if (!this.state.error) {
      this.posts = this.state.posts.map((post) => {
        return (
          <Link className={Style.link} to={"/Offers/" + post._id} key={post.id}>
            <PostTitle
              id={post._id}
              title={post.title}
              info={post.tags}
              discrep={post.description}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <Navpar secondItem="Add-Jobs" dropdowntitle="Jobs" thirdItem="Jobs" />
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
    checkAccount: () =>
      dispatch({ type: "checkAccount", value: true, typevalue: "company" }),
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
