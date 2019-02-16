import React, { Component } from "react";

import "./BodyWorkPlace.sass";

class Containerwb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      className: "containerTag",
      titel: "Titel"
    };
  }

  changeText(event) {
    this.setState({
      titel: event.target.value
    });
  }

  render() {
    return (
      <div id="wb_Container_holder">
        <label
          htmlFor="titel"
          contentEditable="true"
          suppressContentEditableWarning
          id={this.state.id}
          className={this.state.className}
          onChange={this.changeText.bind(this)}
        >
          {this.state.titel}
        </label>
        <div className="wp_Element_Container">
          <div className="colDiv" />
          <div className="colDiv" />
        </div>
      </div>
    );
  }
}
export default Containerwb;
