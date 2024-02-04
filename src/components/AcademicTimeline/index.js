import Link from "next/link";
import React from "react";
import styles from "@styles/AcademicTimeline.module.css";

const AcademicTimeline = () => {
  return (
    <div className={styles.academicContainer}>
      <ul className={styles.academics}>
        <li className={styles.academicItem}>
          <Link
            href={"https://uici.ac.id/"}
            target="_blank"
            className="font-semibold"
          >
            Insan Cita Indonesia University
          </Link>
          <div className="item-title">🔬 Data Science</div>
          <div className="item-title">📆 Mar 2024 - Present</div>
        </li>
        <li className={styles.academicItem}>
          <Link
            href={"https://www.fazztrack.com/"}
            target="_blank"
            className="font-semibold"
          >
            Arkademy Tech Academy
          </Link>
          <div className="item-title">🔬 Fullstack Mobile Developer</div>
          <div className="item-title">📆 Dec 2020 - Mar 2021</div>
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
          <div className="item-title">📆 Jun 2016 - Jun 2019</div>
        </li>
      </ul>
    </div>
  );
};

export default AcademicTimeline;
