import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";
import { assetPath, insuranceLogos } from "../data/siteData";

export function InsurancesPage() {
  return (
    <PageLayout headerButtonVariant="png" logoVariant="png" footerLogoVariant="png">
      <section className="hero-section">
        <div className="wrapper">
          <div className="text">
            <h1>INSURANCES & FEES</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="insurance-section">
        <div className="wrapper">
          <h2>Fees</h2>
          <ul>
            <li>Initial Assessment</li>
            <li>Medication Management/Follow-up</li>
            <li>Medical Cannabis Evaluation and Certification</li>
          </ul>

          <h2>Insurance</h2>
          <p>
            Services may be covered in full or in part by your health insurance or employee
            benefit plan. Please check your coverage carefully by asking the following
            questions:
          </p>
          <ol>
            <li>Do I have mental health insurance benefits?</li>
            <li>What is my deductible, and has it been met?</li>
            <li>How many sessions per year does my health insurance cover?</li>
            <li>What is the coverage amount per therapy session?</li>
          </ol>

          <h3 className="insurance-heading">Accepted Insurance</h3>
          <p className="insurance-description">
            We accept a wide range of insurance plans to ensure you receive the care you need
            without unnecessary hassle. Below are the insurance providers currently accepted by
            our medical provider.
          </p>

          <div className="insurance-grid">
            {insuranceLogos.map(([file, alt]) => (
              <img key={file} src={assetPath(file)} alt={alt} />
            ))}
          </div>

          <div className="insurance-footer">
            <p>
              For insurance-related inquiries, please <a href="contact.html">contact our office</a>.
            </p>
          </div>

          <h2>Other Payment Methods</h2>
          <ul>
            <li>Cash</li>
            <li>Credit Cards</li>
            <li>Paypal</li>
            <li>CashApp</li>
            <li>Venmo</li>
          </ul>
        </div>
      </section>

      <PrimaryCta />
    </PageLayout>
  );
}
