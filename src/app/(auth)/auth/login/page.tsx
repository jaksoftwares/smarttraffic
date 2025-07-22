'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';




export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to home page on successful login
    router.replace('/');
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          Login to Smarttraffic
        </h2>

        {error && <div className="text-red-400 text-sm mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
}
