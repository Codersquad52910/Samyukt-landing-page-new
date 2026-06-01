import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        {/* Banner Image */}
        <div className={styles.bannerWrapper}>
          <img
            src="/banner.jpg"
            alt="Samyukt — Digital solutions for modern education"
            className={styles.bannerImage}
            width={1200}
            height={320}
          />
        </div>

        {/* Text Content */}
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Educational Technology Platform
          </span>

          <h1 className={styles.headline}>
            Digital Solutions for Modern Education
          </h1>

          <p className={styles.subheadline}>
            Helping educational institutions streamline operations, improve
            efficiency, and embrace digital transformation through powerful
            software tools and expert services.
          </p>

          <div className={styles.actions}>
            <a href="/tools/" className="btn btn-primary">
              Explore Tools
            </a>
            <a href="/services/" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
