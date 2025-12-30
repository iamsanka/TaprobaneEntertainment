import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";
import gsap from "gsap";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mykyzvpy"); // Your Formspree ID
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container contact-inner">
        <div className="contact-grid">
          {/* LEFT SIDE — TAPROBANE INFO */}
          <div className="contact-info">
            <h2>Contact Us</h2>

            <div className="info-box">
              <p>
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@taprobane.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@taprobane.fi
                </a>
              </p>
            </div>

            <div className="info-box">
              <p>
                <strong>Phone:</strong>
                <br />
                <a
                  href="https://wa.me/358413275060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +358 413 275 060
                </a>
              </p>
            </div>

            <div className="info-box">
              <p>
                <strong>Location:</strong>
                <br />
                Helsinki, Finland
              </p>
            </div>

            <div className="social-box">
              <h3>Social Media:</h3>
              <a
                href="https://www.facebook.com/TaprobaneEu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORMSPREE FORM */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            {state.succeeded ? (
              <p className="status-message success">
                Thank you! Your message has been sent successfully.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <p>
            Copyright © {new Date().getFullYear()} SanD. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
