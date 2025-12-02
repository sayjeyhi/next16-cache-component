import { cachedFetchUserInFn} from "@/app/components/02-CacheServerAction/cached-bff-in-fn";

export async function CacheServerAction4() {
  const user = await cachedFetchUserInFn()

  return (
    <div className="border border-green-500 p-4 rounded-lg bg-green-50">
      <h3 className="font-semibold text-green-900 mb-2">Cached Server Action</h3>
      <p className="text-sm text-green-700 mb-2">
        No Component-level caching applied. Applied 'use cache' in the{' '}
        <code className="bg-green-100 px-1 rounded">&apos;fetchUser&apos;</code> INSIDE the function.
      </p>
      <div className="space-y-1 text-green-900">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Fetch Date:</strong> {user.fetchedAt}</p>
      </div>
    </div>
  )
}
