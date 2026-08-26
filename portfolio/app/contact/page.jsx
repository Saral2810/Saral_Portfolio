import Reveal from "../../components/Reveal";
import RevealPhone from "../../components/RevealPhone";
import { profile } from "../../lib/data";

export const metadata = {
  title: "Contact — Saral Singhal",
  description: "Email, phone, LinkedIn, GitHub and résumé download.",
};

const SUBJECT = encodeURIComponent("Opportunity — Saral Singhal");

export default function ContactPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">04 — Contact</p>
        <h1 className="display">Get in touch</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Email is fastest — I read everything and reply within a day. Happy to walk through any of
          the exhibits on this site, or send the underlying work where it isn&apos;t confidential.
        </p>
        <div className="hero-actions">
          <a className="btn" href={`mailto:${profile.email}?subject=${SUBJECT}`}>
            Write to me
          </a>
          <a className="btn is-ghost" href={profile.resume} download>
            Download résumé
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <dl className="contact-list">
          <div className="contact-row">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}?subject=${SUBJECT}`}>{profile.email}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>Phone</dt>
            <dd>
              <RevealPhone />
            </dd>
          </div>
          <div className="contact-row">
            <dt>LinkedIn</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/saral-singhal
              </a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>GitHub</dt>
            <dd>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/Saral2810
              </a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </Reveal>
    </div>
  );
}
