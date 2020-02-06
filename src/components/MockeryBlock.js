import React from 'react';
import "./MockeryBlock.css"

function MockeryBlock(props) {
  return (
    <div className="MockeryBlock">
      {props.children}
    </div>
  );
}

export default MockeryBlock;