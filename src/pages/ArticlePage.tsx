import { CommentForm } from "../components/CommentForm";
import { PageLayout } from "../components/PageLayout";
import { PillButton } from "../components/PillButton";
import {
  articles,
  assetPath,
  externalLinks,
  type ArticleSlug,
} from "../data/siteData";

interface ArticlePageProps {
  slug: ArticleSlug;
}

export function ArticlePage({ slug }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Unknown article slug: ${slug}`);
  }

  return (
    <PageLayout headerButtonVariant="png" logoVariant="png" footerLogoVariant="png">
      <section className="hero-section">
        <div className="wrapper">
          <div className="text">
            <h1>BLOG</h1>
            <h3>Mind & Body Psychiatry Medical Services</h3>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="wrapper">
          <div className="content">
            <div className="first">
              <div className="title">
                <h1>{article.title}</h1>
              </div>

              <div className="details">
                <div className="image">
                  <img src={assetPath(article.image)} alt={article.title} />
                </div>

                <div>
                  {article.leadParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {article.bodyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CommentForm />

      <section className="cta-section">
        <div className="wrapper">
          <div className="cta">
            <p>Start your journey to total wellness today.</p>
            <PillButton
              className="consult-btn"
              href={externalLinks.booking}
              target="_blank"
              rel="noreferrer"
              variant="solid"
            >
              Consult Now
            </PillButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export function AnxietyDisordersPage() {
  return <ArticlePage slug="anxiety-disorders" />;
}

export function WeightLossMentalHealthPage() {
  return <ArticlePage slug="weight-loss-mental-health" />;
}

export function DiagnosingMoodDisordersPage() {
  return <ArticlePage slug="diagnosing-mood-disorders" />;
}

export function PostCovidRecoveryPage() {
  return <ArticlePage slug="post-covid-recovery" />;
}
