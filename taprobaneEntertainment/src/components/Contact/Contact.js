import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";
import gsap from "gsap";
const Contact = () => {
    const [state, handleSubmit] = useForm("mykyzvpy"); // Your Formspree ID
    const sectionRef = useRef(null);
    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out",
            });
        }
    }, []);
    return (_jsx("section", { className: "contact", id: "contact", ref: sectionRef, children: _jsxs("div", { className: "container contact-inner", children: [_jsxs("div", { className: "contact-grid", children: [_jsxs("div", { className: "contact-info", children: [_jsx("h2", { children: "Contact Us" }), _jsx("div", { className: "info-box", children: _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), _jsx("br", {}), _jsx("a", { href: "mailto:info@taprobane.fi", target: "_blank", rel: "noopener noreferrer", children: "info@taprobane.fi" })] }) }), _jsx("div", { className: "info-box", children: _jsxs("p", { children: [_jsx("strong", { children: "Phone:" }), _jsx("br", {}), _jsx("a", { href: "https://wa.me/358442363616", target: "_blank", rel: "noopener noreferrer", children: "+358 442363616" }), _jsx("br", {}), _jsx("a", { href: "https://wa.me/358442363618", target: "_blank", rel: "noopener noreferrer", children: "+358 442363618" })] }) }), _jsx("div", { className: "info-box", children: _jsxs("p", { children: [_jsx("strong", { children: "Location:" }), _jsx("br", {}), "Helsinki, Finland"] }) }), _jsxs("div", { className: "social-box", children: [_jsx("h3", { children: "Follow us on Social Media:" }), _jsxs("div", { className: "social-links", children: [_jsxs("a", { href: "https://www.facebook.com/TaprobaneEu", target: "_blank", rel: "noopener noreferrer", children: [_jsx("i", { className: "fab fa-facebook-f" }), " Facebook"] }), _jsx("span", { className: "separator", children: " | " }), _jsxs("a", { href: "https://www.instagram.com/taprobane_fi", target: "_blank", rel: "noopener noreferrer", children: [_jsx("i", { className: "fab fa-instagram" }), " Instagram"] }), _jsx("span", { className: "separator", children: " | " }), _jsxs("a", { href: "https://whatsapp.com/channel/0029VbBM2yA1SWt8Adm69I1A", target: "_blank", rel: "noopener noreferrer", children: [_jsx("i", { className: "fab fa-whatsapp" }), " Whatsapp Channel"] })] })] })] }), _jsxs("div", { className: "contact-form", children: [_jsx("h2", { children: "Send Us a Message" }), state.succeeded ? (_jsx("p", { className: "status-message success", children: "Thank you! Your message has been sent successfully." })) : (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { id: "name", type: "text", name: "name", placeholder: "Your Name", required: true }), _jsx(ValidationError, { prefix: "Name", field: "name", errors: state.errors }), _jsx("input", { id: "email", type: "email", name: "email", placeholder: "Your Email", required: true }), _jsx(ValidationError, { prefix: "Email", field: "email", errors: state.errors }), _jsx("textarea", { id: "message", name: "message", placeholder: "Your Message", rows: 5, required: true }), _jsx(ValidationError, { prefix: "Message", field: "message", errors: state.errors }), _jsx("button", { type: "submit", disabled: state.submitting, children: state.submitting ? "Sending..." : "Send Message" })] }))] })] }), _jsx("div", { className: "contact-footer", children: _jsxs("p", { children: ["Copyright \u00A9 ", new Date().getFullYear(), " SanD. All Rights Reserved."] }) })] }) }));
};
export default Contact;
