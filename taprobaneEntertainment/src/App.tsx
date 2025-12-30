import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Events from "./components/Events/events";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/**<Events />**/}
      <AboutUs />
      <Contact />
    </>
  );
};

export default App;
