"use client";

import { useEffect, useState } from "react";

// Auto-pulls your public repositories from GitHub's public API.
// No API key needed. Unauthenticated calls are rate-limited (60/hour per IP),
// which is far more than a portfolio visitor will ever use.
const GITHUB_USER = "Saral2810";

// Repos you never want listed here (already featured above, or throwaways).
// Add lowercase repo names to hide them.
const HIDE = ["saral2810", "saral_portfolio"];

export default function GithubRepos() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub request failed");
        return res.json();
      })
      .then((data) => {
        if (!alive) return;
        const cleaned = data
          .filter((r) => !r.fork && !HIDE.includes(r.name.toLowerCase()))
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(cleaned);
      })
      .catch(() => alive && setError(true));

    return () => {
      alive = false;
    };
  }, []);

  if (error) {
    return (
      <p className="lede" style={{ marginTop: 8 }}>
        Couldn&apos;t load repositories right now. Browse them directly on{" "}
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--signal)" }}
        >
          GitHub
        </a>
        .
      </p>
    );
  }

  if (repos === null) {
    return (
      <p className="lede" style={{ marginTop: 8, fontFamily: "var(--mono)", fontSize: 13 }}>
        Loading repositories…
      </p>
    );
  }

  if (repos.length === 0) {
    return (
      <p className="lede" style={{ marginTop: 8 }}>
        No public repositories to show yet.
      </p>
    );
  }

  return (
    <div className="repos">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo"
        >
          <div className="repo-head">
            <h3 className="repo-name">{repo.name}</h3>
            <span className="repo-go" aria-hidden="true">
              ↗
            </span>
          </div>
          {repo.description ? (
            <p className="repo-desc">{repo.description}</p>
          ) : (
            <p className="repo-desc repo-desc-muted">No description provided.</p>
          )}
          <div className="repo-meta">
            {repo.language ? <span>{repo.language}</span> : null}
            {repo.stargazers_count > 0 ? <span>★ {repo.stargazers_count}</span> : null}
            <span>
              Updated{" "}
              {new Date(repo.pushed_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
