import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { CODEX_LABS, OASYS } from "@/lib/site";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Haseeb Asad: software engineer and founder</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I build <span className="heroShiny1 text-fun-pink">AI automations</span> and{" "}
          <span className="heroShiny2 text-fun-pink">production apps</span> for web,
          mobile and Mac.
          <img
            alt=""
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            alt=""
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            alt=""
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            alt=""
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            alt=""
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            alt=""
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            alt=""
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <p className="relative z-10 bg-bg rounded-2xl px-4 py-2 text-fun-gray text-lg sm:text-xl max-w-3xl mb-10">
          Software engineer at{" "}
          <a className="text-fun-pink underline" href={OASYS.url} target="_blank" rel="noopener">
            {OASYS.name}
          </a>
          , {OASYS.descriptor}. I also run{" "}
          <a className="text-fun-pink underline" href={`${CODEX_LABS.url}/`} target="_blank" rel="noopener">
            {CODEX_LABS.name}
          </a>
          , {CODEX_LABS.descriptor}. Things I have shipped include Synopt, the
          Taperlark Mac apps, BookWithKhelo and openwhenitstime.com.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            See my work
          </div>
        </ScrollLink>
        <a
          href={CODEX_LABS.getStarted}
          target="_blank"
          rel="noopener"
          className="font-bold whitespace-nowrap px-10 py-4 text-bg border-2 text-xl rounded-full border-fun-pink bg-fun-pink hover:bg-bg hover:text-fun-pink transition-colors"
        >
          Work with me
        </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
