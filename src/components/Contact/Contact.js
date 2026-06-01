'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Contact.module.css';

const contactInfo = [
  {
    label: 'founder@samyukt.co.in',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    label: '+91 9548725319',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'India',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeader
            title="Get in Touch"
            subtitle="Ready to transform your institution? Let's talk."
          />
          <div className={styles.infoRow}>
            {contactInfo.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.icon}>{item.icon}</div>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.cta}>
            <a
              href="mailto:founder@samyukt.co.in"
              className={`btn btn-primary ${styles.btn}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
