import React from "react";
import Style from "./PostTitle.module.css";

const PostTitle = (props) => (
  <div className={Style.gridContainer} onClick={props.clicked}>
    <div className={Style.item1}>
      <h4 className={Style.h4}>{props.title}</h4>
    </div>
    <div className={Style.item2}>
      
    </div>
    <div className={Style.item3}>{props.info}</div>

    <div className={Style.item4}>
      <p>{props.discrep}</p>
    </div>
  </div>
);
export default PostTitle;
