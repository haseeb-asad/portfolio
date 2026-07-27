import React from "react";

// /cv is rewritten to the PDF and served as an attachment (see next.config.js),
// so it is both the shareable link and this page's download target.
export const RESUME_DOWNLOAD = "/cv";
export const RESUME_FILE = "/static/resume/HaseebAsad_CV.pdf";
export const RESUME_UPDATED = "July 2026";

function Resume() {
  return (
    <div className="pt-16 pb-24 sm:pt-20 w-full text-center relative">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-6 relative">
          Resume
          <img
            className="sqD w-12 -top-6 -right-8 absolute"
            src="/static/doodles/skills/fillStar.svg"
            alt="Decorative star"
          />
        </h1>
        <p className="text-fun-gray text-lg sm:text-xl max-w-2xl mb-2">
          AI-First Senior Software Engineer at Khoros (IgniteTech). Full-stack
          across React/TypeScript and Java/GraphQL, with a backend and platform
          background.
        </p>
        <p className="text-fun-gray-medium text-sm mb-8">
          Last updated {RESUME_UPDATED}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={RESUME_DOWNLOAD}
            className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
          >
            Download PDF
          </a>
          <a
            href={RESUME_FILE}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-fun-gray-light border-2 rounded-full border-fun-pink-dark bg-bg hover:text-white hover:border-fun-pink transition-colors"
          >
            Open in New Tab
          </a>
        </div>

        <div className="w-full max-w-4xl rounded-2xl overflow-hidden border-2 border-fun-pink-dark bg-fun-pink-darkest">
          <object
            data={`${RESUME_FILE}#view=FitH`}
            type="application/pdf"
            className="w-full h-[80vh] min-h-[500px] hidden sm:block"
            aria-label="Haseeb Asad resume"
          >
            <PdfFallback />
          </object>

          {/* Mobile browsers mostly refuse to render embedded PDFs */}
          <div className="sm:hidden">
            <PdfFallback />
          </div>
        </div>
      </div>
    </div>
  );
}

function PdfFallback() {
  return (
    <div className="p-10 flex flex-col items-center">
      <p className="text-fun-gray mb-6">
        Your browser can&apos;t display the PDF inline.
      </p>
      <a
        href={RESUME_FILE}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer font-bold whitespace-nowrap px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
      >
        View the Resume
      </a>
    </div>
  );
}

export default Resume;
