import Link from "next/link"

export const revalidate = 60

export async function Challenges() {
  return (
    <section className="rounded-2xl bg-gray-900 p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-white">
        Player Challenges
      </h1>

      <ul className="space-y-4">
        <li className="rounded-xl bg-gray-800 p-4 hover:bg-gray-700 transition">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">
              Roberto vs Alex
            </h2>
            <span className="text-xs font-mono text-yellow-400">
              Active
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

        <li className="rounded-xl bg-gray-800 p-4 hover:bg-gray-700 transition">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">
              Roberto vs Alex
            </h2>
            <span className="text-xs font-mono text-green-400">
              Won
            </span>
          </div>

  

          <div className="mt-3 flex gap-3">
            <Link
              href="#"
              className="text-sm font-medium text-blue-400 hover:underline"
            >
              View result
            </Link>
          </div>
        </li>

        <li className="rounded-xl bg-gray-800 p-4 hover:bg-gray-700 transition">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">
              Atri vs Manu
            </h2>
            <span className="text-xs font-mono text-red-400">
              Lost
            </span>
          </div>

          <div className="mt-3 flex gap-3">
            <Link
              href="#"
              className="text-sm font-medium text-blue-400 hover:underline"
            >
              Rematch →
            </Link>
          </div>
        </li>
      </ul>
    </section>
  )
}
