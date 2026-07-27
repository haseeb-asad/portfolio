const RESUME_FILE = '/static/resume/HaseebAsad_CV.pdf';

module.exports = {
    async redirects() {
        return [
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
