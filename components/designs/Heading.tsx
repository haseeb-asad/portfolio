import React from "react";

function Heading() {
  return (
    <div className="pt-16 pb-8 sm:pt-20 sm:pb-0 w-full text-left relative">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About Me
        </h1>
        <div className="w-48 h-48 sm:w-64 sm:h-64 overflow-hidden border border-black mb-8">
          <img
            src="/static/misc/my.jpeg"
            alt="Your profile picture"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
        <p className="opacity-70 text-xl sm:text-2xl">
          I'm a Software Engineer by profession currently working as a SWE at Bazaar Technologies. I work with Spring Boot, Kotlin, and Java as my primary stack and have a solid grasp of many other technologies. I build fun projects in my free time.
        </p>
      </div>
    </div>
  );
}

export default Heading;