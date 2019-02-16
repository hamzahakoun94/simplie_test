import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";

class HistoryGroup extends React.Component {
  render() {
    return (
      //-- History Group
      <div id="undo_redo_group" className="form_group">
        <span className="tool_group_title groupTitel">History</span>
        <button id="btn-Undo" className="symbol-btn">
          v
        </button>
        <span id="btn-UndoText" className="tool_group_title">
          Undo
        </span>
        <button id="btn-Redo" className="symbol-btn">
          u
        </button>
        <span id="btn-RedoText" className="tool_group_title">
          Redo
        </span>
      </div>
    );
  }
}

export default HistoryGroup;
