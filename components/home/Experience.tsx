import React from "react";
import SectionTitle from "../global/SectionTitle";
import { experience } from "@/data/content/home";

function Experience() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <SectionTitle title="Where I've Worked" />
      <p className="text-fun-gray text-center mb-8 max-w-3xl mx-auto">
        Building scalable products across AI, fintech, and enterprise platforms.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {experience.map((item, index) => {
          const Wrapper: any = item.url ? "a" : "div";
          const wrapperProps = item.url
            ? { href: item.url, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrapper
              key={index}
              {...wrapperProps}
              className="block rounded-xl border border-fun-gray p-5 transition hover:-translate-y-1 hover:border-fun-pink will-change-projectCard"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{item.company}</h3>
                {item.current && (
                  <span className="text-xs font-bold text-fun-pink border border-fun-pink rounded-full px-3 py-1 whitespace-nowrap">
                    Current
                  </span>
                )}
              </div>
              <p className="text-fun-white mt-1">{item.role}</p>
              <p className="text-fun-gray text-sm mt-2">{item.tech}</p>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
