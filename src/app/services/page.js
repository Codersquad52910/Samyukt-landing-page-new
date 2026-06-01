'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './services.module.css';

const placeholders = [
  { teaser: 'Implementation & deployment solutions launching soon' },
  { teaser: 'Strategic consulting services coming your way' },
  { teaser: 'Data migration services in development' },
  { teaser: 'Training programs being designed for you' },
  { teaser: 'Dedicated support services on the horizon' },
  { teaser: 'Custom development offerings arriving soon' },
];

function PlaceholderIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 34c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  const ref = useScrollReveal();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <SectionHeader
            title="Our Services"
            subtitle="Professional services for educational institutions"
          />
          <div ref={ref} className={`${styles.grid} reveal reveal-children`}>
            {placeholders.map((item, index) => (
              <div key={index} className={styles.card}>
                <PlaceholderIcon />
                <span className={styles.badge}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
