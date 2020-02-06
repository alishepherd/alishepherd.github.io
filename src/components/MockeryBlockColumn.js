import React from 'react';
import "./MockeryBlockColumn.css"

function MockeryBlockColumn(props) {
  return (
    <div className="MockeryBlockColumn">
      {props.headerImage && <img className="MockeryBlockImage" src={props.headerImage} />}
      <div className="MockeryBlockHeading">
      {props.heading}
      </div>
      <div className="MockeryBlockText">
        {props.text}
        </div>
    </div>
  );
}

export default MockeryBlockColumn;