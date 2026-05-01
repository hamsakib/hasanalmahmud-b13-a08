import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center animate__animated animate__fadeIn">
        <div className="text-8xl mb-4">🐄</div>
        <h1 className="text-7xl font-bold text-green-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          Oops! The page you&apos;re looking for has wandered off the farm.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
