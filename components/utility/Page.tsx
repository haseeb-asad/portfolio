import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import BrutalistNavbar from '@/components/brutalist/BrutalistNavbar';
import BrutalistFooter from '@/components/brutalist/BrutalistFooter';
import React, { ReactChildren, useEffect } from "react";

function Page({ currentPage, meta: { title, desc }, children, brutalist }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Haseeb Asad - Software Engineer | Full-Stack & Mobile Developer"
      : `${currentPage} - Haseeb Asad`
  }`;
  const siteUrl = "https://haseebasad.vercel.app";
  const ogImage = `${siteUrl}/static/og-image.png`;

  useEffect(() => {
    if (brutalist) {
      const prev = document.body.style.background;
      document.body.style.background = '#ffffff';
      document.body.style.color = '#000000';
      return () => {
        document.body.style.background = prev;
        document.body.style.color = '';
      };
    }
  }, [brutalist]);

  return (
    <div
      className={`w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin ${brutalist ? 'text-black' : 'text-white'} overflow-hidden md:overflow-visible`}
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        {/* Primary Meta Tags */}
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />
        <meta name="keywords" content="Software Engineer, Full Stack Developer, Mobile Developer, React, Node.js, Python, AWS, Kubernetes, Freelance Developer, Web Development, App Development, DevOps, Haseeb Asad" />
        <meta name="author" content="Haseeb Asad" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href={siteUrl} />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Haseeb Asad Portfolio" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={ogImage} />

        {/* Structured Data / Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Haseeb Asad",
              url: siteUrl,
              jobTitle: "Software Engineer",
              description: desc,
              sameAs: [
                "https://github.com/haseeb-asad",
                "https://www.linkedin.com/in/haseeb-asad/",
              ],
              knowsAbout: [
                "Full Stack Development",
                "Mobile Development",
                "Cloud Infrastructure",
                "DevOps",
                "React",
                "Node.js",
                "Python",
                "AWS",
                "Kubernetes",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KC3CN7V');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>

      <main className="p-5 w-full flex-1 text-center">
        {brutalist ? (
          <BrutalistNavbar currentPage={currentPage} />
        ) : (
          <>
            <div className="hidden sm:block z-100">
              <Navbar currentPage={currentPage} />
            </div>
            <div className="-m-5 block sm:hidden z-100">
              <MobileNavbar />
            </div>
          </>
        )}
        {children}
      </main>
      {brutalist ? <BrutalistFooter /> : <Footer />}
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
  children?: JSX.Element | JSX.Element[];
  brutalist?: boolean;
};
