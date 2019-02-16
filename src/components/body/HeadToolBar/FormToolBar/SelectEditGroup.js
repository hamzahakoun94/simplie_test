import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";

class SelectEditGroup extends React.Component {
  render() {
    return (
      //-- Select Edit Group
      <div id="select_edit_group" className="form_group">
        <span className="tool_group_title groupTitel">Select / Edit</span>
        <button id="btn-Select" className="symbol-btn-Borderd active-btn">
          M
        </button>
        <button id="btn-Move" className="symbol-btn-Borderd">
          t
        </button>
        <button id="btn-Divide" className="symbol-btn-Borderd">
          A
        </button>
        <button id="btn-SaveElement" className="symbol-btn-Borderd">
          L
        </button>
        <button id="btn-Copy" className="symbol-btn-Borderd">
          O
        </button>
        <button id="btn-Delete" className="symbol-btn-Borderd">
          K
        </button>
      </div>
    );
  }
}

export default SelectEditGroup;
