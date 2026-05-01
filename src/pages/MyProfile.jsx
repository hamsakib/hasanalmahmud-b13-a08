import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function MyProfile() {
  const { user } = useAuth();

  const avatarUrl =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.displayName || user?.email || 'U'
    )}&background=16a34a&color=fff&size=128`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden animate__animated animate__fadeIn">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 h-32"></div>
        <div className="px-6 pb-8">
          <div className="-mt-16 mb-4">
            <img
              src={avatarUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              onError={e => {
                e.target.src = `https://ui-avatars.com/api/?name=User&background=16a34a&color=fff&size=128`;
              }}
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {user?.displayName || 'User'}
          </h1>
          <p className="text-gray-500">{user?.email}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <span className="text-xl">👤</span>
              <div>
                <p className="text-xs text-gray-400 uppercase font-medium">Name</p>
                <p className="font-medium text-gray-800">{user?.displayName || 'Not set'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <span className="text-xl">📧</span>
              <div>
                <p className="text-xs text-gray-400 uppercase font-medium">Email</p>
                <p className="font-medium text-gray-800">{user?.email}</p>
              </div>
            </div>
            {user?.photoURL && (
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <span className="text-xl">🖼️</span>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-400 uppercase font-medium">Photo URL</p>
                  <p className="font-medium text-gray-800 text-sm truncate">{user.photoURL}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link
              to="/update-profile"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
