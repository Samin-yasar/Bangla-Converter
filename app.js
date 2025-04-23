import React, { useState, useEffect } from 'react';
import 'style.css';
import { sanitizeInput } from './security';
import { readFileContent } from './fileHandler';
import DropZone from './FileDropZone';
import { convertText } from './conversion';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [conversionType, setConversionType] = useState('bijoyToUnicode');

  useEffect(() => {
    setConvertedText(convertText(inputText, conversionType));
  }, [inputText, conversionType]);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Bijoy ⇄ Unicode Converter</h2>
      <DropZone onFileRead={setInputText} />
      <select value={conversionType} onChange={e => setConversionType(e.target.value)}>
        <option value="bijoyToUnicode">Bijoy ➜ Unicode</option>
        <option value="unicodeToBijoy">Unicode ➜ Bijoy</option>
        <option value="ansiToUnicode">ANSI ➜ Unicode</option>
        <option value="unicodeToAnsi">Unicode ➜ ANSI</option>
        <option value="avroToBijoy">Avro ➜ Bijoy</option>
      </select>
      <div className="textareas">
        <textarea
          placeholder="Enter or drop text here..."
          value={inputText}
          onChange={e => setInputText(sanitizeInput(e.target.value))}
        ></textarea>
        <textarea
          placeholder="Converted text"
          value={convertedText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
