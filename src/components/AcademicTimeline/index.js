import Link from "next/link";
import React from "react";
import styles from "@styles/AcademicTimeline.module.css";
const AcademicTimeline = () => {
  return (
    <>
      <div className={styles.academicContainer}>
        <ul className={styles.academics}>
          <li className={styles.academicItem}>
            <Link
              href={"https://www.fazztrack.com/"}
              target="_blank"
              className="font-semibold"
            >
              Arkademy Tech Academy
            </Link>
            <div className="item-title">🔬 Fullstack Mobile Developer</div>
            <div className="item-title">📆 Jun 2022 - Des 2022</div>
          </li>
          <li className={styles.academicItem}>
            <Link
              href={"http://smkstaracita.mysch.id/kalender"}
              target="_blank"
              className="font-semibold"
            >
              SMK Islamiyah Ciawi
            </Link>
            <div className="item-title">🔬 Software Engineering</div>
            <div className="item-title">📆 Jun 2022 - Des 2022</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AcademicTimeline;
