import { useState, type FormEvent } from "react";
import { CalendlyModal } from "../components/CalendlyModal";
import { PageLayout } from "../components/PageLayout";
import { PillButton } from "../components/PillButton";
import { assetPath, homeServiceCards, testimonials } from "../data/siteData";
import { submitHtmlForm } from "../lib/forms";

const homeInsuranceLead = [
  ["allied.png", "Allied"],
  ["cigna.png", "Cigna"],
  ["carelon.jpg", "Carelon"],
  ["quest.png", "Quest"],
  ["evernorth.png", "Evernorth"],
  ["meritain.jpeg", "Meritain"],
  ["Coventry.png", "Coventry"],
  ["nippon.png", "Nippon"],
  ["geha.jpg", "GEHA"],
  ["seiu.jpg", "1199SEIU Funds"],
  ["degree.jpg", "90 Degree Benefits"],
  ["caprock.jpg", "Caprock"],
  ["boon.jpg", "Boon-Chapman"],
] as const;

const homeInsuranceTail = [
  ["aetna.png", "Aetna"],
  ["anthem.png", "Anthem"],
  ["bluecross.png", "Blue Cross"],
  ["carefirst.png", "CareFirst"],
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    try {
      await submitHtmlForm(event.currentTarget);
      event.currentTarget.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="text">
          <h1>
            Your Path to <span className="h1b">Optimal Living Begins Here</span>
          </h1>

          <p>
            Empowering you with integrated psychiatric and medical care
            <br />
            tailored to your mind and body.
          </p>
        </div>

        <div className="herobtns">
          <ul>
            <li>
              <PillButton
                className="consult-btn"
                onClick={() => setIsCalendlyOpen(true)}
                variant="solid"
              >
                Consult Now
              </PillButton>
            </li>
            <li>
              <PillButton
                className="zocdoc"
                onClick={() => setIsCalendlyOpen(true)}
                variant="outline"
              >
                Book Online
              </PillButton>
            </li>
          </ul>
        </div>
      </section>

      <section className="overview-section">
        <div className="wrapper">
          <div className="overview">
            <div className="details">
              <div className="text">
                <p>
                  Mind-Body Psychiatry and Medical Services integrate
                  comprehensive psychiatric care with medical management,
                  recognizing the close interplay between mental health and
                  physical health. This approach treats the whole person by
                  addressing both psychological and medical factors that impact
                  overall well-being.
                </p>
              </div>

              <div>
                <img src={assetPath("team.png")} alt="Care team" />

                <div className="zocdoc">
                  <PillButton
                    onClick={() => setIsCalendlyOpen(true)}
                    variant="outline"
                  >
                    Book Online
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="wrapper">
          <div className="heading">
            <div className="title">
              <div className="slogo">
                <img src={assetPath("serviceslogo.png")} alt="services" />
              </div>
              <h1>
                Our Services
                <div className="underline">
                  <img src={assetPath("underline.png")} alt="underline" />
                </div>
              </h1>
            </div>

            <div className="desktop">
              <PillButton
                href="./services.html"
                size="nav-wide"
                variant="outline"
              >
                View Services
              </PillButton>
            </div>
          </div>

          <p>
            Explore our unique offerings that combine psychiatry, psychotherapy,
            and medical management.
          </p>
        </div>

        <div className="scroll-container">
          <div className="scroll-track">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="scroll-content" key={index}>
                {homeServiceCards.map((card) => (
                  <span key={`${card.label}-${index}`}>
                    <img src={assetPath(card.image)} alt={card.alt} />
                    <br />
                    <p>{card.label}</p>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <span className="servicesbtn">
          <PillButton href="./services.html" size="nav-wide" variant="outline">
            View Services
          </PillButton>
        </span>
      </section>

      <section className="about-section">
        <div className="wrapper">
          <div className="abtsummary">
            <div className="aboutsum">
              <div className="title">
                <div className="alogo">
                  <img
                    src={assetPath("aboutlogo.png")}
                    alt="About the provider"
                  />
                </div>
                <h1>
                  About the Provider
                  <div className="underline">
                    <img src={assetPath("underline.png")} alt="underline" />
                  </div>
                </h1>
              </div>

              <div className="about">
                <div className="summary">
                  <div className="abttext">
                    <p>
                      <strong>
                        Abigail T. Asumadu-Mensah, APRN, FNP-BC, PMHNP-BC
                      </strong>
                      <br />
                      <span style={{ fontStyle: "italic", fontSize: "14px" }}>
                        Family Nurse Practitioner & Psychiatric Mental Health
                        Nurse Practitioner Licensed in Virginia, Washington,
                        D.C. and West Virginia.
                      </span>
                      <br />
                      Abigail is a compassionate and highly qualified provider
                      with dual board certifications in Family Medicine and
                      Psychiatric Mental Health. She specializes in treating
                      conditions such as anxiety, depression, ADHD, mood and
                      eating disorders, and psychosis, while also managing
                      chronic medical issues like diabetes, hypertension, and
                      high cholesterol.
                      <br />
                      Her care model integrates therapy, medication management,
                      and preventive health, delivering personalized support
                      that addresses both mental and physical well-being.
                    </p>

                    <div className="abtbtn">
                      <PillButton href="./about.html" variant="solid">
                        Learn More
                      </PillButton>
                    </div>
                  </div>
                </div>

                <div className="abtportrait">
                  <img
                    src={assetPath("abtportrait.jpg")}
                    alt="Abigail T. Asumadu-Mensah"
                  />
                  <div className="tag">
                    <p>
                      Abigail T. Asumadu-Mensah,
                      <br />
                      APRN, PMHNP-BC, FNP-BC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus-section">
        <div className="wrapper">
          <div className="title">
            <div className="wlogo">
              <img src={assetPath("whylogo.png")} alt="Why choose us" />
            </div>
            <h1>
              Why Choose Us
              <div className="underline">
                <img src={assetPath("underline.png")} alt="underline" />
              </div>
            </h1>
          </div>

          <div className="whylist">
            <ul>
              <div className="first">
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Mental health and physical health are deeply connected:
                  </span>
                  <br />
                  Chronic medical conditions can worsen psychiatric symptoms and
                  vice versa.
                </li>

                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Holistic treatment improves outcomes:
                  </span>
                  <br />
                  Treating both psychiatric and medical needs together leads to
                  better symptom control and quality of life.
                </li>
              </div>

              <div className="second">
                <li>
                  <span style={{ fontWeight: "bold" }}>Personalized care:</span>
                  <br />
                  Treatments are adapted to the individual's unique physical and
                  mental health profile, enhancing safety and effectiveness.
                </li>

                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Supports lifespan care:
                  </span>
                  <br />
                  Services are designed for all ages, addressing the evolving
                  needs across the lifespan.
                </li>
              </div>

              <div className="third">
                <div>
                  <PillButton
                    className="consult-btn"
                    onClick={() => setIsCalendlyOpen(true)}
                    variant="solid"
                  >
                    Consult Now
                  </PillButton>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="insurance-section">
        <div className="wrapper">
          <div className="insurance">
            <div className="title">
              <div className="ilogo">
                <img
                  src={assetPath("insurelogo.png")}
                  alt="Accepted insurance"
                />
              </div>
              <h1>
                Accepted Insurance
                <div className="underline">
                  <img src={assetPath("underline.png")} alt="underline" />
                </div>
              </h1>
            </div>

            <p>
              We accept a number of insurance and payment plans, including
              Aetna, Cigna, Medicaid and more. See all of our accepted
              insurances below.
            </p>

            <div className="scroll-container">
              <div className="scroll-track">
                <div className="scroll-content">
                  {homeInsuranceLead.map(([file, alt]) => (
                    <span className="flex w-8" key={file}>
                      <img src={assetPath(file)} alt={alt} />
                    </span>
                  ))}

                  {homeInsuranceTail.map(([file, alt]) => (
                    <span className="flex " key={file}>
                      <img src={assetPath(file)} alt={alt} />
                    </span>
                  ))}

                  {homeInsuranceLead.map(([file, alt]) => (
                    <span className="flex w-8" key={file}>
                      <img src={assetPath(file)} alt={alt} />
                    </span>
                  ))}

                  {homeInsuranceTail.map(([file, alt]) => (
                    <span className="flex " key={file}>
                      <img src={assetPath(file)} alt={alt} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="wrapper">
          <div className="testimonials">
            <div className="title">
              <div className="tlogo">
                <img src={assetPath("testslogo.png")} alt="Testimonials" />
              </div>
              <h1>
                Testimonials
                <div className="underline">
                  <img src={assetPath("underline.png")} alt="underline" />
                </div>
              </h1>
            </div>

            <div className="testimonials-container">
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.name}>
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.body}</p>
                  <div className="testimonial-footer">
                    <strong>{testimonial.name}</strong>
                    <br />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>We're Here to Help You Stay Healthy!</h2>
          <p>
            Have questions or need assistance? Our team is ready to guide you
            through your health journey. Send us a message today.
          </p>

          {formStatus !== "success" ? (
            <form
              className="enquiry-form"
              method="POST"
              action="https://formsubmit.co/Mindbodypsychmc@gmail.com"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="number"
                name="number"
                placeholder="Your Phone Number"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message..."
                required
              />

              <PillButton
                type="submit"
                className="submit-btn"
                disabled={formStatus === "submitting"}
                variant="solid"
              >
                Submit
              </PillButton>
            </form>
          ) : null}

          <div
            className="thank-you"
            style={{
              display: formStatus === "success" ? "block" : "none",
              opacity: 1,
            }}
          >
            <h2>Thank you!</h2>
            <br />
            <br />
            <p>Your message has been sent. We'll get back to you soon.</p>
          </div>

          {formStatus === "error" ? (
            <p style={{ marginTop: "12px" }}>
              Something went wrong. Please try again.
            </p>
          ) : null}
        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </PageLayout>
  );
}
