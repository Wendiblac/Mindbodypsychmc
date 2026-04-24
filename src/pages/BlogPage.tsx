import { PageLayout } from "../components/PageLayout";
import { PrimaryCta } from "../components/PrimaryCta";
import { articles } from "../data/siteData";

export function BlogPage() {
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

      <PrimaryCta />
    </PageLayout>
  );
}
