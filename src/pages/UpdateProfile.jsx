import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function UpdateProfile() {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(form.name, form.photoURL || null);
      toast.success('Profile updated successfully!');
      navigate('/my-profile');
    } catch {
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-md p-8 animate__animated animate__fadeIn">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Update Profile</h1>
        <p className="text-gray-500 text-sm mb-6">
          Update your display name and profile photo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="url"
              value={form.photoURL}
              onChange={e => setForm({ ...form, photoURL: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="https://your-photo-url.com/photo.jpg"
            />
          </div>

          {form.photoURL && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <img
                src={form.photoURL}
                alt="Preview"
                className="w-14 h-14 rounded-full object-cover border-2 border-green-400"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <p className="text-xs text-gray-500">Photo preview</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            {loading ? 'Updating...' : 'Update Information'}
          </button>
        </form>
      </div>
    </div>
  );
}
