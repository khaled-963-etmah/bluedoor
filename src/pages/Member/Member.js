import React from 'react';
import Navpar from '../../Components/NavBar/navBar'
import Footer from '../../Components/Footer/Footer'
import { Component } from 'react';
import Axios from 'axios';
import Accountme from '../../Components/Accountme/Accountme'
import {connect} from 'react-redux'

class post extends Component{
  state = {
    loadedPost: null
}

componentDidMount () {
    console.log(this.props);
    this.loadData();
}

componentDidUpdate() {
    this.loadData();
    
}
loadData () {
  if ( this.props.match.params.id ) {
      if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
          Axios.get( this.props.ip+'/api/users/' + this.props.match.params.id )
              .then( response => {
                  // console.log(response);
                  this.setState( { loadedPost: response.data } );
              } );
      }
  }
}
render(){
      return(
    <div>
      < Navpar secondItem = "Add-freelance-offer"
      dropdowntitle = "Freelance"
      thirdItem = "Discover-freelance-offer" / >
     <Accountme meid={this.props.match.params.id}></Accountme>
      <Footer/>
    </div>);
  }
  


} 
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
    ip:state.ip
  };
};
export default connect(mapStateToProps)(post);
