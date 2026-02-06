import { Challenges } from "@/components/challenges";
import { Leaderboard } from "@/components/leaderboard";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Leaderboard */}
        <aside className="lg:col-span-1 sticky top-8 h-fit">
          <Leaderboard />
        </aside>

        {/* Right: Challenges */}
        <main className="lg:col-span-2">
          <Challenges />
        </main>
      </div>
    </section>
  );
}
