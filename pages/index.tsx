import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import Reveal from "@/components/utility/Reveal";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Contra script
    const script = document.createElement('script');
    script.src = "https://contra.com/static/embed/sdk.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Page currentPage="Home" meta={{ desc: "Portfolio of Haseeb Asad: full-stack engineer specializing in scalable web applications, mobile development, and cloud infrastructure. Experienced with React, Node.js, Python, AWS, and Kubernetes. Available for consulting and freelance projects." }}>
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
        <Reveal>
          <Testimonials />
        </Reveal>

        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <Reveal>
        <CTA />
      </Reveal>
    </Page>
  );
}
