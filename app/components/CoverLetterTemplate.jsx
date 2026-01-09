"use client";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import toast, { Toaster } from "react-hot-toast";

export default function CoverLetterTemplate({ text }) {
  const letterRef = useRef(null);
  const [downloadNotice, setDownloadNotice] = useState("");

  const handleDownloadPdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const marginX = 15;
    let cursorY = 20;
    const lineHeight = 7;
    const pageHeight = doc.internal.pageSize.height;

    doc.setFont("Times", "Normal");
    doc.setFontSize(11);

    const paragraphs = (text || "").split(/\n+/).filter(Boolean);

    paragraphs.forEach((p) => {
      const lines = doc.splitTextToSize(p, 120);

      if (cursorY + lines.length * lineHeight > pageHeight - 10) {
        doc.addPage();
        cursorY = 10;
      }

      doc.text(lines, marginX, cursorY);
      cursorY += lines.length * lineHeight + 4;
    });

    doc.save("CoverLetter.pdf");
    setDownloadNotice("Saved as CoverLetter.pdf");
    setTimeout(() => setDownloadNotice(""), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
<div className="my-5 flex gap-3 flex-wrap">
        <button
          onClick={handleDownloadPdf}
          className="px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition"
        >
          Download PDF
        </button>

        <button
          onClick={() => {
            navigator.clipboard.writeText(text || "");
            toast.success("Letter Copied!!");
          }}
          className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 border border-slate-300/25 cursor-pointer"
        >
          Copy
        </button>

        <button
          onClick={() => {
            const w = window.open("", "_blank");
            if (!w) return;
            w.document.write(
              `<html><head><title>Cover Letter</title></head><body>${letterRef.current.innerHTML}</body></html>`
            );
            w.document.close();
            w.focus();
            w.print();
            w.close();
          }}
          className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 border border-slate-300/25 cursor-pointer"
        >
          Print
        </button>

        {downloadNotice && (
          <span className="text-sm text-gray-600 self-center">
            {downloadNotice}
          </span>
        )}
      </div>
      <div
        ref={letterRef}
        className="w-[210mm] max-w-full bg-white shadow-sm p-10 border border-gray-200 rounded-md print:w-auto print:border-0 print:shadow-none border-l-4 border-l-cyan-500"
        >
        <div className="font-serif text-slate-900 leading-8 text-[1rem]">
          {(text || "")
            .split(/\n+/)
            .filter(Boolean)
            .map((p, i) => (
              <p key={i} className="mb-4 whitespace-pre-wrap">
                {p}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
