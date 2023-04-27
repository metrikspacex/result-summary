import Summary from "@/components/Summary";
import type { Results } from "@/types/results";

export default async function Page() {
  // GH Page api request won't work on static generation
  // const req = await fetch("https://metrikspacex.github.io/result-summary/api");
  // const data: Results = await req.json();
  const data: Results = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
    },
  ];
  return (
    <main>
      <Summary data={data} />
    </main>
  );
}
