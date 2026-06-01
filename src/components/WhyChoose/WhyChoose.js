'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './WhyChoose.module.css';

const features = [
  {
    title: 'Built for Education',
    description:
      'Every feature is designed specifically for educational institutions, not adapted from generic business tools.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Reliable Infrastructure',
    description:
      'Enterprise-grade systems built for consistent performance and uptime your institution can depend on.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Secure Solutions',
    description:
      'Industry-standard security practices protecting sensitive student and institutional data.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    description:
      'Solutions that grow seamlessly from a single campus to multi-branch institutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support',
    description:
      'Expert assistance available whenever you need it, from implementation through daily operations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Innovation',
    description:
      'Regular updates and new features driven by evolving education technology needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4" />
        <path d="M12 2a7 7 0 0 1 4 12.7V17H8v-2.3A7 7 0 0 1 12 2z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  const ref = useScrollReveal();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Why Choose Samyukt"
          subtitle="Built with purpose, designed for scale"
        />
        <div
          ref={ref}
          className={`${styles.grid} reveal reveal-children`}
        >
          {features.map((feature) => (
            <div key={feature.title} className={styles.item}>
              <div className={styles.icon}>{feature.icon}</div>
              <div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
