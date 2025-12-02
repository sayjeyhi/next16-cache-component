import Link from "next/link";

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">


      <h1 className="text-3xl font-bold text-gray-800 mb-4">Test Page</h1>
      <p className="text-gray-600">
        This is a simple test page to demonstrate navigation in a Next.js application.
      </p>


      <Link href="/" className="text-blue-600 underline mb-6 inline-block">
        &lt; Go back to home
      </Link>
    </div>
  )
}
