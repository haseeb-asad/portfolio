import React from "react";
import { CODEX_LABS, PERSON } from "@/lib/site";

function CTA() {
  return (
    <div id="work-with-me" className="pt-36 relative w-full">
      <img alt="" className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Work with me
        </h2>
        <p className="text-fun-gray text-lg max-w-2xl mb-4">
          I take on client projects through{" "}
          <a className="text-fun-pink underline" href={`${CODEX_LABS.url}/`} target="_blank" rel="noopener">
            {CODEX_LABS.name}
          </a>
          , my studio for automation and app development. We build n8n
          workflows and AI agents, web apps, mobile apps for iOS and Android,
          and native macOS apps.
        </p>
        <p className="text-fun-gray text-lg max-w-2xl mb-6">
          Tell us what you want to build and we will reply with next steps.
        </p>
        <a
          href={CODEX_LABS.getStarted}
          target="_blank"
          rel="noopener"
          className="cursor-pointer font-bold whitespace-nowrap mt-2 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors mb-8"
        >
          Start a project with Codex Labs
        </a>
        <p className="text-fun-gray text-sm max-w-xl">
          Prefer email? Project enquiries go to{" "}
          <a className="text-fun-pink underline" href={`mailto:${CODEX_LABS.email}`}>
            {CODEX_LABS.email}
          </a>
          . For anything else, write to me at{" "}
          <a className="text-fun-pink underline" href={`mailto:${PERSON.email}`}>
            {PERSON.email}
          </a>
          .
        </p>
      </div>

      <img
        alt=""
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
