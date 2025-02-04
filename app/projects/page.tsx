import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <ul className="space-y-4">
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Personal Blog</h2>
            <p className="text-neutral-400 mt-2">A platform to share my journey in tech</p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Weather App</h2>
            <p className="text-neutral-400 mt-2">Real-time forecasts using modern APIs</p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Machine Learning Model</h2>
            <p className="text-neutral-400 mt-2">Predictive analysis for stock market trends</p>
          </li>
        </ul>
        <Button asChild className="mt-8 bg-neutral-700 hover:bg-neutral-600 text-neutral-100">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

