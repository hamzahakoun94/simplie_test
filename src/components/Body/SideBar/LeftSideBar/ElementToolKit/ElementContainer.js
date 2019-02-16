import React from "react";
import PropTypes from "prop-types";
import "../LeftSideBarStyle.sass";

class ElementContainer extends React.Component {
  static propTypes = {
    styleContainer: PropTypes.object,
    element: PropTypes.element
  };
  static defaultProps = {
    styleContainer: {
      background: "green",
      textAlign: "left",
      float: "left",
      height: "6rem",
      position: "relative",
      display: "inline-block",
      width: "100%",
      margin: "auto"
    },
    element: null
  };

  render() {
    return (
      <div className="sB_Titel" style={this.props.styleContainer}>
        {this.props.element}
      </div>
    );
  }
}

export default ElementContainer;
