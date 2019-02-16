import React from "react";
import "../LeftSideBarStyle.sass";
import "./LibraryToolKit.sass";

class LibraryToolKit extends React.Component {
  render() {
    return (
      //--Constract History buttens at the Leftsidebar container
      <div id="historyGroup" className="sideBarGroup">
        <div className="sB_Titel">Library</div>
        <div className="sB_Btn_Group">{/* */}</div>
        <div className="sB_Btn_Group">{/* */}</div>
        {/* */}
      </div>
    );
  }
}

export default LibraryToolKit;
