import Image from "next/image";

import styles from "@/styles/summary/SummaryItem.module.scss";

export default function SummaryItem({
  alt,
  src,
  category,
  result,
}: {
  alt: string;
  src: string;
  category: string;
  result: string;
}) {
  return (
    <li className={styles.root}>
      <Image
        alt={alt}
        className={styles.image}
        height={35}
        src={src}
        width={35}
      />
      <h3 className={styles.category}>{category}</h3>
      <h3 className={styles.result__text}>
        <span className={styles.result}>{result}</span>
        <span className={styles.total}> / 100</span>
      </h3>
    </li>
  );
}
