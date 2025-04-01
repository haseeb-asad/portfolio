import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
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
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <Heading />
      {/* <Projects /> */}
      <More />
      <div className="contra-hire-me-button flex justify-center w-full"
          data-analyticsUserId="e94f90a4-d3f4-4bd6-9baa-f80e61804e2c"
          data-theme="light"
          data-username="haseeb_asad"></div>
    </Page>
  );
}

export default designs;
