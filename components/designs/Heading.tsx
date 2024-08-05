import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
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
          I'm a Software Engineer by profession. I love to solve problems and create solutions. In my free time, I love to learn new things and create new projects. My expertise is web and cloud development.
        </p>
      </div>
    </div>
  );
}

export default Heading;