import type { MouseEvent } from "react";
import {
  assetPath,
  externalLinks,
  footerLinks,
  type AssetVariant,
} from "../data/siteData";

const socialLinks = [
  { className: "facebk", icon: "facebook.png", href: externalLinks.facebook, alt: "Facebook" },
  { className: "twitter", icon: "twitter.png", href: "", alt: "Twitter" },
  { className: "instagram", icon: "instagram.png", href: externalLinks.instagram, alt: "Instagram" },
  { className: "linkedin", icon: "linkedin.png", href: externalLinks.linkedin, alt: "LinkedIn" },
  { className: "youtube", icon: "youtube.png", href: "", alt: "YouTube" },
];

interface FooterProps {
  logoVariant?: AssetVariant;
}

export function Footer({ logoVariant = "svg" }: FooterProps) {
  const handlePlaceholderClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.getAttribute("href") === "#") {
      event.preventDefault();
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Email:</span> info@mindbodypsychmc.com
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Phone:</span> (+1) 540-237-1722
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Fax:</span> (+1) 707 736 7193
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Address:</span> 5510 Cherokee Ave. 300 #1270
              <br />
              Alexandria Va 22312
            </p>

            <div className="socials">
              {socialLinks.map((social) => (
                <div key={social.className} className={social.className}>
                  <a
                    href={social.href || "#"}
                    onClick={handlePlaceholderClick}
                    target={social.href ? "_blank" : undefined}
                    rel={social.href ? "noreferrer" : undefined}
                  >
                    <img src={assetPath(social.icon)} alt={social.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>Site Links</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={`./${link.href}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </span>

        <div className="footer-info">
          <img src={assetPath(`logo.${logoVariant}`)} alt="Mind & Body Psychiatry" />
          <p>
            Mind-Body Psychiatry and Medical Services integrate comprehensive psychiatric care
            with medical management, recognizing the close interplay between mental health and
            physical health. This approach treats the whole person by addressing both
            psychological and medical factors that impact overall well-being.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Mind & Body Psychiatry. All rights reserved.</p>
      </div>
    </footer>
  );
}
