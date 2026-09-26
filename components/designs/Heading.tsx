import React from "react";
import { CODEX_LABS, OASYS, PERSON } from "@/lib/site";

function Heading() {
  return (
    <div className="pt-16 pb-8 sm:pt-20 sm:pb-0 w-full text-center relative">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About Me
          <img
            className="sqD w-12 -top-6 -right-8 absolute"
            src="/static/doodles/skills/fillStar.svg"
            alt=""
          />
        </h1>
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-8">
          <img
            src={PERSON.image}
            alt="Haseeb Asad"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl space-y-6 text-fun-gray text-lg sm:text-xl text-left">
          <p>
            I&apos;m Haseeb Asad, a software engineer at{" "}
            <a className="text-fun-pink underline" href={OASYS.url} target="_blank" rel="noopener">
              {OASYS.name}
            </a>
            , {OASYS.descriptor}.
          </p>
          <p>
            Before Oasys I was an AI-First Senior Software Engineer at Khoros
            (IgniteTech), where I owned the Member Experience track end to end
            and shipped full-stack across React/TypeScript and Java/GraphQL. I
            came up through backend and platform work with Spring Boot, Kotlin
            and Java, and I lean hard on AI-augmented workflows to ship faster.
          </p>
          <p>
            I also run{" "}
            <a className="text-fun-pink underline" href={`${CODEX_LABS.url}/`} target="_blank" rel="noopener">
              {CODEX_LABS.name}
            </a>
            , {CODEX_LABS.descriptor}. If you want to hire me for a project,
            that is where client work happens:{" "}
            <a className="text-fun-pink underline" href={CODEX_LABS.getStarted} target="_blank" rel="noopener">
              start a project with Codex Labs
            </a>{" "}
            or email{" "}
            <a className="text-fun-pink underline" href={`mailto:${CODEX_LABS.email}`}>
              {CODEX_LABS.email}
            </a>
            .
          </p>
          <p>
            Outside work I build my own products. Some of them:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a className="text-fun-pink underline" href="https://synopt.dev" target="_blank" rel="noopener">Synopt</a>:
              AI coding observability for engineering teams using Claude Code,
              Codex and Cursor, with an open source, self-hosted agent.
            </li>
            <li>
              <a className="text-fun-pink underline" href="https://taperlark.com" target="_blank" rel="noopener">Taperlark</a>:
              native macOS apps, including CoolCurve, Preen and Submix.
            </li>
            <li>
              <a className="text-fun-pink underline" href="https://bookwithkhelo.com" target="_blank" rel="noopener">BookWithKhelo</a>:
              sports venue booking in Pakistan, with Android and iOS apps.
            </li>
            <li>
              <a className="text-fun-pink underline" href="https://openwhenitstime.com" target="_blank" rel="noopener">openwhenitstime.com</a>:
              time-locked letters you write today and open on a date you choose.
            </li>
          </ul>
          <p>
            For anything that is not a project enquiry, email me at{" "}
            <a className="text-fun-pink underline" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
