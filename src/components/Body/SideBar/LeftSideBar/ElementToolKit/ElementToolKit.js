import React from "react";
import "../LeftSideBarStyle.sass";
import "./ElementToolKit.sass";
import * as Func from "../../../../../Functions/S_B_Functions";

class ElemenToolKit extends React.Component {
  render() {
    return (
      //--Constract Element buttens at the Leftsidebar container
      <div id="elementGroup" className="sideBarGroup">
        <div className="sB_Titel">Element</div>
        <div className="sB_Btn_Group">
          {/* button Short Text */}
          {Func.lS_Btn("shortTextElement", "a", "Short Text")}

          {/* button Text Area */}
          {Func.lS_Btn("textAreaElement", "D", "Text Area")}
        </div>

        <div className="sB_Btn_Group">
          {Func.lS_Btn("textElement", "c", "Text")}

          {/* button Short Text */}
          {Func.lS_Btn("shortTextElement", "a", "Short Text")}

          {/* button Text Area */}
          {Func.lS_Btn("textAreaElement", "D", "Text Area")}

          {/* button Button */}
          {Func.lS_Btn("buttonElement", "#", "Button")}

          {/* button Image */}
          {Func.lS_Btn("imageElement", "H", "Image")}

          {/* button Checkbox */}
          {Func.lS_Btn("checkBoxElement", "g", "Checkbox")}

          {/* button Radio Choice */}
          {Func.lS_Btn("radioChoiceElement", "l", "Radio Choice")}

          {/* button Dropdown List */}
          {Func.lS_Btn("dropdownListElement", "q", "Dropdown List")}

          {/* button File Upload */}
          {Func.lS_Btn("fileUploadElement", "_", "File Upload")}

          {/* button Signature */}
          {Func.lS_Btn("signaturetElement", "G", "Signature")}

          {/* button Page Break */}
          {Func.lS_Btn("pageBreakElement", "r", "Page Break")}

          {/* button Input Range */}
          {Func.lS_Btn("inputRangeElement", "z", "Input Range")}

          {/* button Stamp Coad */}
          {Func.lS_Btn("stampCoadElement", "~", "Stamp Coad")}
        </div>
        {/* button Text */}
      </div>
    );
  }
}

export default ElemenToolKit;
