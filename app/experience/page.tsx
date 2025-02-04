import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Experience() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Experience</h1>
        <ul className="space-y-4">
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Summer Internship at Tech Co.</h2>
            <p className="text-neutral-400 mt-2">Developed scalable solutions for cloud-based applications</p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Research Assistant</h2>
            <p className="text-neutral-400 mt-2">Assisted in AI research at University Lab</p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Freelance Web Developer</h2>
            <p className="text-neutral-400 mt-2">Created responsive websites for small businesses</p>
          </li>
        </ul>
        <Button asChild className="mt-8 bg-neutral-700 hover:bg-neutral-600 text-neutral-100">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

