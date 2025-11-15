function formatCurrency(n) {
  return "$" + n.toFixed(2);
}

function recalcTotals() {
  const rows = document.querySelectorAll(".item-row");
  let subtotal = 0;

  rows.forEach(row => {
    const qtyInput = row.querySelector(".qty");
    const rateInput = row.querySelector(".rate");
    const lineCell = row.querySelector(".line-total");

    const qty = parseFloat(qtyInput.value) || 0;
    const rate = parseFloat(rateInput.value) || 0;
    const line = qty * rate;
    subtotal += line;

    lineCell.textContent = formatCurrency(line);
  });

  const extraFeesInput = document.getElementById("extraFees");
  const extra = parseFloat(extraFeesInput.value) || 0;
  const grand = subtotal + extra;

  document.getElementById("subtotal").textContent = formatCurrency(subtotal);
  document.getElementById("grandTotal").textContent = formatCurrency(grand);
}

function addRow() {
  const tbody = document.getElementById("itemsBody");
  const tr = document.createElement("tr");
  tr.className = "item-row";
  tr.innerHTML = `
    <td><input type="text" class="desc" placeholder="Service description"></td>
    <td><input type="number" class="qty" min="0" step="1" value="1"></td>
    <td><input type="number" class="rate" min="0" step="0.01" value="0"></td>
    <td class="line-total">$0.00</td>
    <td class="no-print">
      <button type="button" class="btn-icon" onclick="removeRow(this)">✕</button>
    </td>
  `;
  tbody.appendChild(tr);
}

function removeRow(button) {
  const row = button.closest("tr");
  const tbody = document.getElementById("itemsBody");
  if (tbody.children.length > 1) {
    row.remove();
    recalcTotals();
  }
}

document.addEventListener("input", function(e) {
  if (e.target.classList.contains("qty") || e.target.classList.contains("rate") || e.target.id === "extraFees") {
    recalcTotals();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  recalcTotals();
});
