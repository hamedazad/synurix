'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-white/70 mb-8">
          An error occurred while loading this page. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}




