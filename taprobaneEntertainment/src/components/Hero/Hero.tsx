import React, { useEffect, useState, useRef } from "react";
import "./Hero.scss";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const tabs = [
  {
    id: 0,
    title: "Cultural Fusion Experiences",
    description:
      "Where Finnish elegance meets Sri Lankan vibrance. We craft immersive events that celebrate the beauty of two worlds coming together.",
    background:
      "linear-gradient(135deg, #1b2b52 0%, #274b74 50%, #0d1a2b 100%)",
  },
  {
    id: 1,
    title: "Live Entertainment & Performances",
    description:
      "From music to theatre, we bring unforgettable performances to European audiences, spotlighting diverse talent and powerful storytelling.",
    background:
      "radial-gradient(circle at top left, #3b0d11 0%, #7b1e3c 50%, #12040a 100%)",
  },
  {
    id: 2,
    title: "Culinary & Cultural Showcases",
    description:
      "Taste, tradition, and togetherness. Our festivals blend Sri Lankan spice with European creativity to create unforgettable cultural journeys.",
    background:
      "linear-gradient(120deg, #ff9a3c 0%, #ff6a00 40%, #1a0f00 100%)",
  },
  {
    id: 3,
    title: "Film, Art & Creative Production",
    description:
      "We develop cinematic stories and artistic productions that highlight multicultural voices and push creative boundaries across Europe.",
    background:
      "linear-gradient(135deg, #4b134f 0%, #c94b4b 40%, #1a0b1f 100%)",
  },
];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(3);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Auto-cycle tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // GSAP background morphing
  useEffect(() => {
    if (!bgRef.current) return;
    gsap.to(bgRef.current, {
      background: tabs[activeTab].background,
      duration: 1.4,
      ease: "power3.inOut",
    });
  }, [activeTab]);

  return (
    <section className="hero" id="Home">
      {/* Animated background layer */}
      <div className="hero-bg" ref={bgRef} />

      {/* Content layer */}
      <div className="hero-inner">
        <div className="hero-copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeTab].id}
              className="hero-content"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
            >
              <h1>{tabs[activeTab].title}</h1>
              <p className="hero-description">{tabs[activeTab].description}</p>
              {/**<button className="hero-cta">Schedule a demo</button>**/}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs */}
        <div className="hero-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-label">{tab.title}</span>
              <span className="tab-glow" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
