import {cacheLife, cacheTag} from 'next/cache'
import {fetchUser} from "@/app/components/02-CacheServerAction/bff";

export async function CacheServerAction2() {
  'use cache';
  const tagName = 'server-action-user-2'

  cacheTag(tagName)
  cacheLife('userCacheLife' as any)


  const user = await fetchUser()
  const fetchedAt = new Date().toLocaleString()

  return (
    <div className="border border-green-500 p-4 rounded-lg bg-green-50">
      <h3 className="font-semibold text-green-900 mb-2">Cached Server Action</h3>
      <p className="text-sm text-green-700 mb-2">
        <code className="bg-green-100 px-1 rounded">&apos;use cache&apos;</code> INSide
        Revalidate every 10 seconds.
      </p>
      <div className="space-y-1 text-green-900">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Fetch Date:</strong> {fetchedAt}</p>
      </div>
      <p className="text-xs text-green-600 mt-2">
        Tagged with: <code className="bg-green-100 px-1 rounded">&apos;{tagName}&apos;</code>
      </p>
    </div>
  )
}
