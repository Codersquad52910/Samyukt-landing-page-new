'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './tools.module.css';

const tools = [
  {
    name: 'Management System',
    description: 'Comprehensive platform for managing institutional operations, staff, and resources efficiently.',
    category: 'Operations',
    status: 'active',
    link: 'https://www.samyukt.co.in/tools/management-system',
  },
  {
    name: 'Student Information System',
    status: 'coming-soon',
  },
  {
    name: 'Learning Management System',
    status: 'coming-soon',
  },
  {
    name: 'Attendance Management',
    status: 'coming-soon',
  },
  {
    name: 'Fee Management',
    status: 'coming-soon',
  },
  {
    name: 'Examination Portal',
    status: 'coming-soon',
  },
];

function ActiveIcon() {
  return (
    <svg
      className={styles.activeIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  );
}

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
      <path
        d="M14 14h8v8h-8zm12 0h8v8h-8zm-12 12h8v8h-8zm12 0h8v8h-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ToolsPage() {
  const ref = useScrollReveal();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <SectionHeader
            title="Our Tools"
            subtitle="Purpose-built software for educational institutions"
          />
          <div ref={ref} className={`${styles.grid} reveal reveal-children`}>
            {tools.map((tool, index) => {
              if (tool.status === 'active') {
                return (
                  <div key={tool.name} className={`${styles.card} ${styles.activeCard}`}>
                    <ActiveIcon />
                    <span className={styles.activeBadge}>{tool.category}</span>
                    <h3 className={styles.name}>{tool.name}</h3>
                    <p className={styles.description}>{tool.description}</p>
                    <a
                      href={tool.link}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Tool →
                    </a>
                  </div>
                );
              }

              return (
                <div key={index} className={styles.cardComingSoon}>
                  <PlaceholderIcon />
                  <span className={styles.badge}>Coming Soon</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
