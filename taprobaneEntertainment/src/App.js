import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Events from "./components/Events/events";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
const App = () => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(Events, {}), _jsx(AboutUs, {}), _jsx(Contact, {})] }));
};
export default App;
