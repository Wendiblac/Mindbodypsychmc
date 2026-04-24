import { PillButton } from "./PillButton";
import { externalLinks, type AssetVariant } from "../data/siteData";

interface PrimaryCtaProps {
  buttonVariant?: AssetVariant;
  showBookButton?: boolean;
}

export function PrimaryCta({
  buttonVariant: _buttonVariant = "svg",
  showBookButton = true,
}: PrimaryCtaProps) {
  return (
    <section className="cta-section">
      <div className="wrapper">
        <div className="cta primary-cta">
          <p>Start your journey to total wellness today.</p>
          <div className="cta-btns">
            <PillButton
              href={externalLinks.booking}
              target="_blank"
              rel="noreferrer"
              variant="solid"
            >
              Consult Now
            </PillButton>

            {showBookButton ? (
              <PillButton
                href={externalLinks.booking}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                Book Online
              </PillButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
