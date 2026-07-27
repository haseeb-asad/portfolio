import Page from "components/utility/Page";
import React from "react";
import Resume from "components/resume/Resume";

function resume() {
  return (
    <Page
      currentPage="Resume"
      meta={{
        desc: "The latest resume of Haseeb Asad — AI-First Senior Software Engineer working across React/TypeScript, Java/GraphQL, and cloud infrastructure.",
      }}
    >
      <Resume />
    </Page>
  );
}

export default resume;
