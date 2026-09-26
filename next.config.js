const RESUME_FILE = '/static/resume/HaseebAsad_CV.pdf';

module.exports = {
    async redirects() {
        return [
          // The Vercel project domain serves a full duplicate of the site.
          // Host-matched so preview deployments (other *.vercel.app hosts)
          // are unaffected.
          {
            source: '/:path*',
            has: [{ type: 'host', value: 'haseebasad.vercel.app' }],
            destination: 'https://www.haseebasad.com/:path*',
            permanent: true,
          },
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
    // /cv serves the PDF bytes directly so automated resume scrapers (and any
    // link that just gets fetched) receive the file, not an HTML page.
    async rewrites() {
        return [
          {
            source: '/cv',
            destination: RESUME_FILE,
          },
        ]
      },
    async headers() {
        return [
          {
            source: '/cv',
            headers: [
              {
                key: 'Content-Type',
                value: 'application/pdf',
              },
              {
                key: 'Content-Disposition',
                value: 'attachment; filename="HaseebAsad_CV.pdf"',
              },
            ],
          },
        ]
      },
};
