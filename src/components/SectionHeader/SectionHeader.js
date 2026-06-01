import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
