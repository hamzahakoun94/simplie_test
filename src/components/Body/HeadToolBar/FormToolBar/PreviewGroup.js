import React from "react";
import "./FormToolBar.sass";
import "../HeadToolBarStyle.sass";

class PreviewGroup extends React.Component {
  render() {
    return (
      //--EPreview Group
      <div id="preview_group" className="form_group">
        <span className="tool_group_title groupTitel">Preview</span>
        <button id="btn-Form_Preview" className="btn-Preview">
          Form
        </button>
        <button id="btn-Print_Preview" className="btn-Preview">
          Print
        </button>
        <div>
          <span id="desktopIcon" className="icon_1">
            e
          </span>
          <span id="mobileIcon" className="icon_1">
            "
          </span>
        </div>
        <div id="sliderTrack" />
        <input type="range" min={1} max={100} defaultValue={50} id="slider" />
      </div>
    );
  }
}

export default PreviewGroup;
