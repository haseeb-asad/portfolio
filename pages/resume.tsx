import Page from "@/components/utility/Page";
import React from "react";
import Resume from "@/components/resume/Resume";

function resume() {
  return (
    <Page
      currentPage="Resume"
      meta={{
        desc: "Resume of Haseeb Asad, software engineer at Oasys and founder of Codex Labs. Full-stack across React/TypeScript, Java/GraphQL and cloud infrastructure.",
      }}
    >
      <Resume />
    </Page>
  );
}

export default resume;
