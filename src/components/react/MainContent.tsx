import React, { useState } from "react";

interface Props {
  defaultSrc: string;
}

const MainContent: React.FC<Props> = ({ defaultSrc }) => {
  const [iframeSrc, setIframeSrc] = useState(defaultSrc);

  (window as any).updateNotebookIframe = (src: string) => {
    setIframeSrc(src);
  };

  return (
    <main className="flex-1 p-4">
      <iframe
        id="notebook-frame"
        className="w-full h-[800px] border rounded"
        src={iframeSrc}
        title="Notebook Preview"
      ></iframe>
      <h1 className="text-4xl font-bold text-gray-900 mt-6">Notebook Demos</h1>
      <p className="text-gray-600 max-w-2xl">
        Select a notebook below to preview different Guidance examples in action.
      </p>
    </main>
  );
};

export default MainContent;