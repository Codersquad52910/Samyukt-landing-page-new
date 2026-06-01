'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './About.module.css';

const features = [
  {
    title: 'Educational Technology Expertise',
    description: 'Deep understanding of institutional workflows and academic processes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Process Automation',
    description: 'Eliminating manual work with intelligent software solutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description: 'Guiding institutions from legacy systems to modern platforms.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Scalable Solutions',
    description: "Architecture that grows with your institution's needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Reliable Support',
    description: 'Dedicated assistance from implementation through daily operations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72M14 16a4 4 0 0 0-8 0" />
        <circle cx="10" cy="9" r="3" />
        <circle cx="17" cy="12.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Long-term Innovation',
    description: 'Continuous improvement driven by evolving education needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section section-alt reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          title="About Samyukt"
          subtitle="Empowering educational institutions with modern technology solutions"
        />

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Samyukt is a technology company dedicated to transforming how
            educational institutions operate. Founded with the vision of bridging
            the gap between traditional education management and modern digital
            solutions, we build software tools and provide professional services
            that help schools, colleges, universities, and coaching institutes run
            more efficiently.
          </p>
          <p className={styles.paragraph}>
            Our approach combines deep understanding of educational workflows with
            cutting-edge technology. We don&apos;t just build software — we partner
            with institutions to understand their unique challenges and deliver
            solutions that genuinely improve operations, communication, and
            outcomes.
          </p>
        </div>

        <div className={`${styles.grid} reveal-children`}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrap}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
