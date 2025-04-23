export function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="container">
      <h1>Bijoy ⇄ Unicode Converter</h1>
      <textarea id="input" placeholder="Type or paste Bijoy or Unicode text here..."></textarea>
      <div class="buttons">
        <button onclick="window.convertToUnicode()">Bijoy → Unicode</button>
        <button onclick="window.convertToBijoy()">Unicode → Bijoy</button>
      </div>
      <textarea id="output" placeholder="Converted text will appear here..."></textarea>
    </div>
  `;

  window.convertToUnicode = () => {
    const input = document.getElementById('input').value;
    document.getElementById('output').value = bijoyToUnicode(input);
  };

  window.convertToBijoy = () => {
    const input = document.getElementById('input').value;
    document.getElementById('output').value = unicodeToBijoy(input);
  };
}

function bijoyToUnicode(text) {
  return text.replace(/Av/g, 'আ').replace(/A/g, 'অ');
}

function unicodeToBijoy(text) {
  return text.replace(/আ/g, 'Av').replace(/অ/g, 'A');
}
