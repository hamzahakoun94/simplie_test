import React from "react";
import "./BodyWorkPlace.sass";
import * as Func from "../../../Functions/S_B_Functions";
import ElementContainer from "../SideBar/LeftSideBar/ElementToolKit/ElementContainer";
import { connect } from "react-redux";

// HeaderTag Form, Elemet, Style

class WorkplaceTagGroup extends React.Component {
  render() {
    return (
      <div id="wPtagGroup">
        {/* Button Tag Form */}
        {Func.Gl_Btn("btn-B_TagForm", "builderTag", "Form", 0)}

        {/* Button Tag Paper */}
        {Func.Gl_Btn("btn-B_TagPaper", "builderTag", "Paper", 1)}

        {/* Button Tag Pop-up */}
        {Func.Gl_Btn("btn-B_TagPop-up", "builderTag", "Pop-up", 2)}

        {/* Button Tag Filter */}
        {Func.Gl_Btn("btn-B_TagFilter", "builderTag", "Filter", 3)}

        <div id="wp_mode">
          {Func.Gl_Btn("modeFullSize_Wp", "btn_Wp_Mode wp_active", "d", 4)}
          {Func.Gl_Btn("modeSplited_Wp", "btn_Wp_Mode", "dd", 5)}
        </div>
        <div id="formContainer" className="wpContainer">
          {this.props.form.map((key, value) => {
            if (key === "container") {
              return <ElementContainer />;
            }
          })}
          <ElementContainer />
        </div>
        <div id="paperContainer" className="wpContainer" />
        <div id="pop-UpContainer" className="wpContainer" />
        <div id="filterContainer" className="wpContainer" />
      </div>
    );
  }
}

export default connect(
  Func.mapStateToProps,
  undefined,
  Func.mergeProps
)(WorkplaceTagGroup);
