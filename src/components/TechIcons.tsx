const s = 18;

export const techIcons: Record<string, JSX.Element> = {
  React: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Node.js": (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933" opacity="0.9" />
      <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#6CC24A" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">N</text>
    </svg>
  ),
  TypeScript: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TS</text>
    </svg>
  ),
  "Next.js": (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" />
      <path d="M8 7v10l8.5-10" fill="black" />
      <rect x="15" y="7" width="2" height="10" rx="1" fill="black" />
    </svg>
  ),
  WordPress: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">W</text>
    </svg>
  ),
  "Tailwind CSS": (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.35 10.82 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.65 7.18 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.35 16.82 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.65 13.18 9.5 12 7 12z" fill="#06B6D4" />
    </svg>
  ),
  PostgreSQL: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#336791" />
      <path d="M12 5c-3 0-5 1.5-5 4s2 3 5 3 5-1 5-3-2-4-5-4z" stroke="white" strokeWidth="1.2" fill="none" />
      <path d="M7 9v5c0 2.5 2 4 5 4s5-1.5 5-4V9" stroke="white" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  MongoDB: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 8 7 8 13c0 4 2 7 4 9 2-2 4-5 4-9 0-6-4-11-4-11z" fill="#47A248" />
      <path d="M12 2v22" stroke="#2D6B30" strokeWidth="1" />
    </svg>
  ),
  GraphQL: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" stroke="#E10098" strokeWidth="1.3" fill="none" />
      <circle cx="12" cy="3" r="1.5" fill="#E10098" />
      <circle cx="21" cy="8" r="1.5" fill="#E10098" />
      <circle cx="21" cy="16" r="1.5" fill="#E10098" />
      <circle cx="12" cy="21" r="1.5" fill="#E10098" />
      <circle cx="3" cy="16" r="1.5" fill="#E10098" />
      <circle cx="3" cy="8" r="1.5" fill="#E10098" />
    </svg>
  ),
  Docker: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="10" width="20" height="9" rx="2" fill="#2496ED" />
      <rect x="4" y="12" width="3" height="2.5" rx="0.5" fill="white" />
      <rect x="8" y="12" width="3" height="2.5" rx="0.5" fill="white" />
      <rect x="12" y="12" width="3" height="2.5" rx="0.5" fill="white" />
      <rect x="16" y="12" width="3" height="2.5" rx="0.5" fill="white" />
      <rect x="4" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="8" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="12" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
    </svg>
  ),
  AWS: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#232F3E" />
      <text x="12" y="16" textAnchor="middle" fill="#FF9900" fontSize="8" fontWeight="bold">AWS</text>
    </svg>
  ),
  Firebase: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 20L8 4l4 8-3 2 6-2L12 22 5 20z" fill="#FFCA28" />
      <path d="M12 22l8-10-5 2-3-6" fill="#FFA000" />
      <path d="M5 20l3-16 4 8" fill="#F57C00" />
    </svg>
  ),
  Python: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 2 8 4 8 4v3h4v1H6s-4 0-4 4 3 4 3 4h2v-3s0-3 3-3h5s3 0 3-3V5s0-3-6-3z" fill="#3776AB" />
      <path d="M12 22c4 0 4-2 4-2v-3h-4v-1h6s4 0 4-4-3-4-3-4h-2v3s0 3-3 3h-5s-3 0-3 3v3s0 3 6 3z" fill="#FFD43B" />
      <circle cx="10" cy="5" r="1" fill="white" />
      <circle cx="14" cy="19" r="1" fill="white" />
    </svg>
  ),
  Figma: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="8" y="2" width="4" height="6" rx="2" fill="#F24E1E" />
      <rect x="12" y="2" width="4" height="6" rx="2" fill="#FF7262" />
      <rect x="8" y="8" width="4" height="6" rx="2" fill="#A259FF" />
      <circle cx="14" cy="11" r="3" fill="#1ABCFE" />
      <rect x="8" y="14" width="4" height="6" rx="2" fill="#0ACF83" />
    </svg>
  ),
  Supabase: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z" fill="#3ECF8E" />
    </svg>
  ),
  Prisma: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 20h12l7-12L12 2z" fill="#5A67D8" />
      <path d="M12 2L3 20h12" fill="#7C85DB" />
    </svg>
  ),
  Redis: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="7" rx="9" ry="4" fill="#DC382D" />
      <path d="M3 7v5c0 2.2 4 4 9 4s9-1.8 9-4V7" fill="#A41E11" />
      <path d="M3 12v5c0 2.2 4 4 9 4s9-1.8 9-4v-5" fill="#DC382D" opacity="0.8" />
    </svg>
  ),
  Vercel: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L22 21H2L12 3z" fill="currentColor" />
    </svg>
  ),
  "Vue.js": (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M2 3h4l6 10L18 3h4L12 21 2 3z" fill="#41B883" />
      <path d="M7 3h3l2 4 2-4h3L12 14 7 3z" fill="#35495E" />
    </svg>
  ),
  Sass: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#CD6799" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">S</text>
    </svg>
  ),
  Git: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M22.1 11.1L12.9 1.9c-.5-.5-1.3-.5-1.8 0l-1.9 1.9 2.4 2.4c.6-.2 1.2 0 1.6.5.4.5.5 1.1.3 1.6l2.3 2.3c.6-.2 1.2 0 1.6.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.5-.5-.6-1.1-.3-1.7l-2.1-2.1v5.6c.2.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.1c-.2-.1-.4-.2-.6-.4-.5-.5-.6-1.2-.3-1.7L8.6 4.6 1.9 11.1c-.5.5-.5 1.3 0 1.8l9.2 9.2c.5.5 1.3.5 1.8 0l9.2-9.2c.5-.5.5-1.3 0-1.8z" fill="#F05032" />
    </svg>
  ),
  Stripe: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#635BFF" />
      <path d="M12.5 8.5c-1.5-.5-2-.8-2-1.3 0-.4.4-.7 1.2-.7 1.2 0 2.5.5 3.3.9l.5-3c-.8-.4-2.2-.8-3.8-.8-3.2 0-5.2 1.7-5.2 4 0 2 1.2 3 3.5 3.8 1.5.5 1.8.8 1.8 1.3 0 .6-.5.9-1.5.9-1.2 0-2.8-.5-4-1.3l-.5 3c1 .6 2.8 1 4.3 1 3.3 0 5.4-1.5 5.4-4.1 0-2.2-1.3-3.1-3-3.7z" fill="white" />
    </svg>
  ),
};
