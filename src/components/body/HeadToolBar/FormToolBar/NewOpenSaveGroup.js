import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";
import { btnNew } from "../../../../Functions/S_B_Functions";

class NewOpenSaveGroup extends React.Component {
  render() {
    return (
      //-- New Open Save Save-as Group
      <div id="new_open_save_group" className="form_group">
        <button id="btn-New" className="symbol-btn" onClick={btnNew}>
          d
        </button>
        <span id="btn-NewText" className="tool_group_title">
          New
        </span>
        <button id="btn-Open" className="symbol-btn">
          h
        </button>
        <button id="btn-Save" className="symbol-btn">
          L
        </button>
        <button id="btn-Save_as" className="symbol-btn">
          i
        </button>
      </div>
    );
  }
}

export default NewOpenSaveGroup;
