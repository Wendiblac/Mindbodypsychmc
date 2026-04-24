import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";

export function ResourcesPage() {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="wrapper">
          <div className="text">
            <h1>RESOURCES</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="emergency-section">
        <div className="wrapper">
          <h1>Mental Health Resources</h1>

          <div className="helplines">
            <h3>Helplines</h3>
            <p>If you are in crisis, get immediate help</p>
            <br />
            <ul className="resource-links">
              <li>
                <a href="tel:911">Call 911</a>
              </li>
              <li>
                <a href="https://988lifeline.org/" target="_blank" rel="noreferrer">
                  988 Suicide & Crisis Lifeline
                </a>{" "}
                (formerly known as the National Suicide Prevention Lifeline), 988 for English
                or Spanish, or Lifeline Chat
              </li>
              <li>
                Crisis Text Line: Text <strong>SIGNS</strong> to <strong>741741</strong> for
                24/7, anonymous, free crisis counseling.
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/mental-health/disaster-preparedness"
                  target="_blank"
                  rel="noreferrer"
                >
                  Disaster Distress Helpline:
                </a>{" "}
                CALL or TEXT <a href="tel:18009855990">1-800-985-5990</a> (Press 2 for
                Spanish)
              </li>
            </ul>
          </div>
          <br />
          <br />

          <div className="resource-links">
            <h3>SAMHSA's National Helpline</h3>
            <a
              href="https://www.samhsa.gov/find-help/helplines/national-helpline"
              target="_blank"
              rel="noreferrer"
            >
              www.samhsa.gov
            </a>
            <p>24/7, Confidential Crisis Supports for Veterans and Their Loved Ones</p>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="support-section">
        <div className="wrapper">
          <h3>Abuse, Assault & Violence Support</h3>
          <ul className="resource-links">
            <li>
              <a href="https://www.thehotline.org/" target="_blank" rel="noreferrer">
                National Domestic Violence Hotline:
              </a>{" "}
              <a href="tel:18007997233">1-800-799-7233</a> or text <strong>LOVEIS</strong> to{" "}
              <strong>22522</strong>
            </li>

            <li>
              <a href="https://www.childhelp.org/hotline/" target="_blank" rel="noreferrer">
                National Child Abuse Hotline:
              </a>{" "}
              1-800-4AChild <a href="tel:18004224453">1-800-422-4453</a> or text{" "}
              <a href="tel:18004224453">1-800-422-4453</a>
            </li>

            <li>
              <a href="https://rainn.org/" target="_blank" rel="noreferrer">
                National Sexual Assault Hotline:
              </a>{" "}
              <a href="tel:18006564673">1-800-656-HOPE (4673)</a> or{" "}
              <a href="https://hotline.rainn.org/online" target="_blank" rel="noreferrer">
                Chat Online
              </a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />

      <section className="support-section">
        <div className="wrapper">
          <h3>LGBTQ+ Mental Health Support</h3>
          <ul className="resource-links">
            <li>
              <a href="https://translifeline.org/" target="_blank" rel="noreferrer">
                Trans Lifeline:
              </a>
              <a href="tel:18775658860">1-877-565-8860</a> (Para espanol, presiona el 2)
            </li>
            <li>
              The Trevor Project Lifeline:
              <a href="tel:18664887386">1-866-488-7386</a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />

      <section className="support-section">
        <div className="wrapper">
          <h3>Veterans Mental Health Support</h3>
          <ul className="resource-links">
            <li>
              Veterans Crisis Line: <a href="tel:988">988</a>, then press 1, or Crisis Chat or
              text: <a href="tel:838255">838255</a>
            </li>
            <li>
              <a
                href="https://www.veteranscrisisline.net/"
                target="_blank"
                rel="noreferrer"
              >
                www.veteranscrisisline.net
              </a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />

      <section className="links-section">
        <div className="wrapper">
          <h3>Other Resources</h3>
          <ul className="resource-links">
            <li>
              <a href="https://www.nami.org/Home" target="_blank" rel="noreferrer">
                Affective (Mood) Disorders National Association of Mental Illness
              </a>{" "}
              www.nami.org
            </li>

            <li>
              <a
                href="https://www.crisistextline.org/topics/anxiety/#what-is-anxiety-1"
                target="_blank"
                rel="noreferrer"
              >
                How to Deal with Anxiety
              </a>{" "}
              www.crisistextline.org
            </li>

            <li>
              <a
                href="https://www.crisistextline.org/topics/suicide/"
                target="_blank"
                rel="noreferrer"
              >
                How to Deal with Suicide
              </a>{" "}
              www.crisistextline.org
            </li>

            <li>
              <a
                href="https://www.crisistextline.org/topics/get-help-coronavirus/#coping-with-coronavirus-1"
                target="_blank"
                rel="noreferrer"
              >
                How to Handle Coronavirus
              </a>{" "}
              www.crisistextline.org
            </li>

            <li>
              <a
                href="https://www.crisistextline.org/topics/depression/#what-is-depression-1"
                target="_blank"
                rel="noreferrer"
              >
                How to Deal with Depression
              </a>{" "}
              www.crisistextline.org
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />

      <section className="education-section">
        <div className="wrapper">
          <h3>Mental Health Education</h3>
          <p>
            Learn about mental health conditions, coping strategies, and when to seek
            professional help.
          </p>
          <ul className="resource-links">
            <li>
              <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noreferrer">
                NIMH - Mental Health Topics
              </a>
            </li>
            <li>
              <a href="https://afsp.org/" target="_blank" rel="noreferrer">
                American Foundation for Suicide Prevention (AFSP)
              </a>
            </li>
            <li>
              <a href="https://www.crisistextline.org/" target="_blank" rel="noreferrer">
                Crisis Text Line - How It Works
              </a>
            </li>
          </ul>
        </div>
      </section>

      <PrimaryCta />
    </PageLayout>
  );
}
