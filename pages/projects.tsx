import Heading from "@/components/Projects/Heading";
import More from "@/components/Projects/More";
import Page from "components/utility/Page";
import Projects from "@/components/Projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
