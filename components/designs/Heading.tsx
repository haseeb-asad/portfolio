import React from "react";

function Heading() {
  return (
    <div className="pt-16 pb-8 sm:pt-20 sm:pb-0 w-full text-center relative">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About Me
          <img
            className="sqD w-12 -top-6 -right-8 absolute"
            src="/static/doodles/skills/fillStar.svg"
            alt="Decorative star"
          />
        </h1>
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-8">
          <img
            src="/static/misc/my.jpeg"
            alt="Your profile picture"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-fun-gray text-xl sm:text-2xl">
          I'm an AI-First Senior Software Engineer at Khoros (IgniteTech), where I own the Member Experience track end-to-end and ship full-stack across React/TypeScript and Java/GraphQL. I came up through backend and platform work with Spring Boot, Kotlin, and Java, and I lean hard on AI-augmented workflows to ship faster. I build fun projects in my free time.
        </p>
      </div>
    </div>
  );
}

export default Heading;