'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Ecosystem.module.css';

const branches = [
  {
    label: 'Tools',
    leaves: ['Management System', 'Student Information System', 'Learning Management System', 'More Coming'],
  },
  {
    label: 'Services',
    leaves: ['Consulting', 'Implementation', 'Training', 'Support'],
  },
];

export default function Ecosystem() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          title="Our Ecosystem"
          subtitle="An expanding platform of educational solutions"
        />

        <div className={styles.tree}>
          {/* Central node */}
          <div className={styles.root}>
            <span className={styles.rootLabel}>Samyukt</span>
          </div>

          {/* Vertical stem from root */}
          <div className={styles.stem} />

          {/* Branches container */}
          <div className={styles.branches}>
            {branches.map((branch) => (
              <div key={branch.label} className={styles.branch}>
                {/* Branch node */}
                <div className={styles.branchNode}>
                  <span className={styles.branchLabel}>{branch.label}</span>
                </div>

                {/* Vertical stem to leaves */}
                <div className={styles.branchStem} />

                {/* Leaf nodes */}
                <div className={styles.leaves}>
                  {branch.leaves.map((leaf) => (
                    <span key={leaf} className={styles.leaf}>
                      {leaf}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
