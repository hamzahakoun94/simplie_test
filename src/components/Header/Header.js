import React from "react";
import TagGroup from "./TagGroup/TagGroup";
import "./Header.sass";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div id="headerContainer">
        {/* Logo String */}
        <div id="logo_div">
          <span id="logoFirstLetter" className="logo">
            S
            <span className="logo">
              impl
              <span className="logoIcon">
                k
                <span>
                  <span className="logo">builder</span>
                </span>
              </span>
            </span>
          </span>
          {/* Form, Element and Style Tagbutten */}
          {!this.props.showBtns && <TagGroup />}
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
