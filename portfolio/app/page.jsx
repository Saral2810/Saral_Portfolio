import Link from "next/link";
import Reveal from "../components/Reveal";
import { profile, marquee, experience, projects } from "../lib/data";

export default function Home() {
  return (
    <div className="page">
      <Reveal as="section" className="hero">
        <p className="eyebrow">Portfolio · Updated July 2026</p>
        <h1 className="display">
          Saral Singhal
        </h1>
        <p className="lede" style={{ marginTop: 18 }}>
          {profile.tagline}
        </p>

        <div className="hero-meta">
          <span>{profile.education.degree}</span>
          <span>{profile.education.school}, {profile.education.campus}</span>
          <span>CGPA {profile.education.cgpa}</span>
          <span>{profile.education.span}</span>
        </div>

        <div className="hero-actions">
          <a className="btn" href={profile.resume} download>
            Download résumé
          </a>
          <a className="btn is-ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn is-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="figures">
        {marquee.map((item) => (
          <div className="figure" key={item.label}>
            <b>{item.value}</b>
            <em>{item.label}</em>
            <small>{item.note}</small>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">01 — Experience</p>
          <h2 className="display">Where the work has been</h2>
          <p className="lede" style={{ marginTop: 12 }}>
            Each engagement has its own page, with the deliverables filed as captioned exhibits.
          </p>
        </div>

        <div className="entries">
          {experience.map((role) => (
            <Link key={role.slug} href={`/experience/${role.slug}`} className="entry">
              <div className="entry-side">
                {role.span}
                <br />
                {role.location}
              </div>
              <div>
                <h3 className="entry-title">{role.org}</h3>
                <p className="entry-sub">
                  {role.title} · {role.team}
                </p>
                <p className="entry-body">{role.summary}</p>
              </div>
              <div className="entry-go" aria-hidden="true">
                →
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">02 — Projects</p>
          <h2 className="display">Built on my own time</h2>
        </div>

        <div className="entries">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="entry">
              <div className="entry-side">
                {project.domain}
                <br />
                {project.metrics[0].value} {project.metrics[0].label}
              </div>
              <div>
                <h3 className="entry-title">{project.name}</h3>
                <p className="entry-sub">{project.stack.join(" · ")}</p>
                <p className="entry-body">{project.blurb}</p>
              </div>
              <div className="entry-go" aria-hidden="true">
                →
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
