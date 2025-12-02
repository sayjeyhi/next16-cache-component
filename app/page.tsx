import { Suspense } from 'react'
import { CachedTime1} from '@/app/components/01-CacheTime/1'
import { CachedTime2} from '@/app/components/01-CacheTime/2'
import { CacheServerAction1 } from './components/02-CacheServerAction/1'
import { CacheServerAction2 } from './components/02-CacheServerAction/2'
import { CacheServerAction3 } from './components/02-CacheServerAction/3'
import { CacheServerAction4 } from './components/02-CacheServerAction/4'
import { DonutPattern } from './components/DonutPattern'
import { Counter } from './components/Counter'
import { RevalidateButtons } from './components/RevalidateButtons'
import Link from "next/link";
import {NotCachedTime} from "@/app/components/NotCachedTime";

function LoadingCard({ color }: { color: string }) {
  return (
    <div className={`border border-${color}-500 p-4 rounded-lg bg-${color}-50 animate-pulse`}>
      <div className={`h-4 bg-${color}-200 rounded w-3/4 mb-2`}></div>
      <div className={`h-3 bg-${color}-200 rounded w-1/2`}></div>
      <h1 className="text-center text-gray-400 mt-4">Loading...</h1>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <Link href="/test" className="text-blue-600 underline mb-6 inline-block">
          Go to Test Page
        </Link>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Server Components (Cached)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CachedTime1 />
              <CachedTime2 />
              <CacheServerAction1 />
              <CacheServerAction2 />
              <CacheServerAction3 />
              <CacheServerAction4 />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Server Components (Not Cached)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Suspense fallback={<LoadingCard color="blue" />}>
                <NotCachedTime />
              </Suspense>
              <Suspense fallback={<LoadingCard color="purple" />}>
                <Counter />
              </Suspense>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Donut Pattern
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Server component (outer donut) wraps a client component (inner hole).
                  The server layer is cached, but the client component remains interactive.
                </p>

                <Suspense fallback={<LoadingCard color="orange" />}>
                  <DonutPattern />
                </Suspense>
              </section>


              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Cache Revalidation
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Use <code className="bg-gray-200 px-1 rounded">revalidateTag</code> to invalidate specific
                  cached components. Click a button and refresh to see updated content.
                </p>

                <RevalidateButtons />
              </section>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
