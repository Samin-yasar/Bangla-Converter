import React from 'react';
import { readFileContent } from './fileHandler';

export default function DropZone({ onFileRead }) {
  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const content = await readFileContent(file);
      onFileRead(content);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        margin: '1rem 0', padding: '1rem', border: '2px dashed #3b82f6', borderRadius: '10px',
        textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)'
      }}
    >
      📂 Drag & Drop .txt or .pdf file here
    </div>
  );
}
