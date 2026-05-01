export default function Contact() {
  return (
    <section
      id="contact"
      className="brutalist-contact"
      style={{
        background: '#ffffff',
        color: '#000000',
        borderTop: '1px solid #000',
        padding: '120px 40px',
        fontFamily: "'IBM Plex Mono', monospace",
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="brutalist-contact-inner"
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: details */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.4)',
              margin: '0 0 20px 0',
            }}
          >
            GET IN TOUCH
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.1,
              textTransform: 'uppercase',
              margin: '0 0 48px 0',
            }}
          >
            LET'S BUILD
            <br />
            SOMETHING TOGETHER
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <a
              href="mailto:haseebasad305@gmail.com"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#000',
                textDecoration: 'none',
                borderBottom: '1px solid #000',
                paddingBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.6';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                EMAIL
              </span>
              <span style={{ fontSize: '13px' }}>
                haseebasad305@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/haseeb-asad/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#000',
                textDecoration: 'none',
                borderBottom: '1px solid #000',
                paddingBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.6';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                LINKEDIN
              </span>
              <span style={{ fontSize: '13px' }}>
                linkedin.com/in/haseeb-asad
              </span>
            </a>

            <a
              href="https://github.com/haseeb-asad"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#000',
                textDecoration: 'none',
                borderBottom: '1px solid #000',
                paddingBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.6';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                GITHUB
              </span>
              <span style={{ fontSize: '13px' }}>
                github.com/haseeb-asad
              </span>
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="brutalist-contact-photo" style={{ flexShrink: 0 }}>
          <img
            src="/static/misc/my.jpeg"
            alt="Haseeb Asad"
            style={{
              width: '280px',
              height: '340px',
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(100%)',
              border: '1px solid #000',
            }}
          />
        </div>
      </div>
    </section>
  );
}
