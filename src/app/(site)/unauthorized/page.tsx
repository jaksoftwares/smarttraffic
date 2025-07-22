'use client';

import { useRouter } from 'next/navigation';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function AccessDeniedPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4"
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <HiOutlineLockClosed className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You don’t have permission to view this page. Please contact your administrator if you think this is an error.
        </p>
        <button
          onClick={() => router.back()}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </motion.div>
  );
}
