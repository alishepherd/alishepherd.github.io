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
      <MockeryBlock>
      <Subtitle subtitle="Do the bare minimum you have to do" />
        <MockeryBlockColumn heading="HTML" text="I do some stuff with HTML" />
        <MockeryBlockColumn heading="CSS" text="I'm your gal for CSS stuff" />
        <MockeryBlockColumn heading="React" text="Why did the child component have such great self-esteem? Because its parent kept giving it props!" />
      </MockeryBlock>
      <MockeryBlock>
        <MockeryBlockColumn />
        <MockeryBlockColumn />
        <MockeryBlockColumn />
        <MockeryBlockColumn />
      </MockeryBlock>
      <ContactPain />
      <Footer />
    </div>
  );
}

export default App;
