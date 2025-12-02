import { sleep } from "@/app/utils";

export async function NotCachedTime() {
  await sleep(200)
  const now = new Date().toLocaleString()

  return (
    <div className="border border-blue-500 p-4 rounded-lg bg-blue-50">
      <h3 className="font-semibold text-blue-900 mb-2">Not Cached Server Time</h3>
      <p className="text-sm text-blue-700 mb-2">
        This component uses <code className="bg-blue-100 px-1 rounded">&apos;use cache&apos;</code>
        {' '}and sleeps for 200ms before rendering.
      </p>
      <p className="text-blue-900">
        Time: <span className="font-mono font-bold">{now}</span>
      </p>
      <p className="text-xs text-blue-600 mt-2">
        Tagged with: <code className="bg-blue-100 px-1 rounded">&apos;time&apos;</code>
      </p>
    </div>
  )
}
