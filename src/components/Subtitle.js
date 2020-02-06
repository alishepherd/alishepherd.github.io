import React from 'react';
import "./Subtitle.css";

function Subtitle(props) {
  return (
    <div className="Subtitle">
      {props.subtitle}
    </div>
  );
}

export default Subtitle;