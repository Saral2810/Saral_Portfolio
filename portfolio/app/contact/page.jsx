import Reveal from "../../components/Reveal";
import RevealPhone from "../../components/RevealPhone";
import EmailActions from "../../components/EmailActions";
import { profile } from "../../lib/data";

export const metadata = {
  title: "Contact — Saral Singhal",
  description: "Email, phone, LinkedIn, GitHub and résumé download.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">Contact</p>
        <h1 className="display">Get in touch</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          The fastest way to reach me is email — I reply within a day. Copy the address, or open a
          pre-filled Gmail message.
        </p>
        <div style={{ marginTop: 24 }}>
          <EmailActions />
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <dl className="contact-list">
          <div className="contact-row">
            <dt>Email</dt>
            <dd>{profile.email}</dd>
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
            <dt>Résumé</dt>
            <dd>
              <a href={profile.resume} download>
                Download PDF ↓
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
