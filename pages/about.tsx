import Heading from "@/components/designs/Heading";
import More from "@/components/designs/More";
import Page from "@/components/utility/Page";
import React from "react";

function About() {
  return (
    <Page
      currentPage="About Me"
      profilePage
      meta={{
        title: "About",
        desc: "About Haseeb Asad: software engineer at Oasys, previously at Khoros (IgniteTech), and founder of Codex Labs, a studio for automation, AI agents and apps.",
      }}
    >
      <Heading />
      <More />
    </Page>
  );
}

export default About;
