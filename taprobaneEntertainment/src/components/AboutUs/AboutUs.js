import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./aboutus.scss";
import { aboutData } from "./aboutData";
const AboutUs = () => {
    return (_jsx("section", { className: "about", id: "aboutus", children: _jsxs("div", { className: "container about-inner", children: [_jsxs("div", { className: "about-block", children: [_jsxs("div", { className: "about-text", children: [_jsx("h2", { children: aboutData.intro.title }), _jsx("p", { children: aboutData.intro.description })] }), _jsx("div", { className: "about-image image-1" })] }), _jsxs("div", { className: "about-block", children: [_jsx("div", { className: "about-image image-2" }), _jsxs("div", { className: "about-text", children: [_jsx("h2", { children: aboutData.mission.title }), _jsx("p", { children: aboutData.mission.description })] })] }), _jsxs("div", { className: "about-block", children: [_jsxs("div", { className: "about-text", children: [_jsx("h2", { children: aboutData.vision.title }), _jsx("p", { children: aboutData.vision.description })] }), _jsx("div", { className: "about-image image-3" })] })] }) }));
};
export default AboutUs;
