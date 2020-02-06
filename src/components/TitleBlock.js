import React from 'react';
import './TitleBlock.css'; 

function TitleBlock(props) {
  return (
    <div className="TitleBlock">
      {props.titleBlock}
    </div>
  );
}

export default TitleBlock;