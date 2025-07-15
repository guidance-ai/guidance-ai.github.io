import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import "../../styles/dark-theme.css"

const DocsLayout: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState("/notebooks/intro_to_guidance.html");
  const [activeHref, setActiveHref] = useState("/docs/intro_to_guidance");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const notebook = urlParams.get("notebook");
    if (notebook) {
      setIframeSrc(`/notebooks/${notebook}.html`);
      setActiveHref(`/docs?notebook=${notebook}`);
    }
  }, []);

  const handleNotebookSwitch = (src: string, href: string) => {
    setIframeSrc(src);
    setActiveHref(href);
    window.history.pushState(null, "", href);
  };

  return (
    <div className="flex flex-1 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <SideNav
        onNavigate={handleNotebookSwitch}
        activeHref={activeHref}
        setActiveHref={setActiveHref}
      />
      <main className="flex-1 flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
        <div className="flex-1 p-4 overflow-hidden">
          <iframe
            id="notebook-frame"
            className="w-full h-full border-none block"
            src={iframeSrc}
            title="Notebook Preview"
          ></iframe>
        </div>
      </main>
    </div>
  );
};
export default DocsLayout;