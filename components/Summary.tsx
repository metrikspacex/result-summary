"use client";

import SummaryButton from "@/components/SummaryButton";
import SummaryDisplay from "@/components/SummaryDisplay";
import SummaryList from "@/components/SummaryList";
import styles from "@/styles/summary/Summary.module.scss";
import type { Results } from "@/types/results";

export default function Summary({ data }: { data: Results }) {
  return (
    <section className={styles.root}>
      <SummaryDisplay results={data} />
      <div className={styles.body}>
        <h2 className={styles.summary}>Summary</h2>
        <SummaryList results={data} />
        <SummaryButton />
      </div>
    </section>
  );
}
