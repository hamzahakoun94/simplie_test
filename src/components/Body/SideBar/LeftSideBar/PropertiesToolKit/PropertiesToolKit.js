import React from "react";
import "../LeftSideBarStyle.sass";
import "./PropertiesToolKit.sass";

class PropertiesToolKit extends React.Component {
  render() {
    return (
      //--Constract Properties buttens at the Leftsidebar container
      <div id="propertiesGroup" className="sideBarGroup">
        <div className="sB_Titel">Property</div>
        <div className="sB_Btn_Group">{/* */}</div>
        <div className="sB_Btn_Group">{/* */}</div>
        {/* */}
      </div>
    );
  }
}

export default PropertiesToolKit;
