import { getChallenges } from "@/lib/notion"
import Link from "next/link"

export const revalidate = 60


const NOTION_LEADER_DB_ID = process.env.NOTION_LEADER_DB_ID
if (!NOTION_LEADER_DB_ID) {
  throw new Error("Missing NOTION_LEADER_DB_ID environment variable")
}

export async function Challenges() {
   const challenges = await getChallenges(NOTION_LEADER_DB_ID!);
   console.log(challenges.results);
  return (
    <section className="rounded-2xl bg-gray-900 p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-white">
        Player Challenges
      </h1>

      <ul className="space-y-4">
         {challenges.results.map((entry:any)=>{
            console.log(entry.properties.Challenger)
            const challenger = entry.properties.Challenger.select.name ?? "Unknown"
            const challenged = entry.properties.Name.title[0]?.plain_text ?? "Unknown"
            const status = entry.properties.Result.status.name;
            return (<li className="rounded-xl bg-gray-800 p-4 hover:bg-gray-700 transition">
            <div className="flex items-center justify-between">
               <h2 className="font-semibold text-white">
               {challenger} vs {challenged}
               </h2>
               <span className="text-xs font-mono text-yellow-400">
               {challenged} {status}
               </span>
            </div>

         

            <div className="mt-3 flex gap-3">
               <Link
               href="#"
               className="text-sm font-medium text-blue-400 hover:underline"
               >
               View
               </Link>
               <Link
               href="#"
               className="text-sm font-medium text-red-400 hover:underline"
               >
               Forfeit
               </Link>
            </div>
         </li>
         )})}
      </ul>
    </section>
  )
}
