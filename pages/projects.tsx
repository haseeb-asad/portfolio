import Heading from "@/components/Projects/Heading";
import More from "@/components/Projects/More";
import Page from "components/utility/Page";
import Projects from "@/components/Projects/Projects";
import React from "react";
import clientProjects from "@/data/content/clientProjects";
import personalProjects from "@/data/content/projects";
import ProjectCard from "@/components/Projects/ProjectCard1";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "Full-stack software engineer portfolio featuring client work and personal projects. Specialized in React, Node.js, Python, AWS, Kubernetes, and mobile development." }}
    >
      <Heading />

      {/* Client Work Section */}
      <div className="mb-20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Client Work & Professional Projects
          </h2>
          <p className="text-fun-gray text-center max-w-2xl mx-auto">
            Production applications built for clients, featuring scalable architecture and modern tech stacks
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {clientProjects.map((item) => {
            return <ProjectCard key={item.id} project={item} />;
          })}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className="mb-20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Personal Projects & Experiments
          </h2>
          <p className="text-fun-gray text-center max-w-2xl mx-auto">
            Side projects and open-source contributions showcasing various technologies and problem-solving approaches
          </p>
        </div>
        <Projects overwriteProjects={personalProjects} />
      </div>

      <More />
    </Page>
  );
}

export default projects;
