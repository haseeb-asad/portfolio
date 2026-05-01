import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative uppercase tracking-tight">
            Projects built with <b>{tag}</b>
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative uppercase tracking-tight">
          Projects
        </h1>
      )}
      {!tag && (
        <p className="opacity-60 text-xl sm:text-2xl max-w-3xl m-auto">
          Full-stack engineer with expertise in scalable web applications, mobile development, and cloud infrastructure.
          Delivering production-ready solutions for startups and enterprises.
        </p>
      )}
    </div>
  );
}

export default Heading;
