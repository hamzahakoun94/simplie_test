import React from "react";
import "../LeftSideBarStyle.sass";
import "./RowsToolKit.sass";
import * as Func from "../../../../../Functions/S_B_Functions";

import { connect } from "react-redux";

class RowsToolKit extends React.Component {
  render() {
    return (
      //--Constract Rows buttens at the Leftsidebar container
      <div id="rowsGroup" className="sideBarGroup">
        <div className="sB_Titel">Container</div>
        <div className="sB_Btn_Group">
          <div id="container_Form">
            {/* button Heding */}
            {Func.lS_Btn("heading", "(", "Heading", () => {
              this.props.addNewObject({}, "container");
            })}

            {/* button Ask / Answer */}
            {Func.lS_Btn("ask_Answer", "(", "Ask / Answer")}

            {/* button Information */}
            {Func.lS_Btn("info", "(", "Information")}
          </div>
        </div>
        <div className="sB_Btn_Group">
          <div id="container_Element">
            {Func.lS_Btn("header", "(", "Header")}
            {Func.lS_Btn("fotter", "(", "Fotter")}

            {/* button 1-Division */}
            {Func.lS_Btn("tabel", "(", "Tabel")}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  Func.mapStateToProps,
  undefined,
  Func.mergeProps
)(RowsToolKit);
