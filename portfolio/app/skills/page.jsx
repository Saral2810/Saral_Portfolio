import Reveal from "../../components/Reveal";
import { skillGroups, certifications, profile } from "../../lib/data";

export const metadata = {
  title: "Skills — Saral Singhal",
  description: "Languages, ML frameworks, analytics tooling and certifications.",
};

export default function SkillsPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">03 — Skills</p>
        <h1 className="display">Toolkit</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Grouped the way I actually use them: the modelling stack, the analysis stack, and the
          reporting stack that gets findings in front of a client.
        </p>
      </Reveal>

      <Reveal as="section">
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
          <p className="eyebrow">Certifications</p>
          <h2 className="display">Credentials</h2>
        </div>

        <ul className="certs">
          {certifications.map((cert) => (
            <li className="cert" key={cert.name}>
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noreferrer">
                  Verify ↗
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="display">{profile.education.school}</h2>
        </div>
        <dl className="contact-list">
          <div className="contact-row">
            <dt>Degree</dt>
            <dd>{profile.education.degree}</dd>
          </div>
          <div className="contact-row">
            <dt>Campus</dt>
            <dd>{profile.education.campus}</dd>
          </div>
          <div className="contact-row">
            <dt>CGPA</dt>
            <dd>{profile.education.cgpa}</dd>
          </div>
          <div className="contact-row">
            <dt>Years</dt>
            <dd>{profile.education.span}</dd>
          </div>
        </dl>
      </Reveal>
    </div>
  );
}
