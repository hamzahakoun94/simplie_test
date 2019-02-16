import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";
import * as Func from "../../../../Functions/S_B_Functions";

class ElementBuilderGroup extends React.Component {
  render() {
    return (
      //--Element Builder Group
      <div id="element_builder_group" className="form_group">
        <span className="tool_group_title groupTitel">Element Builder</span>

        {Func.Gl_Btn("btn-Form_Nav", "symbol-btn_2", "!", 0)}

        <span id="btn-Form_Nav_Text" className="tool_group_title">
          Form
        </span>

        {Func.Gl_Btn("btn-Paper_Nav", "symbol-btn_2", "d", 1)}

        <span id="btn-Paper_Nav_Text" className="tool_group_title">
          Paper
        </span>

        {Func.Gl_Btn("btn-PopUp_Nav", "symbol-btn_2", "D", 2)}

        <span id="btn-PopUp_Nav_Text" className="tool_group_title">
          Pop-up
        </span>

        {Func.Gl_Btn("btn-Filter_Nav", "symbol-btn_2", "m", 3)}

        <span id="btn-Filter_Nav_Text" className="tool_group_title">
          Filter
        </span>
      </div>
    );
  }
}

export default ElementBuilderGroup;
