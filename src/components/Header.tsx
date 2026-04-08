import { useEffect, useRef, useState } from "react";
import { PillButton } from "./PillButton";
import { assetPath, externalLinks, mobileMenuLinks, type AssetVariant } from "../data/siteData";

interface HeaderProps {
  buttonVariant?: AssetVariant;
  logoVariant?: AssetVariant;
}

export function Header({
  buttonVariant: _buttonVariant = "svg",
  logoVariant = "svg",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="wrapper">
        <nav ref={menuRef}>
          <div className="logo">
            <a href="index.html">
              <img src={assetPath(`logo.${logoVariant}`)} alt="Mind & Body Psychiatry logo" />
            </a>
          </div>

          <ul className="navbtns">
            <li>
              <PillButton href="./index.html" size="nav" variant="outline">
                Home
              </PillButton>
            </li>
            <li>
              <PillButton href="./about.html" size="nav" variant="outline">
                About
              </PillButton>
            </li>
            <li>
              <PillButton href="./services.html" size="nav" variant="outline">
                Services
              </PillButton>
            </li>
            <li>
              <PillButton href="./resources.html" size="nav" variant="outline">
                Resources
              </PillButton>
            </li>
            <li>
              <PillButton href="./insurances.html" size="nav" variant="outline">
                Insurance
              </PillButton>
            </li>
            <li>
              <PillButton href="./blog.html" size="nav" variant="outline">
                Blog
              </PillButton>
            </li>
          </ul>

          <div className="cnav">
            <PillButton href="./contact.html" size="nav-wide" variant="solid">
              Contact Us
            </PillButton>
          </div>

          <div className="verified">
            <a href={externalLinks.psychologyToday} target="_blank" rel="noreferrer">
              <img src={assetPath("verified.png")} alt="verified" />
            </a>
          </div>

          <button
            type="button"
            className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="toggle">
              <span className="topline common"></span>
              <span className="middleline common"></span>
              <span className="bottomline common"></span>
            </span>
          </button>

          {isMenuOpen ? (
            <div className="slide is-open" id="mobile-menu">
              <h1>
                MENU{" "}
                <div className="underline">
                  <img src={assetPath("underline.png")} alt="underline" />
                </div>
              </h1>

              <ul>
                {mobileMenuLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="verified">
                <a href={externalLinks.psychologyToday} target="_blank" rel="noreferrer">
                  <img src={assetPath("verified.png")} alt="verified" />
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
