import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";
import { assetPath, servicesCards } from "../data/siteData";

export function ServicesPage() {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="wrapper">
          <div className="text">
            <h1>OUR EXPERTISE</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="wrapper">
          <h1 className="services-title">Overview</h1>
          <p className="services-intro">
            Mind-Body Psychiatry and Medical Services integrate comprehensive psychiatric care
            with medical management, recognizing the close interplay between mental health and
            physical health. This approach treats the whole person by addressing both
            psychological and medical factors that impact overall well-being.
          </p>

          <div className="categories-overview">
            <h1>Categories</h1>
            <ul>
              <li>
                <img src={assetPath("disc.png")} alt="disc" />
                <strong>Psychiatric Care</strong>
              </li>
              <li>
                <img src={assetPath("disc.png")} alt="disc" />
                <strong>Medical Services</strong>
              </li>
              <li>
                <img src={assetPath("disc.png")} alt="disc" />
                <strong>Weight-Loss Programs</strong>
              </li>
            </ul>
          </div>

          <div className="container">
            {servicesCards.map((service) => (
              <div className="service-card" key={service.title}>
                <img src={assetPath(service.image)} alt={service.alt} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrimaryCta />
    </PageLayout>
  );
}
