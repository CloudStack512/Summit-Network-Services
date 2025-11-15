function generateQuote() {
  const copper = parseInt(document.getElementById('copper').value) || 0;
  const terms = parseInt(document.getElementById('terms').value) || 0;
  const distance = parseFloat(document.getElementById('distance').value) || 0;

  const copperRate = 20;
  const termRate = 15;
  const travel = Math.round(distance * 1.75);

  const total = copper * copperRate + terms * termRate + travel;

  const text = 
`Estimate Summary
Copper Tests: ${copper} × $${copperRate} = $${copper * copperRate}
Terminations: ${terms} × $${termRate} = $${terms * termRate}
Travel: $${travel}

Estimated Total: $${total}

(Exact pricing confirmed after site review.)`;

  document.getElementById('quoteResult').textContent = text;
}
