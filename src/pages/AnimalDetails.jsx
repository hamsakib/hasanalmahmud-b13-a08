import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import animals from '../data/animals.json';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function AnimalDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const animal = animals.find(a => a.id === parseInt(id));

  const [form, setForm] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
  });

  if (!animal) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Animal not found.</p>
        <Link to="/animals" className="text-green-600 hover:underline mt-2 inline-block">
          ← Back to Animals
        </Link>
      </div>
    );
  }

  const { name: animalName, type, breed, price, weight, age, location, description, image, category } = animal;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('🎉 Booking confirmed! We will contact you soon.');
    setForm({
      name: user?.displayName || '',
      email: user?.email || '',
      phone: '',
      address: '',
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/animals" className="text-green-600 hover:underline text-sm mb-6 inline-block">
        ← Back to All Animals
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Animal Info */}
        <div>
          <img
            src={image}
            alt={animalName}
            className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
            onError={e => { e.target.src = 'https://placehold.co/600x400/22c55e/white?text=' + encodeURIComponent(animalName); }}
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{animalName}</h1>
          <p className="text-gray-500 mb-5">{category} • {type}</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Breed', value: breed },
              { label: 'Weight', value: `${weight} kg` },
              { label: 'Age', value: `${age} year(s)` },
              { label: 'Location', value: location },
              { label: 'Price', value: `৳${price.toLocaleString()}` },
              { label: 'Category', value: category },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-medium mb-0.5">{label}</p>
                <p className="font-semibold text-gray-800 text-sm">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-2">About this animal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sticky top-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Book This Animal</h2>
            <p className="text-gray-500 text-sm mb-6">Fill in your details to confirm your booking.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea
                  required
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  placeholder="Your full delivery address"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Confirm Booking
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No payment required now. Our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
