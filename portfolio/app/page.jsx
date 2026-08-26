import Link from "next/link";
import Reveal from "../components/Reveal";
import { profile, experience, projects, skillGroups } from "../lib/data";

export default function About() {
  return (
    <div className="page">
      <Reveal as="section" className="hero">
        <p className="eyebrow">About · {profile.role}</p>

        <div className="about-top">
          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt="Saral Singhal" />
          </div>
          <div>
            <h1 className="display">{profile.name}</h1>
            <p className="lede" style={{ marginTop: 14 }}>
              {profile.tagline}
            </p>
            <div className="hero-meta">
              <span>{profile.education.degree}</span>
              <span>
                {profile.education.school}, {profile.education.campus}
              </span>
              <span>CGPA {profile.education.cgpa}</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn" href={profile.resume} download>
            Download résumé
          </a>
          <Link className="btn is-ghost" href="/contact">
            Get in touch
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="section prose">
        {profile.about.map((para, i) => (
          <p key={i} style={{ marginBottom: 18 }}>
            {para}
          </p>
        ))}
      </Reveal>

      <Reveal as="section" className="section">
        <div className="vision">
          <p className="eyebrow">Vision for age 40</p>
          <p className="vision-text">{profile.vision}</p>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">What I work with</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-block" key={group.group}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="display">Where the work has been</h2>
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
          <p className="eyebrow">Projects</p>
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
