import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./bootstrap.css";
import Home_page from "./pages/Hom_page";
import Sign_up from "./pages/Sing_up";
import Sign_up_company from "./pages/SignUpCompany";
import Sign_in from "./pages/Sign_in";
import Members from "./pages/Members_page/Members_page";
import Post from "./pages/Post_Page/Post_Page";
import AddProject from "./pages/AddProject";
import Offers from "./pages/Offer_Page/Offer_Page";
import AddJobOffer from "./pages/AddJobOffer";
import HowItWork from "./pages/HowItWork";
import Thanks from "./pages/ThanksPage/Thanks";
import EditAccount from "./pages/EditAccount";
import Account from "./pages/Account";
import Member from "./pages/Member/Member";
import Jobs_page from "./pages/Jobs_Page/Jobs_Page";
import Freelance_page from "./pages/Freelances_Page/Freelaces_page";
import addProjectAccount from "./pages/addProjectAccount";
import CompanyMembers from "./pages/Company-Members/Company-Members";
class App extends React.Component {
  state = {
    visable: true,
    intr: true,
    hello: 2,
  };

  render() {
    console.log("first:");
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home_page} />
          <Route exact path="/Thanks" component={Thanks} />
          <Route exact path="/Home" component={Home_page} />
          <Route exact path="/SignUp" component={Sign_up} />
          <Route exact path="/SignUpCompany" component={Sign_up_company} />
          <Route exact path="/LogIn" component={Sign_in} />
          <Route exact path="/Members" component={Members} />
          <Route exact path="/CompanyMembers" component={CompanyMembers} />
          <Route exact path="/Jobs/Jobs" component={Jobs_page} />
          <Route exact path="/Jobs/Freelance" component={Freelance_page} />
          <Route exact path="/Post" component={() => <Post />} />
          <Route exact path="/Posts/:id" component={Post} />
          <Route exact path="/Offers/:id" component={Offers} />
          <Route exact path="/HowItWork" component={HowItWork} />
          <Route exact path="/Account/:id" component={Member} />
          <Route exact path="/EditAccount" component={EditAccount} />
          <Route
            exact
            path="/addProjectAccount"
            component={addProjectAccount}
          />
          <Route
            exact
            path={"/Jobs/Add-freelance-offer"}
            component={() => <AddProject />}
          />
          <Route
            exact
            path={"/Jobs/Add-Jobs"}
            component={() => <AddJobOffer />}
          />
          <Route
            exact
            path={"/Account"}
            component={() => <Account> </Account>}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
