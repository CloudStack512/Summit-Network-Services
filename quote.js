function generateQuote() {
  const client = document.getElementById("clientName").value || "Client";
  const site = document.getElementById("siteLocation").value || "Site";
  const fiber = parseInt(document.getElementById("fiberRuns").value || "0", 10);
  const copper = parseInt(document.getElementById("copperRuns").value || "0", 10);
  const miles = parseInt(document.getElementById("miles").value || "0", 10);

  const fiberRate = 40;
  const copperRate = 25;
  const travelBase = 35;
  const travelRate = 1.25;

  const fiberTotal = fiber * fiberRate;
  const copperTotal = copper * copperRate;
  const travelTotal = travelBase + miles * travelRate;

  const subtotal = fiberTotal + copperTotal + travelTotal;
  const total = Math.round(subtotal);

  const out = `Estimate Summary
Client: ${client}
Site: ${site}

Estimated Line Items:
- Fiber certification (${fiber} strands): ${fiber} × $${fiberRate} = $${fiberTotal.toFixed(2)}
- Copper testing (${copper} runs): ${copper} × $${copperRate} = $${copperTotal.toFixed(2)}
- Travel estimate: $${travelTotal.toFixed(2)}

Subtotal (estimate): $${subtotal.toFixed(2)}
Estimated Total: $${total}

This is a rough estimate only. Final pricing will be confirmed after a brief scope review.`;

  document.getElementById("quoteOutput").textContent = out;
}
