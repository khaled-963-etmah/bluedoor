import React from "react";
import Navpar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import { Component } from "react";
import Axios from "axios";
import Style from "./Offer_Page.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
class post extends Component {
  state = {
    redirect: null,
    loadpost: {
      title: "ss",
      tag: ["sklsghlds", "esdfdrsg", "rsferwge"],
      discription: "aekglfwjelgiwlghwljgler",
      Expectedbudget: "2500 - 5000 $",
      accept: false,
      addToCard: false,
    },
    edit: false,

    postAccountId: null,
  };
  accepttext = "Applay";
  card = "Add to card";

  componentDidMount() {
    //نطلب رقم حساب صاحب البوست
    axios.get(this.props.ip + "url").then((response) => {
      this.setState({ postAccountId: response.data.accountId });
    });
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadpost ||
        (this.state.loadpost &&
          this.state.loadpost.id !== +this.props.match.params.id)
      ) {
        Axios.get("/loadposts/" + this.props.match.params.id).then(
          (response) => {
            // console.log(response);
            this.setState({ loadpost: response.data });
          }
        );
      }
    }
  }
  AcceptHandiler() {
    if (this.state.loadpost.accept === true) {
      this.setState({ loadpost: { ...this.state.loadpost, accept: false } });
      this.accepttext = "Applay";
    }
    if (this.state.loadpost.accept === false) {
      this.setState({ loadpost: { ...this.state.loadpost, accept: true } });
      this.accepttext = "Dis applay";
    }
  }
  CardHandiler() {
    if (this.state.loadpost.addToCard === true) {
      this.setState({ loadpost: { ...this.state.loadpost, addToCard: false } });
      this.card = "Add to card";
    }
    if (this.state.loadpost.addToCard === false) {
      this.setState({ loadpost: { ...this.state.loadpost, addToCard: true } });
      this.card = "Dellet from card";
      //ارسال للباك ايند
    }
  }
  DoneHandiler() {
    //شرط تحقق من الابلاي وارسال الحساب لمصفوفة ابلاي البوست
    if (this.state.postAccountId != this.props.accountId) {
      axios.post(this.props.ip + "url" + this.state.postAccountId, {
        applyedNewMember: this.props.accountId,
      });
    }
    //شرط تحقق من الكارت وارسال لمصفوفة الكارت الخاصة بالحساب
    axios.post(this.props.ip + "url" + this.props.token, {
      applyedNewMember: this.props.postId,
    });
  }
  render() {
    if (this.state.redirect === true) return <Redirect push to="/"></Redirect>;

    if (this.state.postAccountId === this.props.accountId) {
      if (this.state.edit === true) {
        return (
          <div>
            <Navpar
              secondItem="Jobs"
              dropdowntitle="Jobs"
              thirdItem="Freelance"
            />
            <div className={Style.gridContainer}>
              <div className={Style.item1}>
                <InputGroup style={{ width: "30%" }}>
                  <FormControl
                    value={this.state.loadpost.title}
                    onChange={(e) =>
                      this.setState({
                        loadpost: {
                          ...this.state.loadpost,
                          title: e.target.value,
                        },
                      })
                    }
                    as="textarea"
                    aria-label="With textarea"
                  />
                </InputGroup>
                <ListGroup horizontal>
                  {this.state.loadpost.tag.map((tag) => (
                    <ListGroup.Item
                      variant="light"
                      key={tag.id}
                      style={{
                        fontSize: "80%",
                        padding: "none",
                        margin: "none",
                        background: "none",
                        border: "none",
                      }}
                    >
                      {tag}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className={Style.item2}>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Offer details</h1>
                  <InputGroup style={{ width: "50%" }}>
                    <FormControl
                      value={this.state.loadpost.discription}
                      onChange={(e) =>
                        this.setState({
                          loadpost: {
                            ...this.state.loadpost,
                            discription: e.target.value,
                          },
                        })
                      }
                      as="textarea"
                      aria-label="With textarea"
                    />
                  </InputGroup>
                </div>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>required skills</h1>
                  <ListGroup horizontal>
                    {this.state.loadpost.tag.map((tag) => (
                      <Button
                        variant="info"
                        size="sm"
                        className={Style.tags}
                        key={tag.id}
                        style={{
                          fontSize: "80%",
                        }}
                      >
                        {tag}
                      </Button>
                    ))}
                  </ListGroup>
                </div>
              </div>
              <div className={Style.item3}>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Infomation</h1>
                  <ListGroup>
                    <ListGroup.Item className={Style.card}>
                      Salary :
                      {
                        <form
                          className={Style.form}
                          onChange={(e) =>
                            this.setState({
                              loadpost: {
                                ...this.state.loadpost,
                                Expectedbudget: e.target.value,
                              },
                            })
                          }
                        >
                          <select
                            className={[Style.inputfocus, Style.select].join(
                              " "
                            )}
                          >
                            <option value="25 - 50 $">25 - 50 Dollar</option>
                            <option value="50 - 100 $">50 - 100 Dollar</option>
                            <option value="100 - 250 $">
                              100 - 250 Dollar
                            </option>
                            <option value="250 - 500 $">
                              250 - 500 Dollar
                            </option>
                            <option value="500 - 1000 $">
                              500 - 1000 Dollar
                            </option>
                            <option value="1000 - 2500 $">
                              1000 - 2500 Dollar
                            </option>
                            <option value="2500 - 5000 $">
                              2500 - 5000 Dollar
                            </option>
                            <option value="5000 - 10000 $">
                              5000 - 10000 Dollar
                            </option>
                          </select>
                        </form>
                      }
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Company</h1>
                  <p>{this.state.loadpost.discription}</p>
                </div>
                <span className={Style.buttonlar}>
                  <Button
                    className={Style.buttom}
                    style={{
                      fontSize: "100%",
                      marginRight: "1%",
                      backgroundColor: "#0496FF",
                    }}
                    onClick={() => this.setState({ edit: false })}
                    variant="primary"
                  >
                    Save
                  </Button>
                </span>
              </div>
            </div>
            <Footer />
          </div>
        );
      } else {
        return (
          <div>
            <Navpar
              secondItem="Jobs"
              dropdowntitle="Jobs"
              thirdItem="Freelance"
            />
            <div className={Style.gridContainer}>
              <div className={Style.item1}>
                <h1 className={Style.h1}>{this.state.loadpost.title}</h1>
                <ListGroup horizontal>
                  {this.state.loadpost.tag.map((tag) => (
                    <ListGroup.Item
                      variant="light"
                      key={tag.id}
                      style={{
                        fontSize: "80%",
                        padding: "none",
                        margin: "none",
                        background: "none",
                        border: "none",
                      }}
                    >
                      {tag}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className={Style.item2}>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Offer details</h1>
                  <p>{this.state.loadpost.discription}</p>
                </div>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>required skills</h1>
                  <ListGroup horizontal>
                    {this.state.loadpost.tag.map((tag) => (
                      <Button
                        variant="info"
                        size="sm"
                        className={Style.tags}
                        key={tag.id}
                        style={{
                          fontSize: "80%",
                        }}
                      >
                        {tag}
                      </Button>
                    ))}
                  </ListGroup>
                </div>
              </div>
              <div className={Style.item3}>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Infomation</h1>
                  <ListGroup>
                    <ListGroup.Item className={Style.card}>
                      Salary :{this.state.loadpost.Expectedbudget}{" "}
                    </ListGroup.Item>
                    {/* <ListGroup.Item className={Style.card}>Execution time :{this.state.loadpost.ExpectedTime} </ListGroup.Item> */}
                    {/* <ListGroup.Item className={Style.card}>Number of offers :{this.state.loadpost.Numberofoffer} </ListGroup.Item> */}
                  </ListGroup>
                </div>
                <div className={Style.infodiv}>
                  <h1 className={Style.h11}>Company</h1>
                  <p>{this.state.loadpost.discription}</p>
                </div>
                <span className={Style.buttonlar}>
                  <Button
                    className={Style.buttom}
                    onClick={() => this.setState({ edit: true })}
                    style={{
                      fontSize: "85%",
                      marginRight: "1%",
                      backgroundColor: "#0496FF",
                    }}
                    variant="primary"
                  >
                    Edit
                  </Button>
                </span>
              </div>
            </div>
            <Footer />
          </div>
        );
      }
    } else {
      return (
        <div>
          <Navpar
            secondItem="Jobs"
            dropdowntitle="Jobs"
            thirdItem="Freelance"
          />
          <div className={Style.gridContainer}>
            <div className={Style.item1}>
              <h1 className={Style.h1}>{this.state.loadpost.title}</h1>
              <ListGroup horizontal>
                {this.state.loadpost.tag.map((tag) => (
                  <ListGroup.Item
                    variant="light"
                    key={tag.id}
                    style={{
                      fontSize: "80%",
                      padding: "none",
                      margin: "none",
                      background: "none",
                      border: "none",
                    }}
                  >
                    {tag}
                  </ListGroup.Item>
                ))}
                <span style={{ marginLeft: "5%", width: "100%" }}>
                  <Button
                    style={{ marginRight: "1%" }}
                    onClick={() => this.AcceptHandiler()}
                    variant="secondary"
                  >
                    {this.accepttext}
                  </Button>
                  <Button
                    onClick={() => this.CardHandiler()}
                    variant="secondary"
                  >
                    {this.card}
                  </Button>
                  <Button
                    style={{ marginLeft: "1%" }}
                    onClick={() => this.DoneHandiler()}
                    variant="primary"
                  >
                    done
                  </Button>
                </span>
              </ListGroup>
            </div>
            <div className={Style.item2}>
              <div className={Style.infodiv}>
                <h1 className={Style.h11}>Offer details</h1>
                <p>{this.state.loadpost.discription}</p>
              </div>
              <div className={Style.infodiv}>
                <h1 className={Style.h11}>required skills</h1>
                <ListGroup horizontal>
                  {this.state.loadpost.tag.map((tag) => (
                    <Button
                      variant="info"
                      size="sm"
                      className={Style.tags}
                      key={tag.id}
                      style={{
                        fontSize: "80%",
                      }}
                    >
                      {tag}
                    </Button>
                  ))}
                </ListGroup>
              </div>
            </div>
            <div className={Style.item3}>
              <div className={Style.infodiv}>
                <h1 className={Style.h11}>Infomation</h1>
                <ListGroup>
                  <ListGroup.Item className={Style.card}>
                    Salary :{this.state.loadpost.Expectedbudget}{" "}
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className={Style.infodiv}>
                <h1 className={Style.h11}>Company</h1>
                <p>{this.state.loadpost.discription}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  console.log("state:" + state);
  return {
    ip: state.ip,
    accountId: state.accountId,
  };
};
export default connect(mapStateToProps)(post);
