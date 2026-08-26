"use client";

import { useCallback, useEffect, useState } from "react";

export default function ExhibitGallery({ exhibits, prefix = "1" }) {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);

  const step = useCallback(
    (delta) => {
      setOpen((current) => {
        if (current === null) return current;
        const next = (current + delta + exhibits.length) % exhibits.length;
        return next;
      });
    },
    [exhibits.length]
  );

  useEffect(() => {
    if (open === null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  if (!exhibits || exhibits.length === 0) return null;

  const label = (i) => `Exhibit ${prefix}.${i + 1}`;

  return (
    <>
      <div className="exhibits">
        {exhibits.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="exhibit"
            onClick={() => setOpen(i)}
            aria-label={`Enlarge ${label(i)} — ${item.caption}`}
          >
            <span className="exhibit-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.caption} loading="lazy" />
            </span>
            <span className="exhibit-num">{label(i)}</span>
            <span className="exhibit-cap">{item.caption}</span>
            <span className="exhibit-src">Source: {item.source}</span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={label(open)}
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close}>
            Close ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exhibits[open].src}
            alt={exhibits[open].caption}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-cap">
            <b>{label(open)}</b>
            {exhibits[open].caption} · Source: {exhibits[open].source}
            {exhibits.length > 1 ? " · Use ← → to move between exhibits" : ""}
          </p>
        </div>
      )}
    </>
  );
}
