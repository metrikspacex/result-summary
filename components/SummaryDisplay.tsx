import { useEffect, useState } from "react";

import styles from "@/styles/summary/SummaryDisplay.module.scss";
import type { Results } from "@/types/results";

export default function SummaryDisplay({ results }: { results: Results }) {
  const [sum, setSum] = useState<number>(0);
  useEffect(() => {
    const summation = Math.floor(
      results
        .filter((result) => result.score)
        .reduce((x, current) => x + current.score, 0) / results.length
    );
    setSum(summation);
  }, [results, setSum]);
  return (
    <div className={styles.root}>
      <h2 className={styles.results__primary__subheading}>Your Results</h2>
      <div className={styles.results__visual}>
        <h1 className={styles.results__visual__text}>
          <span className={styles.results__visual__sum}>{sum}</span>
          <span className={styles.results__visual__total}> of 100</span>
        </h1>
      </div>
      <h2 className={styles.results__secondary__subheading}>Great</h2>
      <p className={styles.results__ranking}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
