'use client'

import { useState, useEffect } from 'react'

export function Counter() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-purple-500 p-4 rounded-lg bg-purple-50">
      <h3 className="font-semibold text-purple-900 mb-2">Client Component</h3>
      <p className="text-sm text-purple-700 mb-3">
        Interactive component with{' '}
        <code className="bg-purple-100 px-1 rounded">&apos;use client&apos;</code>
      </p>
      <div className="mb-3">
        <p className="text-sm text-purple-700 mb-1">Current Time:</p>
        <p className="font-mono text-lg font-semibold text-purple-900" suppressHydrationWarning>
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          -
        </button>
        <span className="font-mono text-xl font-bold text-purple-900">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          +
        </button>
      </div>
    </div>
  )
}
