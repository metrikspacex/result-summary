import styles from "@/styles/summary/SummaryList.module.scss";
import type { Results } from "@/types/results";

import SummaryItem from "./SummaryItem";

export default function SummaryList({ results }: { results: Results }) {
  return (
    <ul className={styles.root}>
      {results.map((result) => (
        <SummaryItem
          alt={result.category}
          category={result.category}
          key={`SI${Math.random() * 1000 + result.category}`}
          result={result.score.toString()}
          src={result.icon}
        />
      ))}
    </ul>
  );
}
