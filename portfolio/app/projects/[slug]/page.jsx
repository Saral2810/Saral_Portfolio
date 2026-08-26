import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import ExhibitGallery from "../../../components/ExhibitGallery";
import { projects, profile } from "../../../lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.name} — Saral Singhal`, description: project.blurb };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug) + 3; // exhibits continue after experience

  return (
    <div className="page">
      <Link href="/projects" className="back">
        ← All projects
      </Link>

      <Reveal as="header" className="hero">
        <p className="eyebrow">{project.domain}</p>
        <h1 className="display">{project.name}</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          {project.blurb}
        </p>

        <div className="tags">
          {project.stack.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
            View source on GitHub
          </a>
          <a className="btn is-ghost" href={profile.resume} download>
            Download résumé
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="figures">
        {project.metrics.map((m) => (
          <div className="figure" key={m.label}>
            <b>{m.value}</b>
            <em>{m.label}</em>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
        </div>
        <div className="contribs">
          {project.detail.map((d) => (
            <div className="contrib" key={d.heading}>
              <h4>{d.heading}</h4>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Exhibits</p>
          <h2 className="display">Output</h2>
        </div>
        <ExhibitGallery exhibits={project.exhibits} prefix={String(index)} />
      </Reveal>
    </div>
  );
}
