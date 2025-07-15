// Base names of the notebooks in public/notebooks
export const notebookNames = [
  "intro_to_guidance",
  "token_healing",
  "use_clear_syntax"
] as const;

// Creates a type that is the union of all indexible noteobok names
// (kind of like a string enum)
export type NotebookName = typeof notebookNames[number];