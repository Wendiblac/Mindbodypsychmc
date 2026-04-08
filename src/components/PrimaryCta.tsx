import { PillButton } from "./PillButton";
import type { AssetVariant } from "../data/siteData";

interface PrimaryCtaProps {
  buttonVariant?: AssetVariant;
  showBookButton?: boolean;
  onOpenCalendly: () => void;
}

export function PrimaryCta({
  buttonVariant: _buttonVariant = "svg",
  showBookButton = true,
  onOpenCalendly,
}: PrimaryCtaProps) {
  return (
    <section className="cta-section">
      <div className="wrapper">
        <div className="cta primary-cta">
          <p>Start your journey to total wellness today.</p>
          <div className="cta-btns">
            <PillButton onClick={onOpenCalendly} variant="solid">
              Consult Now
            </PillButton>

            {showBookButton ? (
              <PillButton onClick={onOpenCalendly} variant="outline">
                Book Online
              </PillButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
