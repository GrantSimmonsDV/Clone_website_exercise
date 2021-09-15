// import logo from './logo.svg';
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Heading/Header";
import Landing from "./Landing/Landing";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Team from "./Team/Team";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
