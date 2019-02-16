import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";

class PropertiesGroup extends React.Component {
  render() {
    return (
      //-- Properties Group
      <div id="properties_group" className="form_group">
        <span className="tool_group_title groupTitel">Properties</span>
        <button id="buttonHide" className="symbol-btn-Borderd">
          C
        </button>
        <button id="btn-ReadOnly" className="symbol-btn-Borderd">
          B
        </button>
        <button id="btn-Title" className="symbol-btn-Borderd">
          b
        </button>
        <button id="btn-Requierd" className="symbol-btn-Borderd">
          j
        </button>
        <button id="btn-Unprintable" className="symbol-btn-Borderd">
          E
        </button>
        <button id="btn-Dupplicate" className="symbol-btn-Borderd">
          K
        </button>
      </div>
    );
  }
}

export default PropertiesGroup;
