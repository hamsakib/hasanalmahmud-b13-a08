import { Link } from 'react-router-dom';

export default function AnimalCard({ animal }) {
  const { id, name, type, breed, price, weight, location, image } = animal;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeIn">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          onError={e => { e.target.src = 'https://placehold.co/600x400/22c55e/white?text=' + encodeURIComponent(name); }}
        />
        <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${
          type === 'Cow'
            ? 'bg-amber-100 text-amber-800'
            : 'bg-purple-100 text-purple-800'
        }`}>
          {type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg truncate">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{breed} • {location}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <span>⚖️ {weight} kg</span>
          <span className="text-green-700 font-bold text-base">
            ৳{price.toLocaleString()}
          </span>
        </div>
        <Link
          to={`/animals/${id}`}
          className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
