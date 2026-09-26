import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/utility/Reveal";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Haseeb Asad: software engineer at Oasys and founder of Codex Labs. I build AI agents, n8n automations and web, mobile and macOS apps, like Synopt and Taperlark." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>

        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <Reveal>
        <CTA />
      </Reveal>
    </Page>
  );
}
