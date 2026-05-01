import { useEffect, useRef, useCallback } from 'react';
import { careerConfig } from '@/data/brutalConfig';

export default function Archives() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const scrollTlRef = useRef<any>(null);
  const items = careerConfig.items;

  const setupCarouselCells = useCallback(() => {
    if (!carouselRef.current) return;
    const cells = carouselRef.current.querySelectorAll<HTMLElement>('.carousel__cell');
    const count = cells.length;
    if (!count) return;
    const angleStep = 360 / count;

    // Use known CSS card widths (don't rely on offsetWidth which can be 0 on SSR/prod)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const cardWidth = isMobile ? 290 : 480;
    // Multiply by 1.6 to add comfortable gap between cards
    const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count) * 1.6);

    cells.forEach((cell, index) => {
      cell.style.transform = `rotateY(${index * angleStep}deg) translateZ(${radius}px)`;
    });

    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateZ(-${radius}px) rotateY(0deg)`;
    }
  }, []);

  const createScrollTimeline = useCallback(() => {
    if (!wrapperRef.current || !carouselRef.current) return;

    import('gsap').then((gsapModule) => {
      import('gsap/ScrollTrigger').then((stModule) => {
        const gsap = gsapModule.default;
        const { ScrollTrigger } = stModule;
        gsap.registerPlugin(ScrollTrigger);

        const carousel = carouselRef.current;
        if (!carousel) return;
        const cards = carousel.querySelectorAll<HTMLElement>('.carousel__cell');

        const tl = gsap.timeline({
          defaults: { ease: 'sine.inOut' },
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        tl.fromTo(carousel, { rotationY: 0 }, { rotationY: -420 }, 0);
        tl.fromTo(carousel, { rotationZ: 3, rotationX: 3 }, { rotationZ: -3, rotationX: -3 }, 0);
        tl.fromTo(cards, { rotationZ: 10 }, { rotationZ: -10, ease: 'none' }, 0);

        scrollTlRef.current = tl;
      });
    });
  }, []);

  useEffect(() => {
    setupCarouselCells();
    createScrollTimeline();

    return () => {
      if (scrollTlRef.current) {
        scrollTlRef.current.scrollTrigger?.kill();
        scrollTlRef.current.kill();
      }
    };
  }, [setupCarouselCells, createScrollTimeline]);

  if (!careerConfig.sectionLabel && items.length === 0) {
    return null;
  }

  return (
    <section
      ref={wrapperRef}
      id="career"
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '400vh',
        position: 'relative',
      }}
    >
      <div style={{ padding: '80px 40px 40px', position: 'relative', zIndex: 10 }}>
        <h3
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '17.5px',
            fontWeight: 400,
            lineHeight: '20px',
            textTransform: 'uppercase',
            color: '#fff',
            margin: '0 0 24px 0',
          }}
        >
          {careerConfig.sectionLabel}
        </h3>
      </div>

      <div
        ref={sceneRef}
        className="scene"
        style={{
          perspective: '900px',
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          ref={carouselRef}
          className="carousel career-carousel"
          style={{
            width: '520px',
            height: '640px',
            position: 'absolute',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: 'translateZ(-500px) rotateY(0deg)',
          }}
        >
          {items.map((item, index) => (
            <a
              key={`${item.company}-${index}`}
              href={item.url || '#'}
              target="_blank"
              rel="noreferrer"
              className="carousel__cell career-card"
              style={{
                position: 'absolute',
                width: '480px',
                height: '580px',
                left: '0',
                top: '0',
                transformStyle: 'preserve-3d',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              {/* Background image */}
              <img
                src={item.src}
                alt={item.company}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(100%) brightness(40%)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              {/* Career info overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '32px 24px',
                  boxSizing: 'border-box',
                }}
              >
                {item.period && (
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.15em',
                    margin: '0 0 8px 0',
                  }}
                >
                  {item.period}
                </p>
                )}
                <h4
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '30px',
                    fontWeight: 400,
                    color: '#fff',
                    letterSpacing: '0.05em',
                    margin: '0 0 8px 0',
                    lineHeight: 1.1,
                  }}
                >
                  {item.current ? (
                    <>{item.company} <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>(current)</span></>
                  ) : (
                    <><span style={{ textTransform: 'none', fontSize: '22px', color: 'rgba(255,255,255,0.4)' }}>x </span>{item.company}</>
                  )}
                </h4>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.7)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.4,
                  }}
                >
                  {item.role}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.1em',
                    margin: 0,
                    borderTop: '1px solid rgba(255,255,255,0.15)',
                    paddingTop: '12px',
                  }}
                >
                  {item.tech}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
