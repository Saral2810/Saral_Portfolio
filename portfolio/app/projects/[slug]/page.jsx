import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import ExhibitGallery from "../../../components/ExhibitGallery";
import { projects, experience } from "../../../lib/data";

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

  // Exhibit numbers continue after the experience pages.
  const index = experience.length + projects.findIndex((p) => p.slug === slug) + 1;

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
          {project.demo ? (
            <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          ) : null}
          {project.repo ? (
            <a
              className={project.demo ? "btn is-ghost" : "btn"}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          ) : null}
          <a className="btn is-ghost" href="#story">
            Story ↓
          </a>
        </div>
      </Reveal>

      {project.facts ? (
        <Reveal as="section" className="section">
          <dl className="contact-list">
            <div className="contact-row">
              <dt>My role</dt>
              <dd>{project.facts.role}</dd>
            </div>
            <div className="contact-row">
              <dt>Stack</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
            <div className="contact-row">
              <dt>Problem</dt>
              <dd>{project.facts.problem}</dd>
            </div>
            <div className="contact-row">
              <dt>Result</dt>
              <dd>{project.facts.result}</dd>
            </div>
          </dl>
        </Reveal>
      ) : null}

      <Reveal as="section" className="figures">
        {project.metrics.map((m) => (
          <div className="figure" key={m.label}>
            <b>{m.value}</b>
            <em>{m.label}</em>
          </div>
        ))}
      </Reveal>

      {project.metricNote ? (
        <p className="lede" style={{ marginTop: -32, fontSize: 15 }}>
          {project.metricNote}
        </p>
      ) : null}

      {project.pipeline ? (
        <Reveal as="section" className="section">
          <div className="section-head">
            <p className="eyebrow">Pipeline</p>
          </div>
          <ol className="pipeline">
            {project.pipeline.map((step, i) => (
              <li key={step}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
      ) : null}

      <Reveal as="section" className="section" id="story">
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

      {project.exhibits.length > 0 ? (
        <Reveal as="section" className="section">
          <div className="section-head">
            <p className="eyebrow">Exhibits</p>
            <h2 className="display">Output</h2>
          </div>
          <ExhibitGallery exhibits={project.exhibits} prefix={String(index)} />
        </Reveal>
      ) : null}
    </div>
  );
}
