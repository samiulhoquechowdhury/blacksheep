// ============================================================
//  App.jsx  —  Blacksheep Creatives · Siliguri Underdog's Cup
//  React + Vite ready.  See README.md for setup steps.
// ============================================================

import { useState, useEffect } from "react";
import "./App.css";

// ── Sub-components ───────────────────────────────────────────

const PlaceholderImage = ({ label, style = {} }) => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg,#8A244B22 0%,#111F3588 50%,#F6304911 100%)",
      border: "1px solid #F6304930",
      minHeight: "200px",
      ...style,
    }}
  >
    <div
      style={{
        textAlign: "center",
        padding: "1.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <i
        className="fa-solid fa-camera"
        style={{
          fontSize: "2rem",
          color: "#F63049",
          opacity: 0.4,
          display: "block",
          marginBottom: "0.75rem",
        }}
      />
      <p
        style={{
          color: "#F63049",
          opacity: 0.6,
          fontSize: "0.7rem",
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.05,
        backgroundImage:
          "repeating-linear-gradient(45deg,#F63049 0,#F63049 1px,transparent 0,transparent 50%)",
        backgroundSize: "8px 8px",
      }}
    />
  </div>
);

const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3500);
    return () => clearInterval(iv);
  }, []);
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{text}</span>
      {glitch && (
        <>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "2px",
              color: "#F63049",
              opacity: 0.8,
              clipPath: "polygon(0 20%,100% 20%,100% 40%,0 40%)",
              zIndex: 2,
            }}
          >
            {text}
          </span>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "-2px",
              color: "#00ffff",
              opacity: 0.5,
              clipPath: "polygon(0 60%,100% 60%,100% 80%,0 80%)",
              zIndex: 2,
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

const StatCard = ({ value, label, faIcon }) => (
  <div
    style={{
      background: "linear-gradient(135deg,#8A244B22,#111F35ee)",
      border: "1px solid #F6304940",
      padding: "2rem 1.5rem",
      clipPath:
        "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
      position: "relative",
      textAlign: "center",
    }}
  >
    <i
      className={faIcon}
      style={{
        fontSize: "1.4rem",
        color: "#F6304960",
        marginBottom: "0.75rem",
        display: "block",
      }}
    />
    <div
      style={{
        fontSize: "2.4rem",
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 900,
        background: "linear-gradient(135deg,#F63049,#D02752)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div
      style={{
        color: "#aaa",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginTop: "0.5rem",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 600,
      }}
    >
      {label}
    </div>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "40%",
        height: "2px",
        background: "linear-gradient(90deg,transparent,#F63049,transparent)",
      }}
    />
  </div>
);

const SectionTag = ({ children }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.75rem",
    }}
  >
    <div style={{ width: "2rem", height: "1px", background: "#F63049" }} />
    <span
      style={{
        color: "#F63049",
        fontSize: "0.65rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
    <div style={{ width: "2rem", height: "1px", background: "#F63049" }} />
  </div>
);

const HexIcon = ({ faIcon }) => (
  <div
    style={{
      width: "48px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg,#F6304920,#8A244B30)",
      border: "1px solid #F6304940",
      clipPath: "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)",
      flexShrink: 0,
    }}
  >
    <i className={faIcon} style={{ color: "#F63049", fontSize: "1.1rem" }} />
  </div>
);

const ContactCard = ({ faIcon, iconColor, label, value, sub }) => (
  <div
    className="contact-card"
    style={{
      padding: "2rem",
      textAlign: "center",
      background: "linear-gradient(135deg,#111F35,#0a1520)",
      border: "1px solid #F6304920",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        margin: "0 auto 1rem",
        background: `${iconColor}18`,
        border: `1px solid ${iconColor}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className={faIcon} style={{ fontSize: "1.4rem", color: iconColor }} />
    </div>
    <div
      style={{
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: "#F63049",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        textTransform: "uppercase",
        marginBottom: "0.5rem",
      }}
    >
      {label}
    </div>
    <div
      style={{
        color: "#e0e0e0",
        fontWeight: 600,
        fontSize: "0.85rem",
        fontFamily: "'Share Tech Mono', monospace",
        marginBottom: "0.25rem",
        wordBreak: "break-all",
      }}
    >
      {value}
    </div>
    <div style={{ color: "#556", fontSize: "0.7rem" }}>{sub}</div>
  </div>
);

// ── Main Component ────────────────────────────────────────────

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navScrolled = scrollY > 50;

  return (
    <div className="app-root">
      {/* ── Fixed BG Grid ── */}
      <div className="bg-grid" />
      {/* ── Scanline ── */}
      <div className="scanline" />

      {/* ══════════════════════════════
          NAV
      ══════════════════════════════ */}
      <nav
        className="navbar"
        style={{
          background: navScrolled ? "rgba(6,13,24,0.95)" : "transparent",
          backdropFilter: navScrolled ? "blur(20px)" : "none",
          borderBottom: navScrolled ? "1px solid #F6304920" : "none",
        }}
      >
        {/* Logo */}
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <i className="fa-solid fa-shield-halved" />
          </div>
          <div>
            <div className="nav-brand">BLACKSHEEP</div>
            <div className="nav-sub">Creatives</div>
          </div>
        </div>

        {/* Links */}
        <div className="nav-links">
          {[
            { l: "About", i: "fa-solid fa-circle-info" },
            { l: "Event", i: "fa-solid fa-gamepad" },
            { l: "Gallery", i: "fa-solid fa-images" },
            { l: "Contact", i: "fa-solid fa-envelope" },
          ].map((x) => (
            <a key={x.l} href={`#${x.l.toLowerCase()}`} className="nav-link">
              <i className={x.i} />
              {x.l}
            </a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero-section">
        {/* Glow orbs */}
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        {/* Corner brackets */}
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <i className="fa-solid fa-star" />
              Blacksheep Creatives Presents
              <i className="fa-solid fa-star" />
            </div>
          </div>

          {/* Title */}
          <div className="hero-title-main">
            <GlitchText text="SILIGURI" />
          </div>
          <div className="hero-title-red">UNDERDOG'S</div>
          <div className="hero-title-white">CUP — S1</div>

          <div className="hero-divider" />

          <p className="hero-tagline">
            <i
              className="fa-solid fa-crosshairs"
              style={{ color: "#F63049", marginRight: "0.5rem" }}
            />
            An esport LAN in Siliguri to nurture the grassroot of{" "}
            <span style={{ color: "#F63049", fontWeight: 700 }}>
              BGMI Esport
            </span>
          </p>

          {/* CTA buttons */}
          <div className="hero-btns">
            <button className="btn-outline">
              <i className="fa-solid fa-trophy" /> Explore Event
            </button>
            <button className="btn-fill">
              <i className="fa-solid fa-paper-plane" /> Get In Touch
            </button>
          </div>

          {/* Scroll cue */}
          <div className="scroll-cue">
            <i className="fa-solid fa-chevron-down anim-float" />
            <span>SCROLL</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TICKER
      ══════════════════════════════ */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="ticker-item">
              <i className="fa-solid fa-gamepad" /> BGMI ESPORTS &nbsp;
              <i className="fa-solid fa-network-wired" /> LAN TOURNAMENT &nbsp;
              <i className="fa-solid fa-sack-dollar" /> ₹50,000 PRIZE POOL
              &nbsp;
              <i className="fa-solid fa-users" /> 250+ ATTENDEES &nbsp;
              <i className="fa-solid fa-location-dot" /> SILIGURI &nbsp;
              <i className="fa-solid fa-medal" /> SEASON 01 &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section id="about" className="section-pad">
        <div className="container two-col">
          {/* Left */}
          <div>
            <SectionTag>About Blacksheep Creatives</SectionTag>
            <h2 className="section-heading">
              Forging the Future of{" "}
              <span className="grad-text">Grassroots Esports</span>
            </h2>
            <p className="body-text">
              Blacksheep Creatives is a non-profit esports organization
              committed to discovering, developing, and celebrating raw talent
              at the grassroots level. We believe every champion starts as an
              underdog.
            </p>
            <p className="body-text" style={{ marginBottom: "2rem" }}>
              Based out of Alipurduar, West Bengal, we bridge the gap between
              passion and professional esports — creating platforms where local
              talent gets its first taste of LAN competition.
            </p>
            <div className="tag-row">
              {[
                { icon: "fa-solid fa-heart", label: "Non-Profit Org" },
                { icon: "fa-solid fa-location-dot", label: "Alipurduar, WB" },
                { icon: "fa-solid fa-gamepad", label: "BGMI Focused" },
                { icon: "fa-solid fa-people-group", label: "Community First" },
              ].map((t) => (
                <span key={t.label} className="tag-chip">
                  <i className={t.icon} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="stat-grid">
            <StatCard
              value="₹50K"
              label="Prize Pool"
              faIcon="fa-solid fa-sack-dollar"
            />
            <StatCard
              value="250+"
              label="Attendees"
              faIcon="fa-solid fa-users"
            />
            <StatCard
              value="S01"
              label="Season One"
              faIcon="fa-solid fa-medal"
            />
            <StatCard
              value="100%"
              label="Non-Profit"
              faIcon="fa-solid fa-heart"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          EVENT DETAILS
      ══════════════════════════════ */}
      <section id="event" className="section-pad section-dim">
        <div className="container">
          <div className="section-header">
            <SectionTag>Previous Event</SectionTag>
            <h2 className="section-heading">
              Siliguri Underdog's Cup —{" "}
              <span className="grad-text">Season 1</span>
            </h2>
          </div>

          {/* Event info cards */}
          <div className="three-col" style={{ marginBottom: "3rem" }}>
            {[
              {
                icon: "fa-solid fa-trophy",
                color: "#FFD700",
                title: "Prize Pool",
                value: "₹50,000",
                sub: "Total Winnings",
              },
              {
                icon: "fa-solid fa-users",
                color: "#F63049",
                title: "Attendees",
                value: "250+",
                sub: "Players, Fans & Crew",
              },
              {
                icon: "fa-solid fa-map-pin",
                color: "#D02752",
                title: "Venue",
                value: "Rishi Bhawan",
                sub: "Siliguri, Darjeeling",
              },
            ].map((c, i) => (
              <div key={i} className="evt-card">
                <div
                  className="evt-icon-wrap"
                  style={{
                    background: `${c.color}18`,
                    border: `1px solid ${c.color}40`,
                  }}
                >
                  <i
                    className={c.icon}
                    style={{ color: c.color, fontSize: "1.5rem" }}
                  />
                </div>
                <div className="evt-label">{c.title}</div>
                <div className="evt-value">{c.value}</div>
                <div className="evt-sub">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Venue strip */}
          <div className="venue-strip">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#F63049", fontSize: "1.5rem" }}
            />
            <div>
              <div className="venue-label">Event Venue</div>
              <div className="venue-name">
                Rishi Bhawan, Siliguri, Darjeeling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          GALLERY
      ══════════════════════════════ */}
      <section id="gallery" className="section-pad">
        <div className="container">
          <div className="section-header">
            <SectionTag>Event Gallery</SectionTag>
            <h2 className="section-heading">
              Reliving the <span className="grad-text">Battleground</span>
            </h2>
          </div>
          <div className="bento-grid">
            <PlaceholderImage
              label="LAN Playing Area"
              style={{
                gridColumn: "1/3",
                gridRow: "1/2",
                borderRadius: 4,
                minHeight: "unset",
              }}
            />
            <PlaceholderImage
              label="Front of Venue"
              style={{
                gridColumn: "3/4",
                gridRow: "1/2",
                borderRadius: 4,
                minHeight: "unset",
              }}
            />
            <PlaceholderImage
              label="Most Appreciated Poster"
              style={{
                gridColumn: "1/2",
                gridRow: "2/3",
                borderRadius: 4,
                minHeight: "unset",
              }}
            />
            <PlaceholderImage
              label="Audience & Crowd"
              style={{
                gridColumn: "2/4",
                gridRow: "2/3",
                borderRadius: 4,
                minHeight: "unset",
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INSTAGRAM REACH
      ══════════════════════════════ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <SectionTag>Social Media Impact</SectionTag>
            <h2
              className="section-heading"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#E1306C" }}
              />
              Instagram <span className="grad-text">Reach</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="four-col" style={{ marginBottom: "3rem" }}>
            {[
              { icon: "fa-solid fa-eye", label: "Impressions" },
              { icon: "fa-solid fa-heart", label: "Likes" },
              { icon: "fa-solid fa-comment", label: "Comments" },
              { icon: "fa-solid fa-share-nodes", label: "Shares" },
            ].map((s, i) => (
              <div key={i} className="ig-stat-card">
                <i
                  className={s.icon}
                  style={{
                    fontSize: "1.4rem",
                    color: "#F63049",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                />
                <div className="ig-stat-val">—</div>
                <div className="ig-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* IG image grid */}
          <div className="four-col">
            {["IG Post #1", "IG Post #2", "IG Story", "IG Reel"].map((l, i) => (
              <PlaceholderImage
                key={i}
                label={l}
                style={{ aspectRatio: "1", minHeight: 200, borderRadius: 4 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LAN STREAM SETUP
      ══════════════════════════════ */}
      <section className="section-pad">
        <div className="container two-col">
          <div>
            <SectionTag>Production Setup</SectionTag>
            <h2 className="section-heading">
              LAN Stream <span className="grad-text">Setup</span>
            </h2>
            <p className="body-text" style={{ marginBottom: "1.75rem" }}>
              Professional broadcasting infrastructure brought the Siliguri
              Underdog's Cup live to screens beyond the venue — connecting the
              wider BGMI community to every clutch play.
            </p>
            <div className="feature-list">
              {[
                {
                  icon: "fa-solid fa-video",
                  text: "Multi-camera LAN streaming rig",
                },
                {
                  icon: "fa-solid fa-microphone",
                  text: "Live commentary & caster booth",
                },
                {
                  icon: "fa-solid fa-satellite-dish",
                  text: "Real-time broadcast over social media",
                },
                {
                  icon: "fa-solid fa-lightbulb",
                  text: "Professional stage lighting setup",
                },
              ].map((x, i) => (
                <div key={i} className="feature-item">
                  <HexIcon faIcon={x.icon} />
                  <span className="feature-text">{x.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stream-img-grid">
            <PlaceholderImage
              label="Stream Station"
              style={{ gridColumn: "1/3", minHeight: 200, borderRadius: 4 }}
            />
            <PlaceholderImage
              label="Caster Booth"
              style={{ minHeight: 160, borderRadius: 4 }}
            />
            <PlaceholderImage
              label="Broadcast Rig"
              style={{ minHeight: 160, borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CHAMPIONS
      ══════════════════════════════ */}
      <section className="section-pad champions-section">
        <div
          className="container"
          style={{ maxWidth: 900, textAlign: "center" }}
        >
          <SectionTag>Champions</SectionTag>
          <h2 className="section-heading">
            Season 1 <span className="grad-text">Champions</span>
          </h2>
          <div className="champions-name-row">
            <i className="fa-solid fa-bolt champ-bolt" />
            <span className="champ-name">OXYGEN ESPORT</span>
            <i className="fa-solid fa-bolt champ-bolt" />
          </div>
          <div className="champ-img-wrap">
            <PlaceholderImage
              label="Oxygen Esport — Champions Photo"
              style={{ minHeight: 400, borderRadius: 8 }}
            />
            <div className="champ-badge">
              <i className="fa-solid fa-trophy" /> WINNERS
            </div>
          </div>
          <div className="champ-quote">
            <i
              className="fa-solid fa-quote-left"
              style={{ color: "#FFD70060" }}
            />
            &nbsp;Champions crowned at Siliguri's first grassroots BGMI LAN
            event&nbsp;
            <i
              className="fa-solid fa-quote-right"
              style={{ color: "#FFD70060" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="section-pad">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="section-header">
            <SectionTag>Connect With Us</SectionTag>
            <h2 className="section-heading">
              Get In <span className="grad-text">Touch</span>
            </h2>
            <p className="body-text" style={{ marginTop: "1rem" }}>
              Ready to compete or collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="three-col" style={{ marginBottom: "4rem" }}>
            <ContactCard
              faIcon="fa-brands fa-instagram"
              iconColor="#E1306C"
              label="Instagram"
              value="@blacksheep_creatives"
              sub="Follow for updates"
            />
            <ContactCard
              faIcon="fa-solid fa-phone"
              iconColor="#25D366"
              label="Phone"
              value="+91 XXXXX XXXXX"
              sub="Mon–Sat, 10AM–6PM"
            />
            <ContactCard
              faIcon="fa-brands fa-google"
              iconColor="#EA4335"
              label="Gmail"
              value="blacksheepcreatives@gmail.com"
              sub="We reply within 24hrs"
            />
          </div>

          {/* Social buttons */}
          <div style={{ textAlign: "center" }}>
            <p className="follow-label">
              <i
                className="fa-solid fa-share-nodes"
                style={{ color: "#F6304960" }}
              />
              Follow Our Journey
            </p>
            <div className="social-row">
              {[
                {
                  icon: "fa-brands fa-instagram",
                  color: "#E1306C",
                  label: "Instagram",
                },
                {
                  icon: "fa-brands fa-youtube",
                  color: "#FF0000",
                  label: "YouTube",
                },
                {
                  icon: "fa-brands fa-discord",
                  color: "#5865F2",
                  label: "Discord",
                },
                {
                  icon: "fa-brands fa-x-twitter",
                  color: "#ffffff",
                  label: "X",
                },
              ].map((s, i) => (
                <button key={i} className="social-btn" title={s.label}>
                  <i
                    className={s.icon}
                    style={{ color: s.color, fontSize: "1.2rem" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          {/* Logo */}
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <i
                className="fa-solid fa-shield-halved"
                style={{ color: "#fff", fontSize: "1.3rem" }}
              />
            </div>
            <div>
              <div className="footer-brand">BLACKSHEEP CREATIVES</div>
              <div className="footer-sub">
                ESPORTS ORGANIZATION • NON-PROFIT
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-location">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#F6304960" }}
            />
            Alipurduar, West Bengal, India
          </div>

          {/* Footer socials */}
          <div className="footer-socials">
            {[
              { icon: "fa-brands fa-instagram", color: "#E1306C" },
              { icon: "fa-brands fa-youtube", color: "#FF0000" },
              { icon: "fa-brands fa-discord", color: "#5865F2" },
              { icon: "fa-brands fa-x-twitter", color: "#aaa" },
            ].map((s, i) => (
              <i
                key={i}
                className={`${s.icon} footer-social-icon`}
                style={{ color: s.color }}
              />
            ))}
          </div>

          <div className="footer-copy">
            © 2024 Blacksheep Creatives. All rights reserved.
          </div>

          <div className="footer-tag">
            <i className="fa-solid fa-crosshairs" />
            NURTURING GRASSROOTS BGMI ESPORT
            <i className="fa-solid fa-crosshairs" />
          </div>
        </div>
      </footer>
    </div>
  );
}
