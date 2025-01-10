"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from './Maintenance.module.css';

export default function MaintenancePage() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "We're making some improvements to our systems to serve you better. We'll be back online shortly.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [index, fullText]);

  return (
    <div className={styles.maintenanceContainer}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={64}
          height={64}
          priority
        />
      </div>

      <h1 className={styles.heading}>Under Maintenance</h1>
      <p className={styles.typingText}>{displayedText}</p>
    </div>
  );
}
