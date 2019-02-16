import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";

class FormName extends React.Component {
  render() {
    return (
      //-- Form Name
      <div id="form_name_group" className="form_group">
        <span className="tool_group_title groupTitel">Form Name</span>
        <input id="nameInput" placeholder="Define Form Name" />
      </div>
    );
  }
}

export default FormName;
