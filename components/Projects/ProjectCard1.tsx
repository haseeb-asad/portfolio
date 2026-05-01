import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.links?.[0]?.url || project.link || project.github}
        target="_blank"
        className={`w-full relative border border-black transition-opacity hover:opacity-70`}
      >
        <img
          className="w-full"
          src={project.img}
          style={{ filter: 'grayscale(100%)' }}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.links?.[0]?.url || project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold uppercase tracking-wide text-sm">{project.title}</h3>
          </a>
          <div className="space-x-2 flex items-center">
            {/* New links array support */}
            {project.links && project.links.map((link, index) => {
              const isGithub = link.label.toLowerCase().includes('github');
              const iconSrc = isGithub
                ? "/static/icons/github.svg"
                : "/static/icons/external-link.svg";

              return (
                <a key={index} href={link.url} target="_blank" rel="noreferrer" title={link.label}>
                  <Image
                    src={iconSrc}
                    width={16}
                    height={16}
                    alt={`${link.label} Icon`}
                  />
                </a>
              );
            })}

            {/* Backward compatibility for old link/github fields */}
            {!project.links && project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {!project.links && project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="opacity-60 text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 border border-black text-xs uppercase tracking-wide py-1 px-2 cursor-pointer hover:bg-black hover:text-white transition-colors">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
