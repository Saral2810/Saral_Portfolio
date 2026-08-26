"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ProjectIndex({ projects }) {
  const domains = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.domain)))],
    [projects]
  );
  const [active, setActive] = useState("All");

  const shown = active === "All" ? projects : projects.filter((p) => p.domain === active);

  return (
    <>
      <div className="filters">
        {domains.map((domain) => (
          <button
            key={domain}
            type="button"
            className="filter"
            aria-pressed={active === domain}
            onClick={() => setActive(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="entries">
        {shown.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="entry">
            <div className="entry-side">
              {project.domain}
              <br />
              {project.metrics[0].value}
            </div>
            <div>
              <h3 className="entry-title">{project.name}</h3>
              <p className="entry-sub">{project.stack.slice(0, 4).join(" · ")}</p>
              <p className="entry-body">{project.blurb}</p>
            </div>
            <div className="entry-go" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="lede" style={{ marginTop: 24 }}>
          Nothing filed under {active} yet. Pick another filter.
        </p>
      )}
    </>
  );
}
