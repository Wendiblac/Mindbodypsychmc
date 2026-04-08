import { useState, type FormEvent } from "react";
import { CalendlyModal } from "../components/CalendlyModal";
import { PageLayout } from "../components/PageLayout";
import { PillButton } from "../components/PillButton";
import { PrimaryCta } from "../components/PrimaryCta";
import { submitHtmlForm } from "../lib/forms";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
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
        <div className="wrapper">
          <div className="text">
            <h1>CONTACT</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="wrapper">
          <h2>We're Here to Help You Stay Healthy!</h2>

          <div className="contact-details">
            <p>
              <strong>Address:</strong> 5510 Cherokee Ave. 300 #1270,
              <br />
              Alexandria Va 22312
            </p>
            <p>
              <strong>Phone:</strong> 540-358-8809
            </p>
            <p>
              <strong>Fax:</strong> (+1) 707 736 7193
            </p>
            <p>
              <strong>Email:</strong> info@mindbodypsychmc.com
            </p>
          </div>
          <br />
          <br />

          <div className="greeting">
            "Have questions or need assistance? Our team is ready to guide you through your
            health journey.
            <br />
            Send us a message today."
          </div>

          <div className="contact">
            <div className="contactform">
              {formStatus !== "success" ? (
                <form
                  className="contact-form"
                  method="POST"
                  action="https://formsubmit.co/Mindbodypsychmc@gmail.com"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Your Address</label>
                    <input type="text" id="address" name="address" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Question or Message</label>
                    <textarea id="message" name="message" rows={5} required />
                  </div>

                  <div className="form-submit">
                    <PillButton
                      type="submit"
                      className="submit-btn"
                      disabled={formStatus === "submitting"}
                      variant="solid"
                    >
                      Submit
                    </PillButton>
                  </div>
                </form>
              ) : null}

              <div
                className="thank-you"
                style={{ display: formStatus === "success" ? "block" : "none", opacity: 1 }}
              >
                <h2>Thank you!</h2>
                <br />
                <br />
                <p>Your message has been sent. We'll get back to you soon.</p>
              </div>

              {formStatus === "error" ? (
                <p style={{ marginTop: "12px" }}>Something went wrong. Please try again.</p>
              ) : null}
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=5510+Cherokee+Ave.+300+%231270,+Alexandria,+VA+22312&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <PrimaryCta onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </PageLayout>
  );
}
