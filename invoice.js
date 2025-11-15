function generateInvoice() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const invoiceNum = (document.getElementById("invoiceNumber").value || "SNS-0001").trim();
  const client = (document.getElementById("invoiceClient").value || "Client").trim();
  const total = (document.getElementById("invoiceTotal").value || "0").trim();

  doc.setFontSize(18);
  doc.text("Signal Network Services — Invoice", 20, 20);

  doc.setFontSize(11);
  doc.text(`Invoice #: ${invoiceNum}`, 20, 38);
  doc.text(`Client: ${client}`, 20, 48);
  doc.text(`Total Amount Due: $${total}`, 20, 58);

  doc.text("Payment Terms: Net 15", 20, 76);
  doc.text("Please remit payment via your usual method.", 20, 86);

  doc.text("Thank you for your business!", 20, 104);

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const link = document.getElementById("invoiceDownload");
  link.href = url;
  link.style.display = "inline-block";
}
