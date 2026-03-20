import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Events from "./components/Events/events";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3FKCC569B4";
    document.head.appendChild(script);

    // Initialize GA
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3FKCC569B4');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Events /> */}
      <AboutUs />
      <Contact />
    </>
  );
};

export default App;
