'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Tools.module.css';

const tools = [
  {
    name: 'Management System',
    description:
      'Comprehensive platform for managing institutional operations, staff, and resources efficiently.',
    category: 'Operations',
    status: 'active',
    link: '/tools/inventorysystem',
  },
  {
    name: 'Student Information System',
    description:
      'Centralized student data management with enrollment tracking, academic records, and parent communication.',
    category: 'Student Management',
    status: 'coming-soon',
  },
  {
    name: 'Learning Management System',
    description:
      'Digital classroom tools for content delivery, assignments, assessments, and student engagement.',
    category: 'Learning',
    status: 'coming-soon',
  },
  {
    name: 'Attendance Management',
    description:
      'Automated attendance tracking with real-time notifications and comprehensive reporting.',
    category: 'Operations',
    status: 'coming-soon',
  },
  {
    name: 'Fee Management',
    description:
      'Streamlined fee collection, invoicing, payment tracking, and financial reporting.',
    category: 'Finance',
    status: 'coming-soon',
  },
  {
    name: 'Examination Portal',
    description:
      'End-to-end examination management from scheduling to results publication.',
    category: 'Academics',
    status: 'coming-soon',
  },
];

export default function Tools() {
  const ref = useScrollReveal();

  return (
    <section id="tools" className="section section-alt">
      <div className="container">
        <SectionHeader
          title="Our Tools"
          subtitle="Purpose-built software for educational institutions"
        />
        <div ref={ref} className={`${styles.grid} reveal reveal-children`}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`${styles.card} ${
                tool.status === 'coming-soon' ? styles.comingSoon : ''
              }`}
            >
              <span className={styles.badge}>{tool.category}</span>
              <h3 className={styles.name}>{tool.name}</h3>
              <p className={styles.description}>{tool.description}</p>
              {tool.status === 'active' ? (
                <a
                  href={tool.link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Tool →
                </a>
              ) : (
                <span className={styles.comingSoonLabel}>Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
