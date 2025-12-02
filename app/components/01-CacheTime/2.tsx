
export async function CachedTime2() {
  'use cache'
  const now = new Date().toLocaleString()

  return (
    <div className="border border-blue-500 p-4 rounded-lg bg-blue-50">
      <h3 className="font-semibold text-blue-900 mb-2">Cached Server Time  - Cache Tag: <code className="bg-blue-100 px-1 rounded">&apos;time&apos;</code>
      </h3>
      <p className="text-sm text-blue-700 mb-2">
        'use cache' INSide of the component
      </p>
      <p className="text-blue-900">
        Time: <span className="font-mono font-bold">{now}</span>
      </p>
    </div>
  )
}
