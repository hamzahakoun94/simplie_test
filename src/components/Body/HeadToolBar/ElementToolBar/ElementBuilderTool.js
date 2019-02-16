import React from "react";
import "../HeadToolBarStyle.sass";
import "./ElementToolBar.sass";
import * as Func from "../../../../Functions/S_B_Functions";

class ElementBuilderTool extends React.Component {
  render() {
    return (
      //-- Elemet Builder toolgroup

      <div id="elementToolGroup" className="form_group">
        {Func.hTB_Btn("btn-Rows", "symbol-btn_3 ", "Container", "Z", 0)}

        {Func.hTB_Btn("btn-Element", "symbol-btn_3", "Element", "!", 1)}

        {Func.hTB_Btn("btn-Library", "symbol-btn_3", "Library", "/", 2)}

        {Func.hTB_Btn("btn-Property", "symbol-btn_3", "Property", "~", 3)}

        {Func.hTB_Btn("btn-Condition", "symbol-btn_3", "Condition", "~", 4)}
      </div>
    );
  }
}

export default ElementBuilderTool;
