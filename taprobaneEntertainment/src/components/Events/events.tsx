import React from "react";
import "./Events.scss";
import { eventsData } from "./eventsData";

const Events: React.FC = () => {
  return (
    <section className="events" id="Events">
      <div className="events-inner">
        <div className="events-header">
          <h2>Events & Experiences</h2>
          <p>
            Discover multicultural performances, festivals, and creative
            productions happening across&nbsp;Europe.
          </p>
        </div>

        <div className="events-grid">
          {eventsData.map((event) => (
            <div key={event.id} className="event-card">
              <span className="event-category">{event.category}</span>

              <h3>{event.title}</h3>

              <div className="event-meta">
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>

              <p className="event-description">{event.description}</p>

              <button className="event-btn">Learn More</button>
            </div>
          ))}
        </div>

        <div className="events-cta">
          <h3>Bring Taprobane Entertainment to Your City</h3>
          <button>Book Us</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
