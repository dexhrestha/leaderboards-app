import { getRankings } from "@/lib/notion"

export const revalidate = 60

const NOTION_LEADER_DB_ID = process.env.NOTION_LEADER_DB_ID
if (!NOTION_LEADER_DB_ID) {
  throw new Error("Missing NOTION_LEADER_DB_ID environment variable")
}

export async function Leaderboard() {
  const rankings = await getRankings(NOTION_LEADER_DB_ID!)

  const medal = (rank: number) => {
    if (rank === 1) return "🥇"
    if (rank === 2) return "🥈"
    if (rank === 3) return "🥉"
    return null
  }

  return (
    <aside className="rounded-2xl bg-gray-900 p-6 shadow-lg">
      <h1 className="mb-4 text-xl font-bold text-white">Leaderboard</h1>

      <ul className="space-y-3">
        {rankings.results.map((entry: any) => {
          const name = entry.properties.Name.title[0]?.plain_text ?? "Unknown"
          const rank = entry.properties.Rank.number

          return (
            <li
              key={entry.id}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium
                ${
                  rank === 1
                    ? "bg-yellow-500 text-gray-900"
                    : rank === 2
                    ? "bg-gray-300 text-gray-900"
                    : rank === 3
                    ? "bg-amber-700 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{medal(rank)}</span>
                <span>{name}</span>
              </div>
              <span className="font-mono">#{rank}</span>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
