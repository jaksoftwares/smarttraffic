// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/auth/login"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
