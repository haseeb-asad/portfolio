import Heading from "@/components/designs/Heading";
import More from "@/components/designs/More";
import Page from "@/components/utility/Page";
import Projects from "@/components/designs/Designs";
import React from "react";
import { useEffect } from "react";

function designs() {

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
    <Page
      currentPage="About Me"
      meta={{ desc: "AI-First Senior Software Engineer at Khoros (IgniteTech), shipping full-stack across React/TypeScript and Java/GraphQL with a backend and platform background." }}
    >
      <Heading />
      {/* <Projects /> */}
      <More />
      <div className="contra-hire-me-button flex justify-center w-full"
          data-analyticsuserid="e94f90a4-d3f4-4bd6-9baa-f80e61804e2c"
          data-theme="light"
          data-username="haseeb_asad"></div>
    </Page>
  );
}

export default designs;
