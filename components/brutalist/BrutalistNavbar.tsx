import Link from 'next/link';

const navLinks = [
  { label: 'WORK', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ABOUT', href: '/about' },
];

export default function BrutalistNavbar({ currentPage }: { currentPage?: string }) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 0',
        borderBottom: '1px solid #000',
        marginBottom: '32px',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>
        <span
          style={{
            fontSize: '16px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          HASEEB_A
        </span>
      </Link>
      <div style={{ display: 'flex', gap: '32px' }}>
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontSize: '12px',
              fontWeight: 400,
              textTransform: 'uppercase',
              color: '#000',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              opacity: currentPage === item.label ? 1 : 0.5,
              borderBottom: currentPage === item.label ? '1px solid #000' : '1px solid transparent',
              paddingBottom: '2px',
              transition: 'opacity 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.label) {
                (e.target as HTMLElement).style.opacity = '0.5';
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
