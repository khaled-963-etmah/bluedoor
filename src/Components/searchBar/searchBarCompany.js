import React from "react";
import Style from "./searchBar.module.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
var FilterGlobal = {};
let searchText = "";
const searchBar = (props) => {
  const search = (e) => {
    searchText = e.target.value;
    props.searchText();
  };
  FilterGlobal = props.Filter;
  return (
    <div>
      <div className={Style.contener}>
        <h3 className={Style.header}>Looking for a Companys</h3>
        <div className={Style.fil}>
          <div className={Style.check}>
            <p className={Style.text}>Name :</p>
            <input onChange={search} className={Style.input} type="inputbox" />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchText: () => dispatch({ type: "searchText", value: searchText }),
  };
};

const mapStateToProps = (state) => {
  return {
    FilterBusiness: state.FilterBusiness,
    FilterProgramming: state.FilterProgramming,
    FilterEngineering: state.FilterEngineering,
    FilterDesign: state.FilterDesign,
    FilterMarketing: state.FilterMarketing,
    FilterWriting: state.FilterWriting,
    FilterSupport: state.FilterSupport,
    FilterEducation: state.FilterEducation,
    FilterDocumentedIdentity: state.FilterDocumentedIdentity,
    FilterOnlineNow: state.FilterOnlineNow,
    FilterOffersAdded: state.FilterOffersAdded,
    FilterHired: state.FilterHired,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
