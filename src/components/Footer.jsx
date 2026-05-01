import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐄</span>
              <span className="text-xl font-bold text-white">QurbaniHat</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted platform for booking healthy and certified livestock for Qurbani.
              We connect buyers with verified sellers across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/animals" className="hover:text-green-400 transition-colors">All Animals</Link></li>
              <li><Link to="/login" className="hover:text-green-400 transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-green-400 transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 support@qurbanihat.com</li>
              <li>📞 +880 1700-000000</li>
              <li>📍 Dhaka, Bangladesh</li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">📘</a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">🐦</a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">📸</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} QurbaniHat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
