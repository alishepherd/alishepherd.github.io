import React from 'react';
import TitleBlock from "./TitleBlock";
import Subtitle from "./Subtitle";

function Masthead() {
  return (
    <div className="Masthead">
      <TitleBlock titleBlock="HEYALI SOLUTIONS UNLTD"/>
      <hr/>
      <Subtitle subtitle="Sell the dream, deliver the nightmare" />
    </div>
  );
}

export default Masthead;