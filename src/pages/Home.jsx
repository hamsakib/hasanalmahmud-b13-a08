import { Link } from 'react-router-dom';
import animals from '../data/animals.json';
import AnimalCard from '../components/AnimalCard';

const tips = [
  {
    icon: '🏥',
    title: 'Health Check',
    desc: 'Ensure the animal has a valid health certificate from a certified vet before purchase.',
  },
  {
    icon: '⚖️',
    title: 'Weight Matters',
    desc: 'Choose an animal with the right weight for your family size. 30–50 kg per share is ideal.',
  },
  {
    icon: '🌿',
    title: 'Natural Feed',
    desc: 'Animals fed on grass, hay, and natural feed produce better quality meat for Qurbani.',
  },
  {
    icon: '📋',
    title: 'Valid Documents',
    desc: 'Always ask for vaccination records and farm documentation to ensure authenticity.',
  },
];

const breeds = [
  {
    name: 'Black Bengal Goat',
    origin: 'Bangladesh',
    strength: 'Disease Resistant',
    img: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=300&h=200&fit=crop',
  },
  {
    name: 'Brahman Bull',
    origin: 'India / BD',
    strength: 'Heat Tolerant',
    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=300&h=200&fit=crop',
  },
  {
    name: 'Jamunapari Goat',
    origin: 'India',
    strength: 'Large Frame',
    img: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=300&h=200&fit=crop',
  },
  {
    name: 'Sindhi Cow',
    origin: 'Pakistan / BD',
    strength: 'Heat Tolerant',
    img: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=300&h=200&fit=crop',
  },
];

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center min-h-[520px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white animate__animated animate__fadeInUp">
          <p className="text-green-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            Qurbani Season 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-green-400">Qurbani Animal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Explore healthy, certified livestock from trusted sellers across Bangladesh.
            Book your Qurbani animal with ease.
          </p>
          <Link
            to="/animals"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl text-lg transition-colors shadow-lg"
          >
            Browse Animals →
          </Link>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Animals</h2>
          <p className="text-gray-500 mt-2">Hand-picked livestock for this Qurbani season</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/animals"
            className="inline-block border-2 border-green-600 text-green-700 font-semibold px-8 py-2.5 rounded-xl hover:bg-green-50 transition-colors"
          >
            View All Animals
          </Link>
        </div>
      </section>

      {/* Qurbani Tips */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Qurbani Tips</h2>
            <p className="text-gray-500 mt-2">Important guidelines for a proper Qurbani</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center animate__animated animate__fadeInUp"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Top Breeds This Season</h2>
          <p className="text-gray-500 mt-2">Most popular livestock breeds for Qurbani</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {breeds.map((breed, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={breed.img}
                alt={breed.name}
                className="w-full h-36 object-cover"
                onError={e => { e.target.src = 'https://placehold.co/300x200/22c55e/white?text=' + encodeURIComponent(breed.name); }}
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-800">{breed.name}</h3>
                <p className="text-sm text-gray-500">{breed.origin}</p>
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {breed.strength}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Why Choose QurbaniHat?</h2>
            <p className="text-gray-400 mt-2">Your most trusted Qurbani livestock marketplace</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✅',
                title: 'Verified Sellers',
                desc: 'All sellers are verified with proper documentation and farm inspection.',
              },
              {
                icon: '🚚',
                title: 'Delivery Available',
                desc: 'Get your Qurbani animal delivered right to your doorstep on time.',
              },
              {
                icon: '💯',
                title: 'Quality Guaranteed',
                desc: 'Every animal is health-checked and certified before listing on our platform.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
