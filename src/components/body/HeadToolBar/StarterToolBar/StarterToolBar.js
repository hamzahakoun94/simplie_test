import React from "react";
import "./StarterToolBar.sass";
import "../HeadToolBarStyle.sass";
import * as Func from "../../../../Functions/S_B_Functions";

class StarterToolBar extends React.Component {
  async componentWillMount() {
    await this.props.onClickNew();
    Func.btnNew();
  }

  render() {
    return (
      //-- New Open Save Save-as Group
      <div id="new_open" className="form_group newPos">
        <button
          id="starter-btn-New"
          className="symbol-btn_2"
          onClick={async () => {
            await this.props.onClickNew();
            Func.btnNew();
          }}
        >
          d<span id="starter-btn-NewText">New</span>
        </button>

        <button id="starter-btn-Open" className="symbol-btn_2">
          h<span id="starter-btn-OpenText">Open</span>
        </button>
      </div>
    );
  }
}

export default StarterToolBar;
