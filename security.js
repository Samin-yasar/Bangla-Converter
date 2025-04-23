export function sanitizeInput(text) {
  return text.replace(/[<>]/g, '');
}
