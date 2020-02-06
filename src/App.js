import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Masthead from "./components/Masthead"
import MockeryBlock from "./components/MockeryBlock"
import MockeryBlockColumn from "./components/MockeryBlockColumn"
import ContactPain from "./components/ContactPain"
import Footer from "./components/Footer"
import Subtitle from "./components/Subtitle"

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Masthead />
      </header>
      <div style={{ padding: '50px', fontWeight: 'bolder', fontSize:'30px'}} >
        <Subtitle subtitle="Do the bare minimum you have to do" />
      </div>
      <hr />
      <MockeryBlock>

        <MockeryBlockColumn heading="HTML" text="I do some stuff with HTML" headerImage="/img/HTMLimg.png" />
        <MockeryBlockColumn heading="CSS" text="I'm your gal for CSS stuff" headerImage="/img/CSSimg.png" />
        <MockeryBlockColumn heading="React" text="Why did the child component have such great self-esteem? Because its parent kept giving it props!" headerImage="/img/REACTimg.png" />
      </MockeryBlock>
      <hr />
      <div style={{ padding: '50px', fontWeight: 'bolder', fontSize: '30px'}} >
        <Subtitle subtitle="Here's what I bring to the table:" />
      </div>
      <MockeryBlock>
        <MockeryBlockColumn heading="Hiring💁" text="I can hire people to do this stuff" />
        <MockeryBlockColumn heading="Sarcasm😏" text="A real sense of humour brought to any project" />
        <MockeryBlockColumn heading="11x Dev🤓" text="Even better than a 10x Developer" />
        <MockeryBlockColumn heading="Spark Joy💥" text="Do what sparks joy in your life, leave the rest to HeyAli Solutions Unltd" />
      </MockeryBlock>
      <ContactPain />
      <Footer />
    </div>
  );
}

export default App;
