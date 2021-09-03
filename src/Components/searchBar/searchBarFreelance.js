import React from "react";
import Style from "./searchBar.module.css";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
let searchText = "";
const searchBar = (props) => {
  const search = (e) => {
    searchText = e.target.value;
    props.searchText();
  };
  return (
    <div>
      <div className={Style.contener}>
        <h3 className={Style.header}>open projects </h3>
        <div className={Style.fil}>
          <div className={Style.check}>
            <p className={Style.text}>Keywords </p>
            <input onChange={search} className={Style.input} type="inputbox" />
          </div>
        </div>
        <div className={Style.fil}>
          <h4 className={Style.h4}>Category </h4>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxBusiness}
              checked={props.FilterBusiness}
            />
            Business and Consulting Services
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxProgramming}
              checked={props.FilterProgramming}
            />
            Programming, web and application development
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxEngineering}
              checked={props.FilterEngineering}
            />
            Engineering, architecture and interior design
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxDesign}
              checked={props.FilterDesign}
            />
            Design, video and audio
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxMarketing}
              checked={props.FilterMarketing}
            />
            Email Marketing and Sales
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxWriting}
              checked={props.FilterWriting}
            />
            Writing, Editing, Translation & Languages
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxSupport}
              checked={props.FilterSupport}
            />
            Support, Help & Data Entry
          </div>
          <div className={Style.check}>
            <input
              type="checkbox"
              onChange={props.checkBoxEducation}
              checked={props.FilterEducation}
            />
            Distance education and training
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkBoxBusiness: () => dispatch({ type: "checkBoxBusiness" }),
    checkBoxProgramming: () =>
      dispatch({
        type: "checkBoxProgramming",
      }),
    checkBoxEngineering: () =>
      dispatch({
        type: "checkBoxEngineering",
      }),
    checkBoxDesign: () => dispatch({ type: "checkBoxDesign" }),
    checkBoxMarketing: () => dispatch({ type: "checkBoxMarketing" }),
    checkBoxWriting: () => dispatch({ type: "checkBoxWriting" }),
    checkBoxSupport: () => dispatch({ type: "checkBoxSupport" }),
    checkBoxEducation: () => dispatch({ type: "checkBoxEducation" }),
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
    FiltertowMonth: state.FiltertowMonth,
    FilterOneMonth: state.FilterOneMonth,
    FiltertowWeeks: state.FiltertowWeeks,
    FilterOneWeeks: state.FilterOneWeeks,
    FilterSayLess: state.FilterSayLess,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
