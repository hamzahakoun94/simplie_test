import React from "react";
import "./TagGroup.sass";

// HeaderTag Form, Elemet, Style

const tagGroup = props => {
  return (
    <div id="tagGroup">
      {/* Button Tag Form */}
      <button id="btn-TagForm" className="tag active">
        Form
      </button>
      {/* Button Tag Element */}
      <button id="btn-TagElement" className="tag">
        Element
      </button>
      {/* Button Tag Style */}
      <button id="btn-TagStyle" className="tag">
        Style
      </button>
    </div>
  );
};

export default tagGroup;
