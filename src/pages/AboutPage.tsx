import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";
import { assetPath } from "../data/siteData";

const specialties = [
  "Anxiety Disorders",
  "ADHD",
  "Depression & Major Depressive Disorder (MDD)",
  "Mood Disorders",
  "Eating Disorders",
  "Psychosis & Psychotic Disorders",
];

const chronicConditions = [
  "Diabetes",
  "Hypertension",
  "Hyperlipidemia (High Cholesterol)",
];

const education = [
  { label: "BSN", detail: "Howard University (2015)" },
  { label: "MSN, Family Nurse Practitioner", detail: "Walden University (2020)" },
  { label: "Postgraduate Certificate, PMHNP", detail: "Walden University (2024)" },
  { label: "Doctorate of Nursing Practice", detail: "In Progress, Walden University" },
];

export function AboutPage() {
  return (
    <PageLayout>
      <section className="header-section">
        <div className="wrapper">
          <div className="main-title">
            <div className="head">
              <div className="title">
                <div className="alogo">
                  <img src={assetPath("aboutlogo.png")} alt="About the provider" />
                </div>
                <h1>
                  About the Provider
                  <div className="underline">
                    <img src={assetPath("underline.png")} alt="underline" />
                  </div>
                </h1>
              </div>
              <div className="titleparagraph">
                <p>
                  Abigail T. Asumadu-Mensah, FNP-C, PMHNP-BC
                  <br />
                  <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                    Family Nurse Practitioner & Psychiatric Mental Health Nurse Practitioner
                  </span>
                  <br />
                  Licensed in Virginia, West Virginia & Washington, D.C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="intro-section">
        <div className="wrapper">
          <div className="title">
            <h2>Healing the Whole Person, Mind and Body</h2>
          </div>

          <p>
            Abigail T. Asumadu-Mensah is a dual-licensed Family Nurse Practitioner and
            Psychiatric Mental Health Nurse Practitioner, proudly serving clients across
            Virginia, West Virginia and Washington, D.C.
          </p>

          <div className="first">
            <img src={assetPath("abtfull.jpg")} alt="Abigail" className="mob" />
            <div className="abtfull"></div>

            <div className="text">
              <p>
                With a passion for providing care that honors the entire person, Abigail
                specializes in treating a wide range of mental health conditions and chronic
                medical concerns, offering a truly integrated approach to wellness. She works
                with individuals of all ages, supporting them through every stage of life with
                compassion, clinical excellence, and personalized care.
              </p>

              <div className="global">
                <div className="title">
                  <h3>Specialties</h3>
                </div>

                <div className="lists">
                  <p>Her clinical specialties include the following:</p>
                  <ul className="first-list">
                    {specialties.map((specialty) => (
                      <li key={specialty}>
                        <img src={assetPath("disc.png")} alt="disc" /> {specialty}
                      </li>
                    ))}
                    <br />

                    <p>
                      In addition to psychiatric care, Abigail manages chronic physical
                      conditions including:
                    </p>
                    {chronicConditions.map((condition) => (
                      <li key={condition}>
                        <img src={assetPath("disc.png")} alt="disc" /> {condition}
                      </li>
                    ))}
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="global">
            <p>
              She also provides STD testing, routine lab work, and treatment for acute
              illnesses such as sinus infections and upper respiratory infections (URIs),
              ensuring continuity between mental and physical health care.
            </p>
          </div>
        </div>
      </section>

      <section className="specialties-section">
        <div className="wrapper">
          <div className="title">
            <h3>Specialties</h3>
          </div>

          <div className="lists">
            <p>Her clinical specialties include the following:</p>
            <ul className="first-list">
              {specialties.map((specialty) => (
                <li key={specialty}>
                  <img src={assetPath("disc.png")} alt="disc" /> {specialty}
                </li>
              ))}
              <br />

              <p>
                In addition to psychiatric care, Abigail manages chronic physical conditions
                including:
              </p>
              {chronicConditions.map((condition) => (
                <li key={condition}>
                  <img src={assetPath("disc.png")} alt="disc" /> {condition}
                </li>
              ))}
              <br />

              <p>
                She also provides STD testing, routine lab work, and treatment for acute
                illnesses such as sinus infections and upper respiratory infections (URIs),
                ensuring continuity between mental and physical health care.
              </p>
            </ul>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="wrapper">
          <div className="title">
            <h3>Approach to Care</h3>
          </div>
          <div className="text">
            <p>
              What sets Abigail's practice apart is the blended model of care she offers. She
              integrates psychotherapy with evidence-based medication management, while also
              addressing physical health needs. This allows her to support patients in a
              holistic, balanced, and safe way, treating more than just symptoms, but the full
              story behind them.
              <br />
              <br />
              In early sessions, patients can expect a nonjudgmental, welcoming space where
              concerns are explored, health history is reviewed, and a customized treatment plan
              is developed based on individual goals.
            </p>
          </div>
        </div>
      </section>

      <section className="empowerment-section">
        <div className="wrapper">
          <div className="title">
            <h3>Empowerment Through Compassion</h3>
          </div>

          <div className="text">
            <p>
              Abigail believes deeply that everyone deserves access to thoughtful, high-quality
              care, care that is grounded in empathy, driven by collaboration, and centered on
              healing.
              <br />
              <br />
              <span>
                Her mission is to empower each client to reclaim their health and thrive,
                guiding them through their healing journey with both expertise and heart.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="wrapper">
          <div className="title">
            <h3>Education and Credentials</h3>
          </div>

          <div className="edu">
            <ul>
              {education.map((item) => (
                <li key={item.label}>
                  <img src={assetPath("disc.png")} alt="disc" />{" "}
                  <span style={{ fontWeight: 600 }}>{item.label}</span>
                  <br />
                  {item.detail}
                </li>
              ))}
            </ul>

            <div className="abtport">
              <img src={assetPath("aboutport.png")} alt="Abigail" />
            </div>
          </div>
          <br />

          <p>"Helping individuals heal and thrive is not just what Abigail does, it's who she is."</p>
        </div>
      </section>

      <section className="team-section">
        <div className="wrapper">
          <div className="title">
            <h1>Meet the Team</h1>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img
                src={assetPath("katie-johnson.jpeg")}
                alt="Katie Johnson, Office Manager and Medical Assistant"
              />
            </div>

            <div className="team-content">
              <p className="team-kicker">The face behind the phone</p>
              <h4>Katie Johnson</h4>
              <p className="team-role">Office Manager & Medical Assistant</p>

              <p>
                Katie Johnson is a dedicated office manager and medical assistant to Abigail
                Asumadu-Mensah, with six years of experience in medical office settings.
                Passionate about supporting others, she strives to provide exceptional care
                through compassion, integrity, and a welcoming approach.
              </p>

              <p>
                Katie believes that seeking help is a sign of strength, and she works to create
                an environment where patients feel understood and supported. As a mother of a
                special needs son, she brings a personal perspective and deep empathy to her
                work, seeing each interaction as an opportunity to give back to the community.
              </p>

              <p>
                Originally from Richmond Hill, Georgia, she has since made Virginia her home,
                where she continues to make a positive impact in the lives of those she serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PrimaryCta />
    </PageLayout>
  );
}
