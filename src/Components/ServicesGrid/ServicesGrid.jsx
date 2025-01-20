import React from 'react';

const services = [
  {
    title: "Voice & Speech Data Solutions",
    description: "Voice-overs, data collection; partnered with Bhashini...",
    icon: "📝",
  },
  {
    title: "Audiobooks & Podcasts:",
    description: "High-quality audiobooks in Tamil, Hindi, Urdu, Bengali",
    icon: "⏳",
  },
  {
    title: "Language Solutions:",
    description: "Translation, localization, transcription, and more for clients",
    icon: "🏅",
  },
  {
    title: "Digitization Services",
    description: "Digital archiving for books, manuscripts, corporate data...",
    icon: "🛠️",
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow-md">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-gray-800 text-white px-4 py-2 rounded">Info</button>
  </div>
);

const ServicesGrid = () => (
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8" id="aboutus">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
);

export default ServicesGrid;
