import Summary from "@/components/Summary";
import type { Results } from "@/types/results";

export default async function Page() {
  const req = await fetch("http://localhost:3000/api");
  const data: Results = await req.json();
  return (
    <main>
      <Summary data={data} />
    </main>
  );
}
