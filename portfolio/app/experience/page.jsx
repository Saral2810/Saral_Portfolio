import Link from "next/link";
import Reveal from "../../components/Reveal";
import { experience } from "../../lib/data";

export const metadata = {
  title: "Experience — Saral Singhal",
  description: "Consulting internships at Deloitte and Ernst & Young.",
};

export default function ExperienceIndex() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">Experience</p>
        <h1 className="display">Engagements</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Two consulting internships in infrastructure and public-sector advisory. Open either for the
          full story — the task, how I solved it, and what came of it.
        </p>
      </Reveal>

      <Reveal>
        <div className="entries">
          {experience.map((role) => (
            <Link key={role.slug} href={`/experience/${role.slug}`} className="entry">
              <div className="entry-side">
                {role.period}
                <br />
                {role.span}
              </div>
              <div>
                <h2 className="entry-title">{role.org}</h2>
                <p className="entry-sub">
                  {role.title} · {role.team} · {role.location}
                </p>
                <p className="entry-body">{role.summary}</p>
                <div className="tags">
                  {role.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
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
