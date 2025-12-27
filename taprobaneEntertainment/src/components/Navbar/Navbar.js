import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.gif";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsxs("nav", { className: "navbar", children: [_jsx("div", { className: "nav-left", children: _jsx("img", { src: logo, alt: "Taprobane Entertainment", className: "logo" }) }), _jsx("div", { className: "nav-center", children: _jsxs("ul", { className: "nav-links", children: [_jsx("li", { children: _jsx("a", { href: "#Home", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#Events", children: "Events" }) }), _jsx("li", { children: _jsx("a", { href: "#aboutus", children: "About Us" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", children: "Contact Us" }) })] }) }), _jsxs("div", { className: `burger ${menuOpen ? "open" : ""}`, onClick: () => setMenuOpen(!menuOpen), children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("div", { className: `mobile-menu ${menuOpen ? "show" : ""}`, children: [_jsx("a", { href: "#Home", onClick: () => setMenuOpen(false), children: "Home" }), _jsx("a", { href: "#Events", onClick: () => setMenuOpen(false), children: "Events" }), _jsx("a", { href: "#aboutus", onClick: () => setMenuOpen(false), children: "About Us" }), _jsx("a", { href: "#contact", onClick: () => setMenuOpen(false), children: "Contact Us" })] })] }));
};
export default Navbar;
