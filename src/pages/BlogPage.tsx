import { useState } from "react";
import { CalendlyModal } from "../components/CalendlyModal";
import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";
import { articles } from "../data/siteData";

export function BlogPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="wrapper">
          <div className="text">
            <h1>BLOG</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="wrapper">
          {articles.map((article) => (
            <div className="blog-card" key={article.slug}>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <a href={article.href} className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      <PrimaryCta onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </PageLayout>
  );
}
