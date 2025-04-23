export function convertText(text, type) {
  switch (type) {
    case 'bijoyToUnicode':
      return text.replace(/\bshomoshar\b/g, 'সমস্যার');
    case 'unicodeToBijoy':
      return text.replace(/সমস্যার/g, 'shomoshar');
    case 'ansiToUnicode':
      return text.replace(/\bami\b/g, 'আমি');
    case 'unicodeToAnsi':
      return text.replace(/আমি/g, 'ami');
    case 'avroToBijoy':
      return text.replace(/ami/g, 'Avro→Bijoy');
    default:
      return text;
  }
}
