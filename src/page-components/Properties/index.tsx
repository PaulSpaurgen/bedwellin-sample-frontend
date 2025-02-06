import React from 'react';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
}

const Properties: React.FC = () => {
  // Mock data - in a real app this would come from an API
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 450000,
      location: "123 Main St, Downtown",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2, 
      title: "Suburban Family Home",
      price: 650000,
      location: "456 Oak Ave, Suburbs",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      imageUrl: "https://placehold.co/600x400"
    },
    // Add more properties as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={property.imageUrl} 
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                ${property.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mt-2">{property.location}</p>
              <div className="flex justify-between mt-4 text-gray-600">
                <span>{property.bedrooms} beds</span>
                <span>{property.bathrooms} baths</span>
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;

