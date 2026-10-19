"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "../lib/data";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Rail() {
  const pathname = usePathname();

  return (
    <nav className="rail" aria-label="Sections">
      <Link href="/" className="rail-mark">
        Saral Singhal
        <span>{profile.role}</span>
      </Link>

      <div className="rail-nav">
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={"rail-link" + (isActive(pathname, item.href) ? " is-active" : "")}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
          >
            <i>{String(i + 1).padStart(2, "0")}</i>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="rail-foot">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={profile.resume} download>
          Résumé (PDF) ↓
        </a>
      </div>
    </nav>
  );
}

export function TopBar() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <Link href="/" className="topbar-mark">
        Saral Singhal
      </Link>
      <nav className="topbar-nav" aria-label="Sections">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={"topbar-link" + (isActive(pathname, item.href) ? " is-active" : "")}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
