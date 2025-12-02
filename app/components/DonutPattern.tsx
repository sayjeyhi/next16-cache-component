'use cache'

import { cacheTag } from 'next/cache'
import { Counter } from './Counter'
import {fetchUser} from "@/app/components/02-CacheServerAction/bff";


export async function DonutPattern() {
  cacheTag('posts')

  const user = await fetchUser()

  return (
    <div className="border border-orange-500 p-4 rounded-lg bg-orange-50">
      <h3 className="font-semibold text-orange-900 mb-2">Donut Pattern Example</h3>
      <p className="text-sm text-orange-700 mb-3">
        Server component (cached) wrapping a client component (not cached).
        The outer layer fetches data, inner layer is interactive.
      </p>

      <pre>
      {JSON.stringify(user)}
      </pre>

      <div className="mt-3 pt-3 border-t border-orange-300">
        <p className="text-xs text-orange-600 mb-2">
          Client component below is NOT cached:
        </p>
        <Counter />
      </div>

      <p className="text-xs text-orange-600 mt-3">
        Tagged with: <code className="bg-orange-100 px-1 rounded">&apos;posts&apos;</code>
      </p>
    </div>
  )
}
