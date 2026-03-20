export default async function handler(req, res) {
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqlL_YZewOD3rHLtsY43Fd6FZt-OolUVhSlqoIaDhMuo5AglZeOFvXdZ-cSAOTIR4kyHsxmOA52LLo/pub?gid=0&single=true&output=csv';
 
  try {
    const response = await fetch(CSV_URL);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sheet data' });
  }
}
 




