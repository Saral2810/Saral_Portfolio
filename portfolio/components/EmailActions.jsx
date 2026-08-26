"use client";

import { useState } from "react";

const EMAIL = "saralsinghal2810@gmail.com";
const SUBJECT = encodeURIComponent("Opportunity — Saral Singhal");
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${SUBJECT}`;

export default function EmailActions() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (rare) — fall back to selecting nothing; the Gmail
      // button and the plain address below still work.
      setCopied(false);
    }
  };

  return (
    <div className="email-actions">
      <button type="button" className="btn" onClick={copy}>
        {copied ? "Email copied ✓" : "Copy email"}
      </button>
      <a className="btn is-ghost" href={GMAIL} target="_blank" rel="noreferrer">
        Open in Gmail
      </a>
    </div>
  );
}
