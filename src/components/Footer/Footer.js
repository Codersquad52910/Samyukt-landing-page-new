import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const toolsLinks = [
  { label: 'All Tools', href: '/tools/' },
  { label: 'Management System', href: '/tools/inventorysystem' },
];

const servicesLinks = [
  { label: 'All Services', href: '/services/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <img
              src="/logo.jpg"
              alt="Samyukt"
              className={styles.footerLogo}
            />
            <p className={styles.tagline}>
              Digital solutions for modern education
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Tools</h4>
            <ul className={styles.list}>
              {toolsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.list}>
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; 2025 Samyukt. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.7 16h4.3M4 20L20 4" />
                <path d="M20 20l-7.3-10" />
                <path d="M4 4l7.3 10" />
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
