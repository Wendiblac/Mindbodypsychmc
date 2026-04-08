import { useEffect } from "react";
import { externalLinks } from "../data/siteData";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className="modal"
      onClick={onClose}
      style={{ display: isOpen ? "block" : "none" }}
      aria-hidden={!isOpen}
    >
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close" onClick={onClose} aria-label="Close Calendly">
          &times;
        </button>

        <iframe
          title="Calendly scheduling"
          src={`${externalLinks.calendly}?hide_gdpr_banner=1`}
          style={{
            width: "100%",
            minWidth: "320px",
            height: "min(700px, calc(100vh - 140px))",
            border: 0,
          }}
        />
      </div>
    </div>
  );
}
