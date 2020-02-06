import React from 'react';

function MockeryBlockColumn(props) {
  return (
    <div className="MockeryBlockColumn">
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