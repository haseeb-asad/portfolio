import Heading from "@/components/Projects/Heading";
import More from "@/components/Projects/More";
import Page from "@/components/utility/Page";
import Projects from "@/components/Projects/Projects";
import React from "react";
import projects from "@/data/content/projects";
import Reveal from "@/components/utility/Reveal";

function ProjectsPage() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "Full-stack software engineer portfolio featuring client work and personal projects. Specialized in React, Node.js, Python, AWS, Kubernetes, and mobile development." }}
    >
      <Heading />

      <Reveal>
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Client Work & Projects
            </h2>
            <p className="text-fun-gray text-center max-w-2xl mx-auto">
              Production applications and side projects, featuring scalable architecture and modern tech stacks
            </p>
          </div>
          <Projects overwriteProjects={projects} />
        </div>
      </Reveal>

      <More />
    </Page>
  );
}

export default ProjectsPage;
