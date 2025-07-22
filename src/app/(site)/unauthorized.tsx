export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Access Denied</h2>
        <p className="text-gray-600 dark:text-gray-300">You do not have permission to view this page.</p>
      </div>
    </div>
  );
}
