import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Hero from '@/components/brutalist/Hero';
import BrutalistFooter from '@/components/brutalist/BrutalistFooter';
import Contact from '@/components/brutalist/Contact';
import { siteConfig } from '@/data/brutalConfig';

const Manifesto = dynamic(() => import('@/components/brutalist/Manifesto'), { ssr: false });
const Facilities = dynamic(() => import('@/components/brutalist/Facilities'), { ssr: false });

const Archives = dynamic(() => import('@/components/brutalist/Archives'), { ssr: false });

export default function Home() {
  const router = useRouter();

  // Handle hash anchor scrolling
  useEffect(() => {
    const hash = router.asPath.includes('#') ? router.asPath.split('#')[1] : null;
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [router.asPath]);

  // Set body background for homepage
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#000';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.siteTitle}</title>
        <meta name="description" content={siteConfig.siteDescription} />
        <meta name="keywords" content="Software Engineer, Full Stack Developer, Mobile Developer, React, Node.js, Python, AWS, Kubernetes, Freelance Developer, Web Development, App Development, DevOps, Haseeb Asad" />
        <meta name="author" content="Haseeb Asad" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.siteTitle} />
        <meta property="og:description" content={siteConfig.siteDescription} />
        <meta property="og:image" content="https://haseebasad.vercel.app/static/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={siteConfig.siteTitle} />
        <meta property="twitter:description" content={siteConfig.siteDescription} />
      </Head>
      <main>
        <Hero />
        <Manifesto />
        <Facilities />

        <Archives />
      </main>
      <Contact />
      <BrutalistFooter />
    </>
  );
}
