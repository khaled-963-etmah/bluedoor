import React from "react";
import classes from "./Account.module.css";
import { Col, Image, Nav, Tab } from "react-bootstrap";
import Stars from "../RatingStars/RatingStars";
import Axios from "axios";
import PostTitle from "../PostTilte/PostTitle";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCar from "../ProjectCar/ProjectCard"
import { Link } from "react-router-dom";
let photo = "/IMG_2548.jpg";
class account extends React.Component {
  state = {
    //الحساب
    projectApllyed: null,
    skills: [],
    cv: " ",

    //شركة

    typeOfEmployment: " ",
    CommercialRegistern: null,
    //------------------------------ مشترك
    country: "syria",
    number: "+add number in edit plz",
    accountPhoto: null,
    Reviews: 0,
    rating: 0,
    Brief: null,
    showKey: "Profile",
    email: " ",

    posts: ["test"],
    postsLiked: [],
    projects: [],
    error: false,

    editShow: 1,
    selectedPostId: 1,
  };

  render() {
    let showkey = null;
    let projects, cart, posts1;
    let editButton = null;
    if (this.state.accountPhoto) photo = this.state.accountPhoto;

    if (this.props.selectAcount === true) {
      editButton = (
        <Link to="/EditAccount">
          <Button variant="outline-primary" onClick={this.editClickHandeler}>
            edit
          </Button>
        </Link>
      );
    }
    if (this.props.accountType === "member") {
      projects = (
        <Nav.Link eventKey="projects" replace className={classes.link}>
          projects <div>{this.projectShowHandeler}</div>
        </Nav.Link>
      );
      posts1 = (
        <Nav.Link eventKey="posts" replace className={classes.link}>
          posts <div>{this.projectShowHandeler}</div>
        </Nav.Link>
      );
      cart = (
        <Nav.Link eventKey="cart" replace className={classes.link}>
          cart <div>{this.projectShowHandeler}</div>
        </Nav.Link>
      );
      if (this.state.showKey === "Profile") {
        showkey = (
          <div className={classes.gridContainer}>
            <div className={classes.itemTow}>
              <div>
                <h4>Brief about me: </h4>
                <hr />
                <p>{this.state.Brief}</p>
              </div>
              <div>
                <h4>My Skills</h4>
                <hr />
                <p style={{ wordWrap: "break-word", width: "100%" }}>
                  {this.state.skills}
                </p>
              </div>
            </div>

            <div className={classes.itemOne}>
              <h4>Statistics</h4>
              <hr />
              <p>
                Reviews <span> : {this.state.Reviews} </span>
              </p>
              <p>
                rating:
                <div style={{ marginTop: "-1.7em", marginLeft: "3em" }}>
                  <Stars value={this.state.rating} changeValue={null}></Stars>
                </div>
              </p>

              <p>
                applyed Projects
                <span> : {this.state.postsLiked.length} </span>
              </p>

              {editButton}
            </div>

            <div className={classes.itemThree}>
              <h4>Documentation </h4>
              <hr />
              <p>
                E-mail <span> : {this.state.email} </span>
              </p>
              <p>
                Mobile number
                <span> : {this.state.number} </span>
              </p>

              <p>
                <a href={this.props.ip + "/" + this.state.cv} target="_blank">
                  <Button variant="primary">yourCV</Button>
                </a>
              </p>
            </div>
          </div>
        );
      }
      if (this.state.showKey === "projects") {
        let proejcts1 = this.state.projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              text={project.description}
              url={project.url}
            ></ProjectCard>
          );
        });

        showkey = (
          <div className={classes.gridContainerTow}>
            {proejcts1}
            <div style={{ marginTop: "3em", marginLeft: "6em" }}>
              <Link to="addProjectAccount">
                <Button variant="outline-primary">Add project</Button>
              </Link>
            </div>
          </div>
        );
        /* showkey = (
          <div className={classes.gridContainerTow}>
            
            <div style={{ marginTop: "3em", marginLeft: "6em" }}>
              <Link to="addProjectAccount">
                <Button variant="outline-primary">Add project</Button>
              </Link>
            </div>
          </div>
        );*/
      }
      if (this.state.showKey === "posts") {
        //لازم جيب الداتا هون
        
       this.posts=    this.state.posts.map((post) => {
            return (
              <div>
              <ProjectCar
           title={post.title}
           text={post.description}
           url={"/Posts/" + post._id}
         ></ProjectCar>
           </div>
            );
          });
        

        showkey =   <div className={classes.gridContainerTow}>
        {this.posts}
        <div style={{ marginTop: "3em", marginLeft: "6em" }}>
          
        </div>
      </div>
      }
      if (this.state.showKey === "cart") {
        this.cart=    this.state.cart.map((post) => {
             return (
               <div>
               <ProjectCar
            title={post.title}
            text={post.description}
            url={"/Posts/" + post._id}
          ></ProjectCar>
            </div>
             );
           });
         showkey =   <div className={classes.gridContainerTow}>
         {this.cart}
         <div style={{ marginTop: "3em", marginLeft: "6em" }}>
         </div>
       </div>
       }

      //------------------------------
    }
    //------------------------------
    //------------------------------
    //------------------------------
    //------------------------------
    //------------------------------
    //------------------------------
    else if (this.props.accountType === "company") {
      posts1 = (
        <Nav.Link eventKey="posts" replace className={classes.link}>
          posts <div>{this.projectShowHandeler}</div>
        </Nav.Link>
      );
      if (this.state.showKey === "Profile") {
        showkey = (
          <div className={classes.gridContainer}>
            <div className={classes.itemTow}>
              <div>
                <h4>Brief : </h4>
                <hr />
                <p>{this.state.Brief}</p>
              </div>
              <div>
                <h4>---------</h4>
                <hr />
                <p>{}add any think</p>
              </div>
            </div>

            <div className={classes.itemOne}>
              <h4>Statistics</h4>
              <hr />
              <p>
                Reviews <span> : {this.state.Reviews} </span>
              </p>
              <p>
                rating:
                <div style={{ marginTop: "-1.7em", marginLeft: "3em" }}>
                  <Stars></Stars>
                </div>
              </p>
              <p>
                typeOfEmployment
                <span> : {this.state.typeOfEmployment} </span>
              </p>

              {editButton}
            </div>

            <div className={classes.itemThree}>
              <h4>Documentation </h4>
              <hr />
              <p>
                E-mail <span> : {this.state.email} </span>
              </p>
              <p>
                number
                <span> : {this.state.Number} </span>
              </p>
              <p>
                CommercialRegistern
                <span>: {this.state.CommercialRegistern} </span>
              </p>
            </div>
          </div>
        );
      }
    
      if (this.state.showKey === "posts") {
       this.posts=    this.state.posts.map((post) => {
            return (
              <div>
              <ProjectCar
           title={post.title}
           text={post.description}
           url={"/Posts/" + post._id}
         ></ProjectCar>
           </div>
            );
          });
        showkey =   <div className={classes.gridContainerTow}>
        {this.posts}
        <div style={{ marginTop: "3em", marginLeft: "6em" }}>
        </div>
      </div>
      }
    }
     
    //------------------------------
    //------------------------------
    //------------------------------
    return (
      <div className={classes.container}>
        <div className={classes.bannerContainer}>
          <Col xs={6} md={12} style={{}}>
            <Image
              style={{ width: "128px", height: "128px" }}
              src={this.props.ip + "/" + photo}
              roundedCircle
            />
          </Col>
          <h1 className={classes.name}>{this.props.accountName}</h1>
          <p className={classes.AccounType}>{this.props.accountType} account</p>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="Profile">
          <Nav
            onSelect={this.projectShowHandeler}
            variant="tabs"
            className={["mr-auto", classes.nav].join(" ")}
          >
            <Nav.Link eventKey="Profile" replace className={classes.link}>
              Profile
            </Nav.Link>

            {projects}
            {posts1}
            {cart}
          </Nav>
        </Tab.Container>
        {showkey}
      </div>
    );
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    //console.log('second:'+props.sectedId);
  };
  getId() {
    return this.state.selectedPostId;
  }
  projectShowHandeler = (eventKey) => {
    this.setState({ showKey: eventKey });
    console.log("showKey:" + this.state.showKey);
  };

  //------------------------------
  //طلبات الداتا
  //------------------------------
  componentDidMount() {
    console.log("hello boooy");
    console.log("tototo:" + this.props.token);
    console.log(this.props.ip + "/api/users/me/" + this.props.token);
    Axios.get(this.props.ip + "/api/users/me/" + this.props.token).then(
      (response) => {
        if (this.props.accountType === "company") {
          console.log("response:" + response.data.info.CommercialRegistern);

          this.setState({
            accountPhoto: response.data.info.profile_pic,
            rating: response.data.info.rate,
            typeOfEmployment: response.data.info.typeOfEmployment,
            CommercialRegistern: response.data.info.commercialRecord,
            Brief: response.data.info.brief,
            email: response.data.info.email,
            posts:response.data.posts,
            cart:response.data.cart,
            number: response.data.info.phone,
          });
        } else if (this.props.accountType === "member") {
          console.log("projects" + response.data.info.portfolio);
          this.setState({
            accountPhoto: response.data.info.photo,
            rating: response.data.info.rate,
            postsLiked: response.data.info.cart,
            Brief: response.data.info.brief,
            email: response.data.info.email,
            number: response.data.info.number,
            cv: response.data.info.cv,
            projects: response.data.info.portfolio,
            posts:response.data.posts,
            cart:response.data.cart,
            skills: response.data.info.skillTags,
          });
        }
      }
    );
  }
}

//redux
const mapStateToProps = (state) => {
  return {
    accountName: state.accountName,
    accountState: state.accountState,
    accountType: state.accountType,
    selectAcount: state.selectAcount,
    ip: state.ip,
    accountEmail: state.email,
    token: state.token,
  };
};
export default connect(mapStateToProps)(account);
