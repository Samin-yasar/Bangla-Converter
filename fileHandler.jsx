import { extractTextFromPDF } from './pdfParser';
import { sanitizeInput } from './security';

export async function readFileContent(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'txt') {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(sanitizeInput(reader.result));
      reader.readAsText(file);
    });
  } else if (ext === 'pdf') {
    return await extractTextFromPDF(file);
  }
  return '';
}
