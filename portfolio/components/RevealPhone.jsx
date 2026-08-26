"use client";

import { useState } from "react";

// The number is stored obfuscated so page-source scrapers don't pick it up.
// It is assembled only after a real click.
const PARTS = ["+91", "80009", "38425"];

export default function RevealPhone() {
  const [shown, setShown] = useState(false);

  if (!shown) {
    return (
      <button type="button" className="reveal-btn" onClick={() => setShown(true)}>
        Show phone number
      </button>
    );
  }

  const pretty = `${PARTS[0]} ${PARTS[1]} ${PARTS[2]}`;
  const dial = `tel:${PARTS.join("")}`;

  return <a href={dial}>{pretty}</a>;
}
