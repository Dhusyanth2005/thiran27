import { NavLink } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { label: "Hackathons", path: "/hackathons" },
  { label: "Tech Fest", path: "/tech-fest" },
  { label: "Spotlight Events", path: "/spotlight-events" },
  { label: "Cultural Contests", path: "/cultural-contests" },
  { label: "Celebrity Shows", path: "/celebrity-shows" },
];

const resources = [
  { label: "Event Schedule", path: "/schedule" },
  { label: "Venue Map", path: "/venue" },
  { label: "Guest Lounge", path: "/guest-lounge" },
  { label: "Register Now", path: "/register" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__flame" aria-hidden="true">▲</span>
            <div>
              <strong>THIRAN 2027</strong>
              <p>Confluence of Talents</p>
            </div>
          </div>
          <p className="footer__desc">
            A national-level inter-college techno-cultural-sports fest hosted by Sri
            Eshwar College of Engineering, Coimbatore — three days of hackathons,
            workshops, contests and celebrity shows.
          </p>
          <p className="footer__dates">Feb 4, 5 &amp; 6, 2027 · Coimbatore, Tamil Nadu</p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <NavLink to={l.path}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Resources</h4>
          <ul>
            {resources.map((l) => (
              <li key={l.label}>
                <NavLink to={l.path}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <a href="mailto:thiran@sece.ac.in">thiran@sece.ac.in</a>
            </li>
            <li>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="footer__address">
              Sri Eshwar College of Engineering, Kondampatti, Coimbatore, Tamil Nadu
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-row">
          <p>© 2027 Sri Eshwar College of Engineering. All rights reserved.</p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}