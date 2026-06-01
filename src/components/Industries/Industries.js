'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Industries.module.css';

const industries = [
  {
    title: 'Schools',
    description:
      'K-12 institutions looking to modernize administration and enhance parent-teacher communication.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 21V9l-4 3v9M15 21V9l4 3v9M9 9l3-6 3 6" />
        <path d="M12 21v-4" />
      </svg>
    ),
  },
  {
    title: 'Colleges',
    description:
      'Higher education institutions seeking efficient student management and academic operations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M4 8h16" />
      </svg>
    ),
  },
  {
    title: 'Universities',
    description:
      'Large-scale institutions requiring integrated systems across departments and campuses.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Coaching Institutes',
    description:
      'Test prep and coaching centers needing student tracking and performance analytics.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Educational Organizations',
    description:
      'Non-profits and education bodies managing programs, grants, and institutional networks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Training Centers',
    description:
      'Professional training providers requiring enrollment management and course delivery tools.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h8M8 14h4" />
      </svg>
    ),
  },
];

export default function Industries() {
  const ref = useScrollReveal();

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Solutions for the entire education ecosystem"
        />
        <div
          ref={ref}
          className={`${styles.grid} reveal reveal-children`}
        >
          {industries.map((industry) => (
            <div key={industry.title} className={styles.card}>
              <div className={styles.icon}>{industry.icon}</div>
              <h3 className={styles.title}>{industry.title}</h3>
              <p className={styles.description}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
