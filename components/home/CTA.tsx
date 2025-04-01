import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:haseebasad305@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors mb-6"
        >
          Get in Touch
        </a>
        <div className="contra-hire-me-button flex justify-center w-full"
          data-analyticsUserId="e94f90a4-d3f4-4bd6-9baa-f80e61804e2c"
          data-theme="light"
          data-username="haseeb_asad"></div>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
