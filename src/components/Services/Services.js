'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Services.module.css';

const services = [
  {
    name: 'Software Implementation',
    summary:
      'End-to-end deployment of educational software solutions tailored to your institution.',
    details:
      'We handle everything from requirements analysis to deployment, ensuring smooth adoption with minimal disruption to your operations.',
    benefits: ['Custom configuration', 'Data migration support', 'Staff onboarding'],
    suitable: 'All educational institutions',
  },
  {
    name: 'Educational Consulting',
    summary:
      'Strategic guidance for modernizing institutional processes and technology adoption.',
    details:
      'Our consultants work with your leadership team to identify opportunities for improvement and create actionable digital transformation roadmaps.',
    benefits: ['Process assessment', 'Technology roadmap', 'Change management'],
    suitable: 'Schools, Colleges, Universities',
  },
  {
    name: 'Data Migration',
    summary:
      'Secure and reliable transfer of existing data to modern platforms.',
    details:
      'We ensure your historical data is accurately migrated with zero loss, maintaining data integrity throughout the transition process.',
    benefits: ['Zero data loss', 'Format standardization', 'Validation reports'],
    suitable: 'Institutions with legacy systems',
  },
  {
    name: 'Staff Training',
    summary:
      'Comprehensive training programs for administrators, faculty, and support staff.',
    details:
      'Interactive training sessions designed to build confidence and competence with new tools, ensuring your team gets maximum value from every solution.',
    benefits: ['Hands-on workshops', 'Training materials', 'Ongoing support'],
    suitable: 'All educational institutions',
  },
  {
    name: 'Technical Support',
    summary:
      'Dedicated support team available to resolve issues and optimize performance.',
    details:
      'From troubleshooting to performance optimization, our support team ensures your systems run smoothly around the clock.',
    benefits: ['Priority response', 'Regular maintenance', 'Performance monitoring'],
    suitable: 'Active Samyukt users',
  },
  {
    name: 'Custom Development',
    summary:
      "Bespoke software solutions designed for your institution's unique requirements.",
    details:
      "When off-the-shelf solutions don't fit, our development team builds custom tools that integrate seamlessly with your existing ecosystem.",
    benefits: ['Tailored solutions', 'API integrations', 'Scalable architecture'],
    suitable: 'Institutions with specific needs',
  },
];

export default function Services() {
  const ref = useScrollReveal();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          title="Our Services"
          subtitle="Expert guidance for your digital transformation journey"
        />
        <div ref={ref} className={`${styles.grid} reveal reveal-children`}>
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.name}
                className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
              >
                <h3 className={styles.name}>{service.name}</h3>
                <p className={styles.summary}>{service.summary}</p>

                <div
                  className={styles.details}
                  style={{
                    maxHeight: isExpanded ? '400px' : '0',
                  }}
                >
                  <div className={styles.detailsInner}>
                    <p className={styles.detailText}>{service.details}</p>
                    <ul className={styles.benefits} role="list">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className={styles.benefit}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.suitable}>
                      <span className={styles.suitableLabel}>Suitable for:</span>{' '}
                      {service.suitable}
                    </p>
                  </div>
                </div>

                <button
                  className={styles.toggle}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show Less ↑' : 'Learn More →'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
