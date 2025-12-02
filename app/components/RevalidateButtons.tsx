'use client'

import { revalidateTime, revalidateUser, revalidateAll } from '../actions'
import { useState } from 'react'

export function RevalidateButtons() {
  const [loading, setLoading] = useState<string | null>(null)

  async function handleRevalidate(action: () => Promise<any>, tag: string) {
    setLoading(tag)
    await action()
    setLoading(null)
  }

  return (
    <div className="border border-red-500 p-4 rounded-lg bg-red-50">
      <h3 className="font-semibold text-red-900 mb-2">Cache Revalidation</h3>
      <p className="text-sm text-red-700 mb-3">
        Click buttons to revalidate cached components using{' '}
        <code className="bg-red-100 px-1 rounded">revalidateTag</code>
      </p>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => handleRevalidate(revalidateTime, 'time')}
          disabled={loading !== null}
          className="px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading === 'time' ? 'Revalidating...' : 'Revalidate Time'}
        </button>

        <button
          onClick={() => handleRevalidate(revalidateUser, 'user')}
          disabled={loading !== null}
          className="px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading === 'user' ? 'Revalidating...' : 'Revalidate User'}
        </button>

        <button
          onClick={() => handleRevalidate(revalidateAll, 'all')}
          disabled={loading !== null}
          className="col-span-2 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:opacity-50"
        >
          {loading === 'all' ? 'Revalidating...' : 'Revalidate All'}
        </button>
      </div>
    </div>
  )
}
