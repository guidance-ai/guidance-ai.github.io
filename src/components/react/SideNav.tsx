import NavAccordion from "./NavAccordion";
import {
  RocketRegular,
  SpatulaSpoonRegular,
  BookRegular,
  CodeRegular,
} from "@fluentui/react-icons";
import { notebookNames, type NotebookName } from "../../utils/constants";
import React from "react";
import NotebookLinks from "./NotebookLinks";
import "../../styles/dark-theme.css";

// Maps the link text visible on the page to the name of the notebook
// unknown_notebook means we haven't written that notebook yet
type NotebookLink = Record<string, NotebookName | "unknown_notebook">;

function SideNav({
  onNavigate,
  activeHref,
  setActiveHref,
}: {
  onNavigate: (src: string, href: string) => void; // updated signature
  activeHref: string;
  setActiveHref: React.Dispatch<React.SetStateAction<string>>;
}) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const rocketIcon = (
    <div className="rounded-lg bg-[var(--bg-secondary)] p-1">
      <RocketRegular primaryFill="#FA64A6" fontSize={20} />
    </div>
  );
  const spatulaIcon = (
    <div className="rounded-lg bg-[var(--bg-secondary)] p-1">
      <SpatulaSpoonRegular primaryFill="#A855F7" fontSize={20} />
    </div>
  );
  const bookIcon = (
    <div className="rounded-lg bg-[var(--bg-secondary)] p-1">
      <BookRegular primaryFill="#3B82F6" fontSize={20} />
    </div>
  );
  const codeIcon = (
    <div className="rounded-lg bg-[var(--bg-secondary)] p-1">
      <CodeRegular primaryFill="#22C55E" fontSize={20} />
    </div>
  );


  const quickStartLinks: NotebookLink = {
    "Introduction to Guidance": "intro_to_guidance",
    // "First Steps": "unknown_notebook",
    // "Installation Guide": "unknown_notebook",
    // "Basic Usage": "unknown_notebook",
    // "OpenAI": "unknown_notebook",
    // "Anthropic": "unknown_notebook",
    // "Gemini": "unknown_notebook",
    // "Transformers": "unknown_notebook",
    // "Phi-3.5-mini": "unknown_notebook",
    // "Llama-3.2-8B": "unknown_notebook",
    // "llama.cpp": "unknown_notebook",
    // "Qwen-2": "unknown_notebook",
  };

  const tutorialLinks: NotebookLink = {
    // "Constrained Decoding": "unknown_notebook",
    "Art of Prompt Design: Clear Syntax": "use_clear_syntax",
    "Art of Prompt Design: Prompt Boundaries and Token Healing": "token_healing",
    // "Guidance Acceleration Deep Dive": "guidance_acceleration",
    // "Multimodal Inputs": "unknown_notebook"
  };

  const cookbookLinks: NotebookLink = {
    // "HTML Scraping": "unknown_notebook",
    // "Building Your First Website": "html_cookbook",
    // "Multimodal Test": "multimodal_examples",
    // "Codebase Chat": "code_chat",
    // "Wordle Solver": "unknown_notebook",
    // "Multiple Choice Questions": "unknown_notebook",
    // "Perplexity in JSON": "Perplexity_in_JSON",
    // "Using Constraints": "unknown_notebook",
    // "Tool Integration": "unknown_notebook",
  };

  const apiLinks: NotebookLink = {
    "OpenAI": "unknown_notebook",
    "Anthropic": "unknown_notebook",
    "Gemini": "unknown_notebook",
    "Transformers": "unknown_notebook",
  };

  // Check whether the current path matches a link in each section
  const isInQuickStart = Object.values(quickStartLinks).some(nb => `/docs/${nb}` === currentPath);
  const isInTutorials = Object.values(tutorialLinks).some(nb => `/docs/${nb}` === currentPath);
  const isInCookbook = Object.values(cookbookLinks).some(nb => `/docs/${nb}` === currentPath);
  const isInApi = Object.values(apiLinks).some(nb => `/docs/${nb}` === currentPath);

  return (
    <div className="w-64 bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-md h-full p-4 overflow-y-auto flex flex-col">
      <NavAccordion iconComponent={rocketIcon} title="Quick Start" defaultOpen={isInQuickStart}>
        <NotebookLinks
        links={quickStartLinks}
        onNavigate={onNavigate}
        activeHref={activeHref}
        setActiveHref={setActiveHref}
        />
      </NavAccordion>

      <div className="mt-3">
        <NavAccordion iconComponent={bookIcon} title="Tutorials" defaultOpen={isInTutorials}>
          <NotebookLinks
          links={tutorialLinks}
          onNavigate={onNavigate}
          activeHref={activeHref}
          setActiveHref={setActiveHref}
          />
        </NavAccordion>
      </div>

      <div className="mt-3">
        <NavAccordion iconComponent={spatulaIcon} title="Cookbook" defaultOpen={isInCookbook}>
          <NotebookLinks
          links={cookbookLinks}
          onNavigate={onNavigate}
          activeHref={activeHref}
          setActiveHref={setActiveHref}
          />
        </NavAccordion>
      </div>

      <div className="mt-3">
        <NavAccordion iconComponent={codeIcon} title="API Reference" defaultOpen={isInApi}>
          <NotebookLinks
          links={apiLinks}
          onNavigate={onNavigate}
          activeHref={activeHref}
          setActiveHref={setActiveHref}
          />
          {/* <a href="https://guidance-ai.github.io/llguidance/llg-go-brrr" target="_none">llguidance</a> */}
        </NavAccordion>
      </div>
    </div>
  );
}

export default SideNav;