import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Events.scss";
import { eventsData } from "./eventsData";
const Events = () => {
    return (_jsx("section", { className: "events", id: "Events", children: _jsxs("div", { className: "events-inner", children: [_jsxs("div", { className: "events-header", children: [_jsx("h2", { children: "Events & Experiences" }), _jsx("p", { children: "Discover multicultural performances, festivals, and creative productions happening across\u00A0Europe." })] }), _jsx("div", { className: "events-grid", children: eventsData.map((event) => (_jsxs("div", { className: "event-card", children: [_jsx("span", { className: "event-category", children: event.category }), _jsx("h3", { children: event.title }), _jsxs("div", { className: "event-meta", children: [_jsx("p", { children: event.date }), _jsx("p", { children: event.location })] }), _jsx("p", { className: "event-description", children: event.description }), _jsx("button", { className: "event-btn", children: "Learn More" })] }, event.id))) }), _jsxs("div", { className: "events-cta", children: [_jsx("h3", { children: "Bring Taprobane Entertainment to Your City" }), _jsx("button", { children: "Book Us" })] })] }) }));
};
export default Events;
