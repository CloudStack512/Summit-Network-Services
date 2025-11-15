function formatCurrency(n) {
  return "$" + n.toFixed(0);
}

function calculateQuote() {
  const racks = parseInt(document.getElementById("racks").value || "0", 10);
  const copper = parseInt(document.getElementById("copper").value || "0", 10);
  const labelDoc = parseInt(document.getElementById("labelDoc").value || "0", 10);
  const wifi = parseInt(document.getElementById("wifi").value || "0", 10);
  const miles = parseFloat(document.getElementById("miles").value || "0");

  // Simple model:
  // Rack cleanup: 750–2000 per rack
  const rackMin = racks * 750;
  const rackMax = racks * 2000;

  // Copper testing: 15–25 per run
  const copperMin = copper * 15;
  const copperMax = copper * 25;

  // Label/doc package: flat 400–1200 if selected
  const labelMin = labelDoc ? 400 : 0;
  const labelMax = labelDoc ? 1200 : 0;

  // WiFi: 300–800 if selected
  const wifiMin = wifi ? 300 : 0;
  const wifiMax = wifi ? 800 : 0;

  // Travel: 35 base + 1.25/mi beyond 25
  let travel = 35;
  if (miles > 25) {
    travel += (miles - 25) * 1.25;
  }

  const minTotal = rackMin + copperMin + labelMin + wifiMin + travel;
  const maxTotal = rackMax + copperMax + labelMax + wifiMax + travel;

  const el = document.getElementById("quoteResult");
  el.innerHTML = `
    <h3>Estimated Project Range</h3>
    <p>This is a rough planning range only. Final numbers come after a quick assessment.</p>
    <ul>
      <li><strong>Low estimate:</strong> ${formatCurrency(minTotal)}</li>
      <li><strong>High estimate:</strong> ${formatCurrency(maxTotal)}</li>
      <li><strong>Includes:</strong> rack cleanup, testing, and selected add‑ons.</li>
    </ul>
    <p style="font-size: 0.85rem; opacity: 0.8;">
      For a more accurate quote, send photos of your rack and a brief description of your environment.
    </p>
  `;
}
