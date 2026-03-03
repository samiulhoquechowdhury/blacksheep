// ============================================================
//  App.jsx  —  Blacksheep Creatives · Siliguri Underdog's Cup
//  React + Vite ready. Fully responsive for all screen sizes.
// ============================================================

import { useState, useEffect } from "react";
import "./App.css";

// ── Sub-components ───────────────────────────────────────────

const PlaceholderImage = ({ label, className = "" }) => (
  <div className={`placeholder-img ${className}`}>
    <div className="placeholder-inner">
      <i className="fa-solid fa-camera placeholder-icon" />
      <p className="placeholder-label">{label}</p>
    </div>
    <div className="placeholder-pattern" />
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
    <span className="glitch-wrap">
      <span className="glitch-base">{text}</span>
      {glitch && (
        <>
          <span className="glitch-red">{text}</span>
          <span className="glitch-cyan">{text}</span>
        </>
      )}
    </span>
  );
};

const StatCard = ({ value, label, faIcon }) => (
  <div className="stat-card">
    <i className={`${faIcon} stat-icon`} />
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
    <div className="stat-line" />
  </div>
);

const SectionTag = ({ children }) => (
  <div className="section-tag">
    <div className="section-tag-line" />
    <span className="section-tag-text">{children}</span>
    <div className="section-tag-line" />
  </div>
);

const HexIcon = ({ faIcon }) => (
  <div className="hex-icon">
    <i className={faIcon} />
  </div>
);

const ContactCard = ({ faIcon, iconColor, label, value, sub }) => (
  <div className="contact-card">
    <div
      className="contact-icon-wrap"
      style={{
        background: `${iconColor}18`,
        border: `1px solid ${iconColor}40`,
      }}
    >
      <i className={faIcon} style={{ color: iconColor }} />
    </div>
    <div className="contact-label">{label}</div>
    <div className="contact-value">{value}</div>
    <div className="contact-sub">{sub}</div>
  </div>
);

const EventCard = ({ icon, iconColor, title, value, sub }) => (
  <div className="evt-card">
    <div
      className="evt-icon-wrap"
      style={{
        background: `${iconColor}18`,
        border: `1px solid ${iconColor}40`,
      }}
    >
      <i className={icon} style={{ color: iconColor }} />
    </div>
    <div className="evt-label">{title}</div>
    <div className="evt-value">{value}</div>
    <div className="evt-sub">{sub}</div>
  </div>
);

// ── Main Component ────────────────────────────────────────────

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on nav link click
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { l: "About", i: "fa-solid fa-circle-info" },
    { l: "Event", i: "fa-solid fa-gamepad" },
    { l: "Gallery", i: "fa-solid fa-images" },
    { l: "Contact", i: "fa-solid fa-envelope" },
  ];

  return (
    <div className="app-root">
      {/* ── Fixed BG Grid ── */}
      <div className="bg-grid" />
      {/* ── Scanline ── */}
      <div className="scanline" />
      {/* ── Corner Brackets ── */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* ══════════════════════════════
          NAV
      ══════════════════════════════ */}
      <nav className={`navbar${scrollY > 50 ? " navbar--scrolled" : ""}`}>
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <i className="fa-solid fa-shield-halved" />
          </div>
          <div>
            <div className="nav-brand">BLACKSHEEP</div>
            <div className="nav-sub">Creatives</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map((x) => (
            <a key={x.l} href={`#${x.l.toLowerCase()}`} className="nav-link">
              <i className={x.i} />
              {x.l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((x) => (
            <a
              key={x.l}
              href={`#${x.l.toLowerCase()}`}
              className="mobile-link"
              onClick={closeMenu}
            >
              <i className={x.i} />
              {x.l}
            </a>
          ))}
        </div>
      )}

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero-section">
        {/* <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" /> */}
        <div className="hero-corner hero-corner-tl" />
        <div className="hero-corner hero-corner-tr" />
        <div className="hero-corner hero-corner-bl" />
        <div className="hero-corner hero-corner-br" />

        <div className="hero-content">
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <i className="fa-solid fa-star" />
              Blacksheep Creatives Presents
              <i className="fa-solid fa-star" />
            </div>
          </div>

          <div className="hero-title-main">
            <GlitchText text="SILIGURI" />
          </div>
          <div className="hero-title-red">UNDERDOG'S</div>
          <div className="hero-title-white">CUP — S1</div>

          <div className="hero-divider" />

          <p className="hero-tagline">
            <i className="fa-solid fa-crosshairs hero-tagline-icon" />
            An esport LAN in Siliguri to nurture the grassroot of{" "}
            <span className="hero-tagline-accent">BGMI Esport</span>
          </p>

          <div className="hero-btns">
            <button className="btn-outline">
              <i className="fa-solid fa-trophy" /> Explore Event
            </button>
            <button className="btn-fill">
              <i className="fa-solid fa-paper-plane" /> Get In Touch
            </button>
          </div>

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
        <div className="container">
          <div className="two-col">
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
              <p className="body-text">
                Based out of Alipurduar, West Bengal, we bridge the gap between
                passion and professional esports — creating platforms where
                local talent gets its first taste of LAN competition.
              </p>
              <div className="tag-row">
                {[
                  { icon: "fa-solid fa-heart", label: "Non-Profit Org" },
                  { icon: "fa-solid fa-location-dot", label: "Alipurduar, WB" },
                  { icon: "fa-solid fa-gamepad", label: "BGMI Focused" },
                  {
                    icon: "fa-solid fa-people-group",
                    label: "Community First",
                  },
                ].map((t) => (
                  <span key={t.label} className="tag-chip">
                    <i className={t.icon} />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
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
        </div>
      </section>

      {/* ══════════════════════════════
          EVENT
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

          <div className="three-col mb-3">
            <EventCard
              icon="fa-solid fa-trophy"
              iconColor="#FFD700"
              title="Prize Pool"
              value="₹50,000"
              sub="Total Winnings"
            />
            <EventCard
              icon="fa-solid fa-users"
              iconColor="#F63049"
              title="Attendees"
              value="250+"
              sub="Players, Fans & Crew"
            />
            <EventCard
              icon="fa-solid fa-map-pin"
              iconColor="#D02752"
              title="Venue"
              value="Rishi Bhawan"
              sub="Siliguri, Darjeeling"
            />
          </div>

          <div className="venue-strip">
            <i className="fa-solid fa-location-dot venue-icon" />
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
            <PlaceholderImage label="LAN Playing Area" className="bento-a" />
            <PlaceholderImage label="Front of Venue" className="bento-b" />
            <PlaceholderImage
              label="Most Appreciated Poster"
              className="bento-c"
            />
            <PlaceholderImage label="Audience & Crowd" className="bento-d" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INSTAGRAM
      ══════════════════════════════ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <SectionTag>Social Media Impact</SectionTag>
            <h2 className="section-heading ig-heading">
              <i className="fa-brands fa-instagram ig-icon" />
              Instagram <span className="grad-text">Reach</span>
            </h2>
          </div>

          <div className="four-col mb-3">
            {[
              { icon: "fa-solid fa-eye", label: "Impressions" },
              { icon: "fa-solid fa-heart", label: "Likes" },
              { icon: "fa-solid fa-comment", label: "Comments" },
              { icon: "fa-solid fa-share-nodes", label: "Shares" },
            ].map((s, i) => (
              <div key={i} className="ig-stat-card">
                <i className={s.icon} />
                <div className="ig-stat-val">—</div>
                <div className="ig-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="four-col">
            {["IG Post #1", "IG Post #2", "IG Story", "IG Reel"].map((l, i) => (
              <PlaceholderImage key={i} label={l} className="ig-img" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LAN STREAM
      ══════════════════════════════ */}
      <section className="section-pad">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionTag>Production Setup</SectionTag>
              <h2 className="section-heading">
                LAN Stream <span className="grad-text">Setup</span>
              </h2>
              <p className="body-text stream-body">
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
                className="stream-main"
              />
              <PlaceholderImage label="Caster Booth" className="stream-sm" />
              <PlaceholderImage label="Broadcast Rig" className="stream-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CHAMPIONS
      ══════════════════════════════ */}
      <section className="section-pad champions-section">
        <div className="container champions-container">
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
              className="champ-photo"
            />
            <div className="champ-badge">
              <i className="fa-solid fa-trophy" /> WINNERS
            </div>
          </div>
          <div className="champ-quote">
            <i className="fa-solid fa-quote-left champ-quote-icon" />
            Champions crowned at Siliguri's first grassroots BGMI LAN event
            <i className="fa-solid fa-quote-right champ-quote-icon" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="section-pad">
        <div className="container contact-container">
          <div className="section-header">
            <SectionTag>Connect With Us</SectionTag>
            <h2 className="section-heading">
              Get In <span className="grad-text">Touch</span>
            </h2>
            <p className="body-text contact-sub">
              Ready to compete or collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="three-col mb-4">
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

          <div className="social-section">
            <p className="follow-label">
              <i className="fa-solid fa-share-nodes follow-icon" />
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
                  <i className={s.icon} style={{ color: s.color }} />
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
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <i className="fa-solid fa-shield-halved" />
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
            <i className="fa-solid fa-location-dot footer-loc-icon" />
            Alipurduar, West Bengal, India
          </div>

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
