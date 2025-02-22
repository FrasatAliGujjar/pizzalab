"use client";

import React from 'react'

const Loader = () => {
  // ----------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  // ----------------------------------------------------------------

  return (
    <>
      {/* ============================================================= */}
      {
        isLoading ?
          (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="relative w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                <div className="absolute top-2 left-2 w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          ) : (
            <main className="p-4">
              <h1 className="text-3xl font-bold text-center">Welcome to My Project!</h1>
              <p className="mt-4 text-center text-gray-600">
                This is the main content of your page.
              </p>
            </main>
          )
      }
      {/* ============================================================= */}

    </>
  )
}

export default loader
