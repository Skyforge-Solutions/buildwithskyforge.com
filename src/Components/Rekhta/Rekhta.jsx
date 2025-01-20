import React from "react";

const stats = [
  { label: "Pages Digitized", value: "80+", icon: "🏅" },
  { label: "Machines Deployed", value: "85+", icon: "✅" },
  { label: "Team Size", value: "100+", icon: "👥" },
];

const RekhtaSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      {/* Left Side Image */}
      <div className="flex items-center justify-center">
        <img
          src="/rekhta.png" // Replace with the actual image URL
          alt="Rekhta"
          className="w-full h-full rounded-lg shadow-lg"
          style={{minHeight: "200px"}}
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center">
        <h3 className="text-green-700 text-lg font-bold mb-2 uppercase">
          A Bit
        </h3>
        <h2 className="text-3xl font-bold mb-4">We Have Worked with</h2>
        <p className="text-gray-700 text-lg mb-4">
          Digitized rare books and manuscripts in 60+ libraries and personal
          collections of writers across 30+ cities in India. Prominent libraries
          namely: Khuda Bakhsh Oriental Public Library, Patna • Rampur Raza
          Library, Rampur • Iqbal Library, Bhopal • Public Library,
          Sardashahar, Rajasthan • Government Nizamia Tibbi College, Hyderabad •
          Bharatiya Bhasha Parishad, Kolkata
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h4 className="text-2xl font-bold">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RekhtaSection;
