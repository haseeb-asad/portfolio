export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  eyebrow: string
  titleLines: string[]
  leadText: string
  supportingNotes: string[]
}

export interface ManifestoConfig {
  videoPath: string
  text: string
}

export interface FacilityArticle {
  title: string
  paragraphs: string[]
}

export interface FacilityItem {
  slug: string
  name: string
  code: string
  address: string
  status: string
  email: string
  phone: string
  ctaText: string
  ctaHref: string
  image: string
  utcOffset: number
  article: FacilityArticle
}

export interface FacilitiesConfig {
  sectionLabel: string
  detailBackText: string
  detailNotFoundText: string
  detailReturnText: string
  items: FacilityItem[]
}

export interface ObservationConfig {
  sectionLabel: string
  videoPath: string
  statusText: string
  latLabel: string
  lonLabel: string
  initialLat: number
  initialLon: number
}

export interface CareerItem {
  src: string
  company: string
  role: string
  period: string
  tech: string
  current?: boolean
  url?: string
}

export interface CareerConfig {
  sectionLabel: string
  items: CareerItem[]
}

export interface FooterConfig {
  copyrightText: string
  statusText: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Haseeb Asad - Full-Stack Engineer & Software Developer",
  siteDescription: "Portfolio of Haseeb Asad: full-stack engineer specializing in scalable web applications, mobile development, and cloud infrastructure. Available for consulting and freelance projects.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "HASEEB_A",
  links: [
    { label: "WORK", href: "#facilities" },
    { label: "CAREER", href: "#career" },
    { label: "CONTACT", href: "#contact" },
  ],
}

export const heroConfig: HeroConfig = {
  eyebrow: "FULL-STACK ENGINEER & SOFTWARE DEVELOPER",
  titleLines: ["BUILDING", "SCALABLE", "SYSTEMS"],
  leadText: "I architect and build production-grade software that scales - from mobile apps handling thousands of daily bookings to cloud infrastructure managing enterprise workloads. Based in Pakistan, working worldwide.",
  supportingNotes: [
    "FULL-STACK DEVELOPMENT",
    "MOBILE APPLICATIONS",
    "CLOUD INFRASTRUCTURE",
  ],
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "/static/videos/manifesto.mp4",
  text: "Every system I build carries intention. Every architecture tells a story. I believe in the craft of engineering - where performance meets elegance, where scalability breathes with reliability. My work sits at the intersection of what is functional and what is exceptional, seeking not just to ship features, but to build foundations that endure.",
}

export const facilitiesConfig: FacilitiesConfig = {
  sectionLabel: "SELECTED WORKS",
  detailBackText: "BACK TO WORKS",
  detailNotFoundText: "Project not found.",
  detailReturnText: "Return to works list",
  items: [
    {
      slug: "bookwithkhelo",
      name: "BOOKWITHKHELO",
      code: "PRJ-01",
      address: "Sports Booking Platform",
      status: "2023 · Production",
      email: "bookwithkhelo.com",
      phone: "React Native · Full Stack",
      ctaText: "VIEW LIVE PROJECT",
      ctaHref: "https://bookwithkhelo.com",
      image: "/static/images/project-nebula.jpg",
      utcOffset: 5,
      article: {
        title: "Cross-Platform Sports Venue Booking",
        paragraphs: [
          "BookWithKhelo is a comprehensive booking platform for sports facilities with mobile apps for both Android and iOS. It enables users to discover, book, and manage sports venue reservations seamlessly across Pakistan.",
          "The platform was built from the ground up using React Native for cross-platform mobile development, ensuring a native experience on both Android and iOS. The backend architecture handles concurrent booking requests, payment processing through Stripe, and real-time availability updates.",
          "The system features an admin dashboard for venue owners to manage their facilities, set pricing, and track bookings. Push notifications keep users informed about booking confirmations, reminders, and promotional offers.",
          "Since launch, the platform has facilitated thousands of bookings and continues to grow its network of sports venues across major cities in Pakistan.",
        ],
      },
    },
    {
      slug: "sehatmand",
      name: "SEHATMAND",
      code: "PRJ-02",
      address: "Health & Wellness Platform",
      status: "2024 · Production",
      email: "sehatmand.io",
      phone: "NextJS · Full Stack",
      ctaText: "VIEW PLATFORM",
      ctaHref: "https://sehatmand.io",
      image: "/static/images/project-echo.jpg",
      utcOffset: 5,
      article: {
        title: "Streamlining Healthcare Management",
        paragraphs: [
          "Sehatmand is a comprehensive health and wellness platform providing healthcare solutions and services. Built to streamline healthcare management and improve patient care outcomes across the region.",
          "The platform leverages Next.js for server-side rendering and optimal performance, ensuring fast load times and excellent SEO for healthcare content. The architecture supports multi-tenant configurations for different healthcare providers.",
          "Key features include appointment scheduling, patient record management, telehealth integration, and health analytics dashboards that give providers actionable insights into patient outcomes.",
        ],
      },
    },
    {
      slug: "querify",
      name: "QUERIFY",
      code: "PRJ-03",
      address: "Data Query Engine",
      status: "2024 · Production",
      email: "querify.tech",
      phone: "Data Management · Analytics",
      ctaText: "EXPLORE PLATFORM",
      ctaHref: "https://querify.tech",
      image: "/static/images/project-terra.jpg",
      utcOffset: 5,
      article: {
        title: "Simplifying Complex Data Operations",
        paragraphs: [
          "Querify is a powerful query and data management platform designed to simplify complex data operations. It enables efficient data querying and analytics for businesses of all sizes.",
          "The platform provides an intuitive interface for constructing complex queries without deep SQL knowledge, democratizing data access across organizations. Under the hood, query optimization ensures fast results even on large datasets.",
          "Built with a focus on security and compliance, Querify includes role-based access controls, audit logging, and data masking capabilities that make it suitable for enterprise deployments.",
          "The platform integrates with major database systems and data warehouses, providing a unified query interface regardless of where the data lives.",
        ],
      },
    },
    {
      slug: "nativeops",
      name: "NATIVEOPS",
      code: "PRJ-04",
      address: "DevOps Infrastructure Platform",
      status: "2024 · Production",
      email: "nativeops.tech",
      phone: "Cloud · DevOps · Kubernetes",
      ctaText: "LEARN MORE",
      ctaHref: "https://nativeops.tech",
      image: "/static/images/project-mnemosyne.jpg",
      utcOffset: 5,
      article: {
        title: "Infrastructure Management at Scale",
        paragraphs: [
          "NativeOps is a DevOps and infrastructure management platform for native applications and cloud operations. It streamlines deployment, monitoring, and scaling of cloud-native applications.",
          "The platform provides a unified control plane for managing Kubernetes clusters, CI/CD pipelines, and infrastructure-as-code deployments. Teams can monitor application health, track resource utilization, and automate scaling policies from a single dashboard.",
          "NativeOps integrates with major cloud providers including AWS, Google Cloud, and Azure, supporting hybrid and multi-cloud deployment strategies that give teams flexibility without vendor lock-in.",
        ],
      },
    },
    {
      slug: "openwhenitstime",
      name: "OPENWHENITSTIME",
      code: "PRJ-05",
      address: "Personal Project",
      status: "2025 · Live",
      email: "openwhenitstime.com",
      phone: "NextJS · Side Project",
      ctaText: "VISIT SITE",
      ctaHref: "https://openwhenitstime.com",
      image: "/static/images/project-openwhenitstime.jpg",
      utcOffset: 5,
      article: {
        title: "Time-Locked Digital Messages",
        paragraphs: [
          "OpenWhenItsTime is a personal hobby project that lets users create time-locked digital messages and letters. Write something today, set a date, and the recipient can only open it when the time comes.",
          "Built with Next.js as a fun side project exploring the intersection of emotion and technology. The platform handles scheduling, notifications, and secure message storage with a clean, minimal interface.",
          "A passion project born from the idea that some things are worth waiting for - digital letters that bring back the anticipation of receiving something meaningful at just the right moment.",
        ],
      },
    },
  ],
}

export const observationConfig: ObservationConfig = {
  sectionLabel: "LIVE FEED",
  videoPath: "/static/videos/observation.mp4",
  statusText: "CURRENTLY BUILDING",
  latLabel: "LAT",
  lonLabel: "LON",
  initialLat: 31.5204,
  initialLon: 74.3587,
}

export const careerConfig: CareerConfig = {
  sectionLabel: "CAREER",
  items: [
    {
      src: "/static/images/archive-4.jpg",
      company: "IGNITE TECH",
      role: "AI-First Full Stack Engineer",
      period: "",
      tech: "AI / Full Stack",
      current: true,
      url: "https://www.linkedin.com/company/ignite-tech",
    },
    {
      src: "/static/images/archive-1.jpg",
      company: "KHOROS",
      role: "AI-First Full Stack Engineer",
      period: "",
      tech: "AI / Full Stack",
      current: true,
      url: "https://www.linkedin.com/company/khoros/",
    },
    {
      src: "/static/images/archive-2.jpg",
      company: "GLOW",
      role: "Full Stack Engineer",
      period: "",
      tech: "Full Stack",
      url: "https://www.linkedin.com/company/glowinsurance",
    },
    {
      src: "/static/images/archive-3.jpg",
      company: "BAZAAR",
      role: "Backend Engineer",
      period: "",
      tech: "Spring Boot / Kotlin / Java",
      url: "https://www.linkedin.com/company/bazaartechnologies/",
    },
  ],
}

export const footerConfig: FooterConfig = {
  copyrightText: "© 2025 HASEEB ASAD. ALL RIGHTS RESERVED.",
  statusText: "PKT UTC+5",
}
