import Reveal from "../../components/Reveal";
import { certifications, leadership, documents, hobbies } from "../../lib/data";

export const metadata = {
  title: "Achievements — Saral Singhal",
  description: "Certifications, leadership, recommendation letter and interests.",
};

export default function AchievementsPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">Achievements</p>
        <h1 className="display">Credentials & beyond</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Certifications, the teams I&apos;ve led, a recommendation from my time at Deloitte, and what
          I get up to away from the screen.
        </p>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Certifications & achievements</p>
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
          <p className="eyebrow">Recommendation</p>
        </div>
        {documents.map((doc) => (
          <a key={doc.label} href={doc.url} target="_blank" rel="noreferrer" className="doc-card">
            <div>
              <p className="doc-label">{doc.label}</p>
              <p className="doc-issuer">{doc.issuer}</p>
            </div>
            <span className="doc-go" aria-hidden="true">
              Read letter ↗
            </span>
          </a>
        ))}
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Leadership</p>
        </div>
        <div className="contribs">
          {leadership.map((item) => (
            <div className="contrib" key={item.role}>
              <h4>{item.role}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">Off the clock</p>
          <h2 className="display">Hobbies</h2>
        </div>
        <p className="lede">{hobbies}</p>
      </Reveal>
    </div>
  );
}
