import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React from "react";
import { useRouter } from "next/router";
import { OG_IMAGE, SITE_NAME, absoluteUrl, canonicalFromAsPath } from "@/lib/site";
import {
  graph,
  personNode,
  profilePageNode,
  serializeJsonLd,
  websiteNode,
} from "@/lib/structured-data";

export const HOME_TITLE = "Haseeb Asad | Software Engineer, Founder of Codex Labs";

function Page({ currentPage, meta: { title, desc }, noindex = false, profilePage = false, children }: PageProps) {
  const router = useRouter();
  const canonical = canonicalFromAsPath(router.asPath);
  const pageTitle =
    currentPage === "Home" ? HOME_TITLE : `${title || currentPage} | ${SITE_NAME}`;
  const ogImage = absoluteUrl(OG_IMAGE.path);

  const nodes = [websiteNode(), personNode()];
  if (profilePage) nodes.push(profilePageNode(canonical, pageTitle));

  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <meta name="author" content="Haseeb Asad" />
        {noindex && <meta name="robots" content="noindex, follow" />}
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content={profilePage ? "profile" : "website"} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content={String(OG_IMAGE.width)} />
        <meta property="og:image:height" content={String(OG_IMAGE.height)} />
        <meta property="og:image:alt" content={OG_IMAGE.alt} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={OG_IMAGE.alt} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph(nodes)) }}
        />
      </Head>

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  noindex?: boolean;
  profilePage?: boolean;
  children?: React.ReactNode;
};
