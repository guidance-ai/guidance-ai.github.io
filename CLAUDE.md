# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for the Guidance project, built with Astro 4.16.10. The site displays documentation, benchmarks, and Jupyter notebooks in an interactive format.

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production (includes TypeScript checking)
npm run build

# Preview production build
npm run preview
```

## Architecture Overview

The project uses Astro's file-based routing with React components for interactivity:

- **Pages** (`src/pages/`): Each `.astro` file becomes a route
  - `index.astro`: Landing page with project overview
  - `docs.astro`: Documentation viewer that displays Jupyter notebooks via iframe
  - `benchmark.astro`: Performance benchmarks with Recharts visualizations
  
- **Components**: Split between static Astro components and interactive React components
  - `src/components/astro/`: Static components like navigation and layout elements
  - `src/components/react/`: Interactive components like DocumentationLayout, NotebookSelector
  
- **Notebook System**: 
  - HTML notebooks are stored in `public/notebooks/`
  - Notebooks are displayed via iframe in the docs page
  - The DocumentationLayout component handles notebook navigation and display

## Key Implementation Details

1. **Dark Mode**: Implemented via CSS custom properties in `src/styles/dark-theme.css`. The site respects system preferences and can be toggled programmatically.

2. **Notebook Display**: The docs page uses an iframe to display pre-converted HTML notebooks. The NotebookSelector component manages navigation between different notebooks.

3. **Styling**: Uses Tailwind CSS with custom configuration. Custom fonts include Lato for sans-serif and various monospace fonts.

4. **TypeScript**: The project uses TypeScript with Astro's strict preset. Type checking happens during build.

## Development Workflow

When working on this codebase:

1. For new documentation pages, add `.astro` files to `src/pages/`
2. For new components, decide if they need interactivity:
   - Static content → Astro component in `src/components/astro/`
   - Interactive content → React component in `src/components/react/`
3. Notebooks should be converted to HTML and placed in `public/notebooks/`
4. Always run `npm run build` before committing to ensure TypeScript types are correct

## Current State

The project is on the `nking-rebranding` branch, indicating ongoing rebranding work. Recent commits show work on dark mode, token healing notebooks, and style updates to the Jupyter template.