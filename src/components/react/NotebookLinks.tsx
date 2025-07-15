import React from "react";
import { type NotebookName } from "../../utils/constants";

type NotebookLink = Record<string, NotebookName | "unknown_notebook">;

export default function NotebookLinks({
  links,
  onNavigate,
  activeHref,
  setActiveHref,
}: {
  links: NotebookLink;
  onNavigate: (src: string, href: string) => void;// Updated signature
  activeHref: string;
  setActiveHref: (href: string) => void;
}) {

  const handleClick = (e: React.MouseEvent, nbName: string) => {
    e.preventDefault();
    const newSrc = `/notebooks/${nbName}.html`;            // iframe src
    const newHref = `/docs?notebook=${nbName}`;             // URL href
    onNavigate(newSrc, newHref);                                // pass both
    setActiveHref(newHref);                                     // update activeHref for highlighting
  };

  return (
    <div className="flex flex-col gap-1 mt-2">
      {Object.entries(links).map(([name, nbName]) => {
        if (nbName === "unknown_notebook") return null;
        const href = `/docs?notebook=${nbName}`; // updated href to use query param
        console.log(" Comparing activeHref and href", { activeHref, href });
        const isActive = activeHref === href;

        return (
          <button
            key={name}
            onClick={(e) => handleClick(e, nbName)}
            className={`text-sm px-2 py-1 text-left rounded-md transition-colors w-full ${
              isActive
                ? "bg-[var(--bg-hover)] text-[var(--text-selected)] font-medium"
                : "text-[var(--text-secondary)] hover:text-[var(--accent-color)] "
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
