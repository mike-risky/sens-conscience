import React, { useState } from "react";
import { FileDown, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function ExportPdfButton() {
  const [busy, setBusy] = useState(false);

  const handleExport = async () => {
    if (busy) return;
    setBusy(true);
    const hideEls = Array.from(document.querySelectorAll("[data-export-hide]"));
    hideEls.forEach((el) => (el.style.visibility = "hidden"));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    try {
      const canvas = await html2canvas(document.body, {
        scale: Math.min(window.devicePixelRatio || 1, 2),
        useCORS: true,
        backgroundColor: "#F8F6F1",
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW;
      const imgH = (canvas.height * imgW) / canvas.width;
      let heightLeft = imgH;
      let position = 0;
      pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
      heightLeft -= pageH;
      while (heightLeft > 0) {
        position -= pageH;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
        heightLeft -= pageH;
      }
      pdf.save("sens-et-conscience.pdf");
    } catch (err) {
      console.error("Export PDF visuel échoué, ouverture de l'impression", err);
      window.print();
    } finally {
      hideEls.forEach((el) => (el.style.visibility = ""));
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={busy}
      aria-label="Exporter le site en PDF"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F6F1]/85 backdrop-blur-md border border-[#DED8CE] shadow-lg shadow-[#292824]/15 text-[#292824] font-body text-sm hover:bg-[#F8F6F1] transition-all duration-300 disabled:opacity-60"
      data-export-hide
    >
      {busy ? <Loader2 size={16} className="animate-spin" /> : <FileDown size={16} />}
      <span className="hidden sm:inline">{busy ? "Génération…" : "Exporter en PDF"}</span>
    </button>
  );
}