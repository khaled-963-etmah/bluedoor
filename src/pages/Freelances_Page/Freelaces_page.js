import React from "react";
import PostTitle from "../../Components/PostTilte/PostTitle";
import SearchBar from "../../Components/searchBar/searchBarFreelance";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Style from "./Freelances.module.css";
class freelancers extends Component {
  state = { posts: [], error: false, selectedPostId: 1 };
  componentDidMount() {
    axios.get(this.props.ip + "/api/project_post/").then((response) => {
      console.log("response posts:" + response.data);
      this.setState({ posts: response.data });
    });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    //console.log('second:'+props.sectedId);
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
  posos;
  render() {
    if (this.state.posts != null) {
      this.posos = this.state.posts.map((post) => {
        return (
          <Link className={Style.link} to={"/Posts/" + post._id} key={post.id}>
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
        <Navpar
          secondItem="Add-freelance-offer"
          dropdowntitle="freelance"
          thirdItem="Freelance"
        />
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

          <div className={Style.item3}>{this.posos}</div>

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
    accountState: state.accountState,
    token: state.token,
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
