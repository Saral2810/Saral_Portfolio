import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import ExhibitGallery from "../../../components/ExhibitGallery";
import { experience, profile } from "../../../lib/data";

export function generateStaticParams() {
  return experience.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const role = experience.find((r) => r.slug === slug);
  if (!role) return {};
  return { title: `${role.org} — Saral Singhal`, description: role.summary };
}

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const role = experience.find((r) => r.slug === slug);
  if (!role) notFound();

  const index = experience.findIndex((r) => r.slug === slug) + 1;

  return (
    <div className="page">
      <Link href="/experience" className="back">
        ← All engagements
      </Link>

      <Reveal as="header" className="hero">
        <p className="eyebrow">
          {role.span} · {role.location}
        </p>
        <h1 className="display">{role.org}</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
            {role.title}, {role.team}.
          </strong>{" "}
          {role.summary}
        </p>
        <div className="tags">
          {role.stack.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="tso">
          <div className="tso-row">
            <h4>The task</h4>
            <p>{role.task}</p>
          </div>
          <div className="tso-row">
            <h4>How I solved it</h4>
            <p>{role.solution}</p>
          </div>
          <div className="tso-row">
            <h4>The outcome</h4>
            <p>{role.outcome}</p>
          </div>
        </div>
      </Reveal>

      {role.exhibits.length > 0 ? (
        <Reveal as="section" className="section">
          <div className="section-head">
            <p className="eyebrow">Exhibits</p>
            <h2 className="display">From the engagement</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Click any exhibit to enlarge. Client-confidential material is redacted or reconstructed.
            </p>
          </div>
          <ExhibitGallery exhibits={role.exhibits} prefix={String(index)} />
        </Reveal>
      ) : null}

      <Reveal as="section" className="section">
        <div className="hero-actions" style={{ marginTop: 0 }}>
          <Link className="btn" href="/contact">
            Ask me about this work
          </Link>
          <a className="btn is-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            Verify on LinkedIn
          </a>
        </div>
      </Reveal>
    </div>
  );
}
